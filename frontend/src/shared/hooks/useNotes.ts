import { useEffect, useState } from "react";
import { notes_api } from "@/shared/api/notes";
import type { TNote } from "@/shared/types";
import { withMinDelay } from "../lib/withMinDelay";
import { getErrorMessage } from "../lib/getErrorMessage";

export const useNotes = () => {
  const [notes, setNotes] = useState<TNote[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchNotes = async (cursorParam: number | null) => {
    try {
      const res = await withMinDelay(notes_api.getAll(cursorParam));
      const { notes: newNotes, nextCursor } = res.data;
      setNotes((prev) => (cursorParam ? [...prev, ...newNotes] : newNotes));
      setCursor(nextCursor);
      setHasMore(nextCursor !== null);
    } catch (e) {
      setError(getErrorMessage(e));
    }
  };

  useEffect(() => {
    fetchNotes(null).finally(() => setLoading(false));
  }, []);

  const loadMore = async () => {
    if (!hasMore || loadingMore) return;
    setLoadingMore(true);
    await fetchNotes(cursor);
    setLoadingMore(false);
  };

  return { notes, loading, loadingMore, error, hasMore, loadMore };
};
