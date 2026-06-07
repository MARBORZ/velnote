import { Note } from "@/entities/Note";
import { Link } from "react-router";
import { SearchBar } from "@/widgets/SearchBar";
import { useEffect, useState } from "react";
import { notes_api } from "@/shared/api/notes";
import type { TNote } from "@/shared/types";
import { CirclePlus } from "lucide-react";
import styles from "./notes.module.scss";
import { EmptyState } from "@/shared/ui/EmptyState/EmptyState";

export function Notes() {
  const [notes, setNotes] = useState<TNote[]>([]);
  const [search, setSearch] = useState("");
  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase())),
  );

  useEffect(() => {
    notes_api.getAll().then((res) => setNotes(res.data.notes));
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className={styles.pageTitle}>Your Notes</h1>
        <Link to="/notes/new" className={styles.newBtn}>
          <CirclePlus size={16} />
          New Note
        </Link>
      </div>

      {/* Search */}
      <SearchBar onSearch={setSearch} />

      {/* Cards */}
      {filteredNotes.length === 0 ? (
        <EmptyState
          title={search ? "No notes found" : "No notes yet"}
          description={search ? "Try a different search query" : "Create your first note to get started"}
        />
      ) : (
        <div className="flex flex-col gap-4">
          {filteredNotes.map((n) => (
            <Link key={n.id} to={`/notes/${n.id}`}>
              <Note note={n} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
