export interface Note {
  id: number;
  title: string;
  content: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

export type Role = {
  role: "user" | "admin";
};

export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  role: Role;
}
