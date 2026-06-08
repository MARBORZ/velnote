import { z } from "zod";

export const userSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const noteSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  tags: z.string().array(),
});
