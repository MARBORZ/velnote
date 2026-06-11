import { Router } from "express";
import { type RequestHandler } from "express";
import { noteSchema } from "../validators/schemas.js";
import { pool } from "../db/pool.js";
import { tryCatch } from "../utils/tryCatch.js";

export const notesRouter = Router();

// GET NOTES
const getNotes: RequestHandler = async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized. Please log in to access this resource." });

  const limit = Math.min(Number(req.query.limit) || 10, 50);
  const cursor = req.query.cursor ? Number(req.query.cursor) : null;

  const { rows } = cursor
    ? await pool.query(
        "SELECT id, title, content, tags, created_at, updated_at FROM notes WHERE user_id = $1 AND id < $2 ORDER BY id DESC LIMIT $3",
        [userId, cursor, limit],
      )
    : await pool.query(
        "SELECT id, title, content, tags, created_at, updated_at FROM notes WHERE user_id = $1 ORDER BY id DESC LIMIT $2",
        [userId, limit],
      );

  const nextCursor = rows.length === limit ? rows[rows.length - 1].id : null;

  return res.status(200).json({ message: "OK", notes: rows, nextCursor });
};
notesRouter.get("/", tryCatch(getNotes));

// GET NOTE
const getNote: RequestHandler = async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized. Please log in to access this resource." });
  const { id } = req.params;

  const { rows } = await pool.query(
    "SELECT id, user_id, title, content, tags, created_at, updated_at FROM notes WHERE id = $1",
    [id],
  );
  const note = rows[0];

  if (!note) return res.status(404).json({ message: "Note not found. It may have been deleted or the ID is incorrect." });
  if (note.user_id !== userId)
    return res.status(403).json({ message: "Access denied. You do not have permission to view this note." });

  return res.status(200).json({ message: "OK", note: note });
};
notesRouter.get("/:id", tryCatch(getNote));

// POST NOTE
const postNote: RequestHandler = async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized. Please log in to access this resource." });

  const result = noteSchema.safeParse(req.body);
  if (!result.success)
    return res.status(400).json({ message: "Invalid note data. Title must not be empty and tags must be an array of strings." });

  const { title, content, tags } = result.data;

  const { rows } = await pool.query(
    `
    INSERT INTO notes (user_id, title, content, tags)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [userId, title, content, tags],
  );
  const note = rows[0];
  if (!note)
    return res.status(500).json({ message: "Something went wrong while saving your note. Please try again." });

  return res.status(201).json({ message: "OK", note: note });
};
notesRouter.post("/", tryCatch(postNote));

// EDIT NOTE
const editNote: RequestHandler = async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized. Please log in to access this resource." });

  const { id } = req.params;

  const result = noteSchema.safeParse(req.body);
  if (!result.success)
    return res.status(400).json({ message: "Invalid note data. Title must not be empty and tags must be an array of strings." });
  const { title, content, tags } = result.data;

  const existing = await pool.query("SELECT user_id FROM notes WHERE id = $1", [
    id,
  ]);
  const existingNote = existing.rows[0];

  if (!existingNote)
    return res.status(404).json({ message: "Note not found. It may have been deleted or the ID is incorrect." });
  if (existingNote.user_id !== userId)
    return res.status(403).json({ message: "Access denied. You do not have permission to edit this note." });

  const { rows } = await pool.query(
    `
        UPDATE notes
        SET title = $1, content = $2, tags = $3, updated_at = NOW()
        WHERE id = $4
        RETURNING *
      `,
    [title, content, tags, id],
  );

  const note = rows[0];
  if (!note) return res.status(404).json({ message: "Note not found after update. Please refresh and try again." });

  return res.status(200).json({ message: "OK", note: note });
};
notesRouter.put("/:id", tryCatch(editNote));

// DELETE NOTE
const deleteNote: RequestHandler = async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) return res.status(401).json({ message: "Unauthorized. Please log in to access this resource." });

  const { id } = req.params;

  const existing = await pool.query(
    "SELECT user_id FROM notes WHERE id = $1",
    [id],
  );
  const note = existing.rows[0];

  if (!note) return res.status(404).json({ message: "Note not found. It may have already been deleted." });
  if (note.user_id !== userId)
    return res.status(403).json({ message: "Access denied. You do not have permission to delete this note." });

  await pool.query("DELETE FROM notes WHERE id = $1", [id]);

  return res.status(200).json({ message: "OK" });
};
notesRouter.delete("/:id", tryCatch(deleteNote));
