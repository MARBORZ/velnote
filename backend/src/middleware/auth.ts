import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });
  if (!process.env.JWT_TOKEN)
    return res.status(500).json({ message: "Server config error" });

  return jwt.verify(String(token), process.env.JWT_TOKEN, (error, decoded) => {
    if (error) return res.status(401).json({ message: "Invalid Token" });

    req.user = decoded as { userId: number; email: string; role: string };
    return next();
  });
};
