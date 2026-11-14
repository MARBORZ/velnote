# velnote

Note-taking app with Markdown and tags.

- `frontend/` – React 19, TypeScript, Tailwind, react-markdown
- `backend/` – Express, PostgreSQL (`pg`), JWT auth with bcrypt, request validation with zod

## Run

Backend (needs `DATABASE_URL`, `JWT_TOKEN`, `SALT_ROUNDS`, `PORT` in `backend/.env`):

```bash
cd backend
npm install
npm run dev
```

Frontend (needs `VITE_API_URL`):

```bash
cd frontend
npm install
npm run dev
```
