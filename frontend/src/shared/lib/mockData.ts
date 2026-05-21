import type { Note } from "@/shared/types";

export const mockData: Note[] = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "React is a JavaScript library for building user interfaces. Components are the building blocks of any React application.",
    tags: ["react", "frontend", "javascript"],
    created_at: new Date("2026-05-01"),
    updated_at: new Date("2026-05-02"),
  },
  {
    id: 2,
    title: "PostgreSQL Basics",
    content: "PostgreSQL is a powerful open-source relational database. Use CREATE TABLE to define your schema and JOIN to combine tables.",
    tags: ["database", "sql", "backend"],
    created_at: new Date("2026-05-10"),
    updated_at: new Date("2026-05-10"),
  },
  {
    id: 3,
    title: "JWT Authentication",
    content: "JSON Web Tokens are used to securely transmit information. A JWT consists of a header, payload, and signature.",
    tags: ["auth", "security", "backend"],
    created_at: new Date("2026-05-15"),
    updated_at: new Date("2026-05-16"),
  },
  {
    id: 4,
    title: "FSD Architecture",
    content: "Feature-Sliced Design is a methodology for organizing frontend projects. Layers: app, pages, widgets, features, entities, shared.",
    tags: ["architecture", "frontend"],
    created_at: new Date("2026-05-18"),
    updated_at: new Date("2026-05-18"),
  },
  {
    id: 5,
    title: "Building a REST API with Express",
    content: `## Overview

A **REST API** allows clients to communicate with a server using HTTP methods.

## Setup

\`\`\`bash
npm init -y
npm install express typescript ts-node
\`\`\`

## Basic Structure

\`\`\`ts
import express from "express";
const app = express();
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json({ notes: [] });
});

app.listen(3000, () => console.log("Server running on port 3000"));
\`\`\`

## HTTP Methods

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes | Get all notes |
| POST | /api/notes | Create a note |
| PUT | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

## Middleware

Middleware runs **before** your route handler:

\`\`\`ts
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  next();
};
\`\`\`

> Always add error handling to your routes — unhandled errors will crash the server.`,
    tags: ["backend", "express", "api"],
    created_at: new Date("2026-05-20"),
    updated_at: new Date("2026-05-20"),
  },
]