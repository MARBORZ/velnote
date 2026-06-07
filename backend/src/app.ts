import express, { json } from "express";
import cors from "cors";
import { type Request, type Response } from "express";
import { notesRouter } from "./routes/notes.js";
import { authRouter } from "./routes/auth.js";
import { verifyJWT } from "./middleware/auth.js";

export const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

// JSON PARSER MIDDLEWARE
app.use(json());
app.use(cors(corsOptions));

// NOTES
app.use("/api/notes", verifyJWT, notesRouter);

// AUTH
app.use("/api/auth", authRouter);

// BASE
app.get("/", (req: Request, res: Response) => {
  res.json({ status: 200, message: "Go to /api/notes" });
});
