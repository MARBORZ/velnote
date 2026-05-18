export interface Note {
  id: number
  title: string
  content: string
  tags: string[]
  created_at: string
  updated_at: string
}

export interface Tag {
  id: number
  name: string
}

export interface User {
  id: number
  email: string
}