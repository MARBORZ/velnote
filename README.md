# Notes App

A fullstack note-taking application with tags, search, and markdown rendering.

**Training project built WITHOUT AI** — code written independently to benchmark real skill level.

---

## What it does

A web app for managing personal notes:

- Create, edit, and delete notes
- Markdown support (write in markdown, renders beautifully)
- Tag system (many-to-many relationship in the database)
- Search by title and filter by tags
- JWT authentication (register + login)

---

## Why this project

1. **Skill calibration** — measure real level without AI assistance
2. **Fullstack experience** — React + Express + PostgreSQL in one project
3. **Relational database** — many-to-many relations, JOIN queries, transactions
4. **Portfolio** — real deployable project

---

## Stack

### Frontend

- React 19
- TypeScript
- Tailwind CSS v4 + SCSS Modules
- React Router v7 (protected routes)
- react-markdown + remark-gfm
- Feature-Sliced Design (FSD) architecture

### Backend

- Node.js + Express
- TypeScript (NodeNext, ES2022)
- PostgreSQL (via pg)
- JWT authentication
- bcrypt (password hashing)
- zod (request validation)

### Deploy

- Frontend: Vercel
- Backend: Render
- Database: Render PostgreSQL (free tier)

---

## Features

### Auth
- Register (email + password)
- Login (returns JWT token)
- Protected routes

### Notes
- Create a note (title + markdown content + tags)
- View a note (markdown rendered)
- Edit a note (live markdown preview)
- Delete a note
- List all notes

### Tags
- Add tags to a note (max 5, lowercase, space to confirm)
- Search notes by tag

### Search
- Search by title and tags simultaneously

---

## Project Structure

```
notes-app/
├── frontend/    — React app (FSD architecture)
├── backend/     — Express REST API
└── README.md
```

---

## Status

🚧 In development

| Stage | Status |
|---|---|
| Frontend UI | ✅ Complete |
| Backend (Express + mock data) | 🚧 In progress |
| PostgreSQL integration | ⏳ Planned |
| Deploy | ⏳ Planned |

---

## Timeline

June – August 2026

---

## Principle

**Rule #3:** One project per year without AI — this is that project.

Code written by hand. AI only explains concepts and helps with debugging.
