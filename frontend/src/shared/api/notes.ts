import { api } from "./api";

export const notes_api = {
  getAll: (cursor?: number | null) => {
    return api.get("/api/notes", { params: cursor ? { cursor } : {} });
  },

  getById: (id: number) => {
    return api.get(`/api/notes/${id}`);
  },

  create: (title: string, content: string, tags: string[]) => {
    return api.post("/api/notes", { title, content, tags });
  },

  update: (id: number, title: string, content: string, tags: string[]) => {
    return api.put(`/api/notes/${id}`, { title, content, tags });
  },

  remove: (id: number) => {
    return api.delete(`/api/notes/${id}`);
  },
};
