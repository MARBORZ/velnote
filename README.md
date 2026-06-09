# Velnote

A minimalist note-taking app — write in Markdown, organize with tags, search instantly.

> Fullstack pet project: React 19 + Express + PostgreSQL

---

## Features

- ✍️ Create, edit and delete notes with live Markdown preview
- 🏷️ Tag system — up to 5 tags per note, space to confirm
- 🔍 Client-side search by title and tags
- 🌙 Dark / Light mode
- 📱 Fully responsive — mobile, tablet, desktop
- 🔐 JWT authentication with protected routes
- ⚡ Skeleton loaders with minimum display delay

---

## Stack

**Frontend**
- React 19 + TypeScript
- Vite + Tailwind CSS v4 + SCSS Modules
- Feature-Sliced Design (FSD) architecture
- React Router v7
- react-markdown + remark-gfm

**Backend**
- Node.js + Express 5 + TypeScript
- PostgreSQL via `pg`
- JWT + bcrypt
- Zod validation

---

## Getting Started

### Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/velnote
JWT_TOKEN=your-secret-key
SALT_ROUNDS=10
STATE=dev
CORS_ORIGIN=
```

```bash
npm run dev
```

### Frontend

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_URL=http://localhost:3000
```

```bash
npm run dev
```

---

## Project Structure

```
velnote/
├── frontend/          React app (FSD)
│   └── src/
│       ├── app/       providers, router, global styles
│       ├── pages/     Notes, ViewNote, EditNote, NewNote, Login, Register, Settings
│       ├── widgets/   Sidebar, TopBar, BottomNav, SearchBar
│       ├── entities/  Note, NoteForm
│       └── shared/    api, hooks, lib, ui, types
├── backend/           Express REST API
│   └── src/
│       ├── routes/    auth.ts, notes.ts
│       ├── middleware/ auth.ts (JWT)
│       ├── db/        pool.ts
│       ├── validators/ schemas.ts (Zod)
│       └── utils/     tryCatch.ts
└── README.md
```

---

## Deployment

- **Frontend** — Vercel
- **Backend** — Render
- **Database** — Render PostgreSQL
