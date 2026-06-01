import { api } from "./api";

export const auth = {
  register: (email: string, password: string) => {
    return api.post("/api/auth/register", { email, password });
  },
  login: (email: string, password: string) => {
    return api.post("/api/auth/login", { email, password });
  },
};
