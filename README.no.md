# velnote

[English](README.md) · Norsk

Notatapp – skriv i Markdown, organiser med tagger. Fullstack-sideprosjekt.

- `frontend/` – React 19, TypeScript, Tailwind, react-markdown
- `backend/` – Express, PostgreSQL, JWT-innlogging med bcrypt, validering med zod

## Kjør

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
