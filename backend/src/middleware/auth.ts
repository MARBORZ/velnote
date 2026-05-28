import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token || !process.env.JWT_TOKEN) return res.json({ status: 401 });

  return jwt.verify(String(token), process.env.JWT_TOKEN, (error, decoded) => {
    if (error) return res.json({ status: 401, message: "Invalid Token" });

    return next();
  });
};
