import { Note } from "@/entities/Note";
import { Link } from "react-router";
import { SearchBar } from "@/widgets/SearchBar";
import { useEffect, useRef, useState } from "react";
import { CirclePlus } from "lucide-react";
import styles from "./notes.module.scss";
import { EmptyState } from "@/shared/ui/EmptyState/EmptyState";
import { NoteCardSkeleton } from "@/shared/ui/Skeleton/NoteCardSkeleton";
import { ErrorLabel } from "@/shared/ui/ErrorLabel/ErrorLabel";
import { useNotes } from "@/shared/hooks/useNotes";

export function Notes() {
  const { notes, loading, loadingMore, error, hasMore, loadMore } = useNotes();
  const [search, setSearch] = useState("");
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.tags.some((tag: string) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loadingMore, loadMore]);

  return (
    <div className="flex flex-col h-full">
      {/* Static header */}
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex items-center justify-between">
          <h1 className={styles.pageTitle}>My Notes</h1>
          <Link to="/notes/new" className={styles.newBtn}>
            <CirclePlus size={16} />
            New Note
          </Link>
        </div>
        <SearchBar onSearch={setSearch} />
        <ErrorLabel error={error} />
      </div>

      {/* Scrollable cards */}
      <div className="flex-1 overflow-y-auto min-h-0 -mx-10 px-10 max-md:-mx-4 max-md:px-4">
        {loading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <NoteCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="flex-1 flex items-center justify-center min-h-[50vh]">
            <EmptyState
              title={search ? "No notes found" : "No notes yet"}
              description={
                search
                  ? "Try a different search query"
                  : "Create your first note to get started"
              }
              showAction={!search}
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4 pb-4">
            {filteredNotes.map((n) => (
              <Link key={n.id} to={`/notes/${n.id}`}>
                <Note note={n} />
              </Link>
            ))}

            {/* Sentinel для infinite scroll */}
            <div ref={sentinelRef} />

            {/* Скелетоны при подгрузке */}
            {loadingMore && (
              <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <NoteCardSkeleton key={i} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
