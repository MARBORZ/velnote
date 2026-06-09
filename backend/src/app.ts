import express, { json } from "express";
import cors from "cors";
import { type Request, type Response } from "express";
import { notesRouter } from "./routes/notes.js";
import { authRouter } from "./routes/auth.js";
import { verifyJWT } from "./middleware/auth.js";

export const app = express();

const state = process.env.STATE === "dev" ? "dev" : "prod";
const allowed = (process.env.CORS_ORIGIN ?? "").split(",");

const corsOptions = {
  origin: state === "dev" ? "http://localhost:5173" : allowed,
};

app.use(cors(corsOptions));

// JSON PARSER MIDDLEWARE
app.use(json());

// NOTES
app.use("/api/notes", verifyJWT, notesRouter);

// AUTH
app.use("/api/auth", authRouter);

// BASE
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Go to /api/notes" });
});
