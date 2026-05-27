export interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  role: "user" | "admin";
}
