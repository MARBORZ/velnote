import type { Note } from "../types";

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
]