# Стек — Notes App

**Обновлено:** 18 мая 2026

---

## Frontend (начинаем с этого)

### Основа

- **React 19** — UI библиотека
- **TypeScript** — типизация
- **Vite** — сборщик (быстрый dev server)

### Стилизация

- **Tailwind CSS v4** — utility-first CSS
- **@tailwindcss/typography** — стили для markdown (prose класс)

### Роутинг

- **React Router v6** — навигация между страницами
- Защищённые роуты (ProtectedRoute компонент)

### HTTP запросы

- **axios** — HTTP клиент
- Axios instance с базовым URL и токеном

### Markdown

- **react-markdown** — рендер markdown в React компоненты
- Превращает markdown текст в красивый HTML

### Формы

- **react-hook-form** (опционально) — управление формами
- Или просто useState + обработчики

### State Management

- **useState** — локальное состояние компонентов
- **useContext** (если нужно) — глобальное состояние (токен, user)
- **НЕ НУЖЕН Redux/Zustand** — проект простой

---

## Backend (когда будет доступ к PostgreSQL)

### Основа

- **Node.js** — runtime
- **Express** — веб-фреймворк
- **TypeScript** — типизация

### База данных

- **PostgreSQL** — реляционная БД
- **pg** — драйвер для PostgreSQL (raw SQL)
- Альтернатива: **Drizzle ORM** (если захочешь ORM)

### Авторизация

- **jsonwebtoken (jwt)** — генерация и проверка JWT токенов
- **bcrypt** — хеширование паролей

### Middleware

- **cors** — разрешить запросы с frontend
- **express.json()** — парсинг JSON body

### Environment

- **dotenv** — переменные окружения (.env файл)

---

## Dev Dependencies

### Frontend

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^6.x",
    "axios": "^1.x",
    "react-markdown": "^9.x"
  },
  "devDependencies": {
    "@types/react": "^19.x",
    "@types/react-dom": "^19.x",
    "typescript": "^5.x",
    "vite": "^5.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/typography": "^0.5.x"
  }
}
```

### Backend (потом)

```json
{
  "dependencies": {
    "express": "^4.x",
    "pg": "^8.x",
    "bcrypt": "^5.x",
    "jsonwebtoken": "^9.x",
    "cors": "^2.x",
    "dotenv": "^16.x"
  },
  "devDependencies": {
    "@types/express": "^4.x",
    "@types/node": "^20.x",
    "@types/bcrypt": "^5.x",
    "@types/jsonwebtoken": "^9.x",
    "@types/cors": "^2.x",
    "typescript": "^5.x",
    "ts-node": "^10.x",
    "nodemon": "^3.x"
  }
}
```

---

## Деплой (в конце)

### Frontend

- **Vercel** — бесплатный хостинг для React
- Автоматический деплой из GitHub

### Backend

- **Render** — бесплатный tier для Node.js
- Автоматический деплой из GitHub

### База данных

- **Render PostgreSQL** — бесплатный tier (1GB)

---

## Что устанавливать СЕЙЧАС (только frontend)

```bash
# В папке frontend/
npm create vite@latest . -- --template react-ts
npm install
npm install react-router-dom axios react-markdown
npm install -D tailwindcss @tailwindcss/typography postcss autoprefixer
npx tailwindcss init -p
```

---

## Структура frontend (что создавать)

```
frontend/
├── src/
│   ├── components/
│   │   ├── NoteCard.tsx           — карточка заметки
│   │   ├── NoteEditor.tsx         — форма создания/редактирования
│   │   ├── MarkdownPreview.tsx    — рендер markdown
│   │   ├── TagInput.tsx           — инпут с тегами
│   │   ├── SearchBar.tsx          — поиск
│   │   └── Layout.tsx             — общий layout (header, footer)
│   │
│   ├── pages/
│   │   ├── LoginPage.tsx          — авторизация
│   │   ├── RegisterPage.tsx       — регистрация
│   │   ├── NotesListPage.tsx      — список заметок
│   │   ├── NoteViewPage.tsx       — просмотр заметки
│   │   └── NoteEditPage.tsx       — редактирование заметки
│   │
│   ├── hooks/
│   │   ├── useAuth.ts             — хук для авторизации
│   │   ├── useNotes.ts            — хук для работы с заметками
│   │   └── useTags.ts             — хук для работы с тегами
│   │
│   ├── utils/
│   │   ├── api.ts                 — axios instance
│   │   └── auth.ts                — работа с JWT токеном
│   │
│   ├── types/
│   │   └── index.ts               — TypeScript типы (Note, Tag, User)
│   │
│   ├── App.tsx                    — роутинг
│   ├── main.tsx                   — entry point
│   └── index.css                  — Tailwind imports
│
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## Что делать БЕЗ backend

### Mock данные

Создай файл `src/data/mockData.ts` с фейковыми заметками:

```typescript
export const mockNotes = [
  {
    id: 1,
    title: "Первая заметка",
    content: "# Hello\n\nЭто **markdown** текст.",
    tags: ["work", "important"],
    created_at: "2026-05-18",
    updated_at: "2026-05-18",
  },
  // ... ещё заметки
];
```

### Локальное состояние

Используй `useState` для хранения заметок в памяти (пока нет backend).

### localStorage (опционально)

Можешь сохранять заметки в `localStorage` чтобы они не пропадали при перезагрузке.

---

## План работы БЕЗ backend

1. **Настроить Vite + React + TypeScript**
2. **Настроить Tailwind CSS**
3. **Создать роутинг** (React Router)
4. **Создать Layout** (header, навигация)
5. **Создать NotesListPage** с mock данными
6. **Создать NoteCard** компонент
7. **Создать NoteViewPage** с MarkdownPreview
8. **Создать NoteEditPage** с формой
9. **Добавить TagInput** компонент
10. **Добавить SearchBar**

Когда будет доступ к PostgreSQL — подключим backend.

---

## Связи

- [[README|Notes App README]]
- [[../my-outer-memory_vault/project_training_without_ai/план_разработки|План разработки]]
