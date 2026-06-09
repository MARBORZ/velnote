import { RequestHandler, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userSchema } from "../validators/schemas.js";
import { pool } from "../db/pool.js";
import { User } from "../types/index.js";
import { tryCatch } from "../utils/tryCatch.js";

export const authRouter = Router();

// REGISTER USER
const registerUser: RequestHandler = async (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success)
    return res.status(400).json({ message: "Fail to register." });

  const { email, password } = result.data;

  const existing = await pool.query<User>(
    "SELECT id FROM users WHERE email = $1",
    [email],
  );

  if (existing.rows.length > 0)
    return res.status(409).json({
      message:
        "We have this email in our Database. Please try again with another one.",
    });

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS) || 12,
  );

  const { rows } = await pool.query<User>(
    `
      INSERT INTO users (email, password, role)
      VALUES ($1, $2, 'user')
      RETURNING id, email, role
    `,
    [email, hashedPassword],
  );

  const user = rows[0];

  if (!user) return res.status(500).json({ message: "Failed to create user." });

  const { password: _, ...safeUser } = user;

  return res.status(201).json({
    message: "OK",
    user: safeUser,
  });
};
authRouter.post("/register", tryCatch(registerUser));

// LOGIN USER
const loginUser: RequestHandler = async (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success)
    return res.status(400).json({ message: "Fail to login." });

  const { email, password } = result.data;

  const { rows } = await pool.query<User>(
    "SELECT * FROM users WHERE email = $1",
    [email],
  );

  const user = rows[0];
  if (!user) return res.status(404).json({ message: "No user found." });

  const comparePassword = await bcrypt.compare(password, user?.password);
  if (comparePassword) {
    if (!process.env.JWT_TOKEN)
      return res.status(500).json({ message: "Server config error" });

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      message: `Welcome, ${user?.email || "User"}.`,
      token,
    });
  } else {
    return res.status(401).json({
      message: "Failed to login. Check password or email.",
    });
  }
};
authRouter.post("/login", tryCatch(loginUser));
