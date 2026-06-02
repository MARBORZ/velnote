export interface Note {
  id: number;
  userId: number
  title: string;
  content: string;
  tags: string[];
  created_at: Date;
  updated_at?: Date;
}

export interface User {
  id: number;
  email: string;
  password: string;
  role: "user" | "admin";
}
