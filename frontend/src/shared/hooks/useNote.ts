import { useEffect, useState } from "react";
import { notes_api } from "@/shared/api/notes";
import type { TNote } from "@/shared/types";
import { withMinDelay } from "../lib/withMinDelay";
import { getErrorMessage } from "../lib/getErrorMessage";

export const useNote = (id: string | undefined) => {
  const [note, setNote] = useState<TNote | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetch = async () => {
      try {
        const res = await withMinDelay(notes_api.getById(Number(id)));
        setNote(res.data?.note);
      } catch (e) {
        setError(getErrorMessage(e));
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  return { note, loading, error };
};
