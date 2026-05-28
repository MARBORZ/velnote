import { Router } from "express";
import { type RequestHandler } from "express";
import { notes } from "../data/mockData.js";

export const notesRouter = Router();

// GET NOTES
const getNotes: RequestHandler = (req, res) => {
  return res.json({ status: 200, message: "OK", notes: notes });
};
notesRouter.get("/", getNotes);

// GET NOTE
const getNote: RequestHandler = (req, res) => {
  const { id } = req.params;

  const note = notes.find((n) => n.id === n.id);

  return res.json({ status: 200, message: "OK", note: note });
};
notesRouter.get("/:id", getNote);

// POST NOTE
const postNote: RequestHandler = (req, res) => {
  const { userId, title, content, tags } = req.body;

  const note = {
    id: Number(Date.now()),
    userId: Number(userId),
    title: title,
    content: content,
    tags: tags,
    created_at: Date.now(),
  };

  res.json({ status: 201, message: "OK", note: note });
};
notesRouter.post("/", postNote);

// EDIT NOTE
const editNote: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;

  const index = notes.findIndex((n) => n.id === Number(id));
  notes[index] = { ...notes[index], title, content, tags };
  res.json({ status: 200, message: "OK", note: notes[index] });
};
notesRouter.put("/:id", editNote);

// DELETE NOTE
const deleteNote: RequestHandler = (req, res) => {
  const { id } = req.params;

  const index = notes.findIndex((n) => n.id === Number(id));
  notes.splice(index, 1);
  res.json({ status: 200, message: "OK" });
};
notesRouter.delete("/:id", deleteNote);
