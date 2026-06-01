import { RequestHandler, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { users } from "../data/mockData.js";
import { userSchema } from "../validators/schemas.js";

export const authRouter = Router();

// REGISTER USER
const registerUser: RequestHandler = async (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success)
    return res.json({ status: 401, message: "Fail to register." });

  const { email, password } = result.data;

  if (users.some((u) => u.email === email))
    return res.json({
      status: 404,
      message:
        "We have this email in out Database. Please try again with another one.",
    });

  const hashedPassword = await bcrypt.hash(
    password,
    Number(process.env.SALT_ROUNDS) || 12,
  );

  const user = {
    id: Number(Date.now()),
    email: String(email),
    password: String(hashedPassword),
    role: "user" as const,
  };

  users.push(user);

  return res.json({
    status: 200,
    message: "OK",
    email: email,
    password: hashedPassword, // TEST DEV
  });
};
authRouter.post("/register", registerUser);

// LOGIN USER
const loginUser: RequestHandler = async (req, res) => {
  const result = userSchema.safeParse(req.body);

  if (!result.success)
    return res.json({ status: 401, message: "Fail to login." });

  const { email, password } = result.data;

  const user = users.find((u) => u.email === email);
  if (!user) return res.json({ status: 404, message: "No user found." });

  const comparePassword = await bcrypt.compare(password, user?.password);
  if (comparePassword) {
    if (!process.env.JWT_TOKEN) return;

    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" },
    );

    return res.json({
      status: 200,
      message: `Welcome, ${user?.email || "User"}.`,
      token: token,
    });
  } else {
    return res.json({
      status: 401,
      message: "Failed to login. Check password or email.",
    });
  }
};
authRouter.post("/login", loginUser);
