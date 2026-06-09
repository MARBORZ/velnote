import { RequestHandler } from "express";

export const tryCatch =
  (fn: RequestHandler): RequestHandler =>
  async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: `Internal server error.`,
      });
    }
  };
