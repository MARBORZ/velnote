import { useEffect, useState } from "react";
import { notes_api } from "@/shared/api/notes";
import type { TNote } from "@/shared/types";

export const useNote = (id: string | undefined) => {
  const [note, setNote] = useState<TNote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    notes_api
      .getById(Number(id))
      .then((res) => setNote(res.data.note))
      .finally(() => setLoading(false));
  }, [id]);

  return { note, loading };
};
