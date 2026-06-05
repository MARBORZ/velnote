import { Router } from "express";
import { type RequestHandler } from "express";
import { notes } from "../data/mockData.js";
import { noteSchema } from "../validators/schemas.js";

export const notesRouter = Router();

// GET NOTES
const getNotes: RequestHandler = (req, res) => {
  return res.json({ status: 200, message: "OK", notes: notes });
};
notesRouter.get("/", getNotes);

// GET NOTE
const getNote: RequestHandler = (req, res) => {
  const { id } = req.params;

  const note = notes.find((n) => n.id === Number(id));
  if (!note) return res.json({ status: 404, message: "Can`t find note." });

  return res.json({ status: 200, message: "OK", note: note });
};
notesRouter.get("/:id", getNote);

// POST NOTE
const postNote: RequestHandler = (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.json({ status: 401, message: "Unauthorized" });

  const result = noteSchema.safeParse(req.body);

  if (!result.success)
    return res.json({ status: 400, message: "Can`t post note." });

  const { title, content, tags } = result.data;

  const note = {
    id: Number(Date.now()),
    userId: Number(userId),
    title: title,
    content: content,
    tags: tags,
    created_at: new Date(),
  };

  notes.push(note);
  return res.json({ status: 201, message: "OK", note: note });
};
notesRouter.post("/", postNote);

// EDIT NOTE
const editNote: RequestHandler = (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.json({ status: 401, message: "Unauthorized" });

  const { id } = req.params;

  const result = noteSchema.safeParse(req.body);

  if (!result.success)
    return res.json({ status: 400, message: "Invalid note data." });

  const { title, content, tags } = result.data;

  const index = notes.findIndex((n) => n.id === Number(id));
  const note = notes[index];

  if (index === -1)
    return res.json({ status: 404, message: "Note not found." });

  if (note?.userId !== userId)
    return res.json({ status: 403, message: "Forbidden" });

  notes[index] = { ...notes[index]!, title, content, tags };
  return res.json({ status: 200, message: "OK", note: notes[index] });
};
notesRouter.put("/:id", editNote);

// DELETE NOTE
const deleteNote: RequestHandler = (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.json({ status: 401, message: "Unauthorized" });

  const { id } = req.params;

  const index = notes.findIndex((n) => n.id === Number(id));
  const note = notes[index];

  if (index === -1)
    return res.json({ status: 404, message: "Note not found." });

  if (note?.userId !== userId)
    return res.json({ status: 403, message: "Forbidden" });

  notes.splice(index, 1);
  return res.json({ status: 200, message: "OK" });
};
notesRouter.delete("/:id", deleteNote);
