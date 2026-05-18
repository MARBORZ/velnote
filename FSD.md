# FSD Структура — Notes App

Feature-Sliced Design архитектура проекта.

---

## Структура

```
src/
├── app/                    — Инициализация приложения
│   ├── providers/         — Провайдеры (Router, Theme, Auth)
│   ├── styles/            — Глобальные стили
│   └── App.tsx            — Корневой компонент
│
├── pages/                  — Страницы приложения
│   ├── home/              — Главная (список заметок)
│   ├── note-view/         — Просмотр заметки
│   ├── note-edit/         — Создание/редактирование заметки
│   ├── login/             — Авторизация
│   └── register/          — Регистрация
│
├── widgets/                — Сложные композитные блоки
│   ├── header/            — Шапка сайта
│   └── note-list/         — Список заметок с поиском
│
├── features/               — Фичи (действия пользователя)
│   ├── auth/              — Авторизация (login, register, logout)
│   ├── note-editor/       — Редактор заметок
│   └── note-search/       — Поиск по заметкам
│
├── entities/               — Бизнес-сущности
│   ├── note/              — Заметка (модель, UI, API)
│   ├── tag/               — Тег
│   └── user/              — Пользователь
│
├── shared/                 — Переиспользуемый код
│   ├── ui/                — UI компоненты (Button, Input, Card)
│   ├── lib/               — Утилиты, хелперы
│   ├── types/             — TypeScript типы
│   └── api/               — Axios instance, API клиент
│
└── main.tsx               — Entry point
```

---

## Правила импортов

### Можно импортировать:
- `app` → `pages`, `widgets`, `features`, `entities`, `shared`
- `pages` → `widgets`, `features`, `entities`, `shared`
- `widgets` → `features`, `entities`, `shared`
- `features` → `entities`, `shared`
- `entities` → `shared`
- `shared` → ничего (самый низкий слой)

### Нельзя импортировать:
- Снизу вверх (например, `shared` → `entities`)
- Между слоями одного уровня (например, `features/auth` → `features/note-editor`)

---

## Текущий статус

✅ FSD структура создана  
✅ Базовые типы (Note, Tag, User)  
✅ App.tsx и main.tsx настроены  
⏳ Следующее: создание компонентов

---

## Связи

- [[README|Notes App README]]
- [[STACK|Стек проекта]]
