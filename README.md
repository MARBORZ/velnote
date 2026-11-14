# velnote

English · [Norsk](README.no.md)

Notes app – write in Markdown, organize with tags. Fullstack pet project.

- `frontend/` – React 19, TypeScript, Tailwind, react-markdown
- `backend/` – Express, PostgreSQL, JWT auth with bcrypt, validation with zod

## Run

Backend (`backend/.env`: `DATABASE_URL`, `JWT_TOKEN`, `SALT_ROUNDS`, `PORT`):

```bash
cd backend
npm install
npm run dev
```

Frontend (`VITE_API_URL`):

```bash
cd frontend
npm install
npm run dev
```
