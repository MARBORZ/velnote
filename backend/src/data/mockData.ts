import { type User, type Note } from "../types/index.types.js";

export const users: User[] = [
  {
    id: 1,
    email: "masuevamadi@gmail.com",
    password: "$2b$10$hashedpassword1placeholder000000000000000000000000000",
    role: "admin",
  },
  {
    id: 2,
    email: "johnpork@notes.dev",
    password: "$2b$10$hashedpassword2placeholder000000000000000000000000000",
    role: "user",
  },
];

export const notes: Note[] = [
  {
    id: 1,
    userId: 1,
    title: "Setting up PostgreSQL",
    content: `## PostgreSQL Setup\n\nInstall PostgreSQL locally:\n\n\`\`\`bash\nnpm install pg\n\`\`\`\n\nCreate a database and connect via connection string.`,
    tags: ["database", "sql", "backend"],
    created_at: new Date("2026-05-01T10:00:00Z"),
    updated_at: new Date("2026-05-01T10:00:00Z"),
  },
  {
    id: 2,
    userId: 1,
    title: "JWT Authentication Flow",
    content: `## JWT Flow\n\n1. User sends email + password\n2. Server validates and signs JWT\n3. Client stores token in localStorage\n4. Every request sends token in Authorization header`,
    tags: ["auth", "jwt", "backend"],
    created_at: new Date("2026-05-10T14:30:00Z"),
    updated_at: new Date("2026-05-12T09:15:00Z"),
  },
  {
    id: 3,
    userId: 1,
    title: "React 19 Notes",
    content: `## React 19\n\nNew features:\n- React Compiler (no more useMemo/useCallback)\n- Server Actions\n- Improved Suspense\n\nStill uses hooks for state management.`,
    tags: ["react", "frontend"],
    created_at: new Date("2026-05-15T08:00:00Z"),
    updated_at: new Date("2026-05-15T08:00:00Z"),
  },
  {
    id: 4,
    userId: 2,
    title: "TypeScript Tips",
    content: `## Useful TypeScript Patterns\n\n- Use \`type\` for unions, \`interface\` for objects\n- \`noUncheckedIndexedAccess\` catches undefined array access\n- Prefer \`unknown\` over \`any\``,
    tags: ["typescript"],
    created_at: new Date("2026-05-18T11:00:00Z"),
    updated_at: new Date("2026-05-18T11:00:00Z"),
  },
  {
    id: 5,
    userId: 2,
    title: "Express Middleware Order",
    content: `## Middleware matters\n\nOrder in Express is critical:\n\n1. \`express.json()\` — parse body first\n2. Auth middleware — verify token\n3. Route handlers\n4. Error handler — always last`,
    tags: ["express", "backend", "middleware"],
    created_at: new Date("2026-05-20T16:45:00Z"),
    updated_at: new Date("2026-05-21T10:00:00Z"),
  },
];
