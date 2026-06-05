import { RequestHandler } from "express";

export const tryCatch =
  (fn: RequestHandler): RequestHandler =>
  async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      console.log(error);
      return res.json({
        status: 500,
        message: `Internal server error.`,
      });
    }
  };
