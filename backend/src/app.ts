import express, { json } from "express";
import { type Request, type Response } from "express";
import { notesRouter } from "./routes/notes.js";

export const app = express();

// JSON PARSER MIDDLEWARE
app.use(json());
app.use('/api/notes', notesRouter)

// BASE
app.get("/", (req: Request, res: Response) => {
    res.json({status: 200, message: "Hello World!"})
});
