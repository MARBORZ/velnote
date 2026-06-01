// import { useState } from "react";
import { Note } from "@/entities/Note";
import { Link } from "react-router";
import { SearchBar } from "@/widgets/SearchBar";
import { useEffect, useState } from "react";
import { notes_api } from "@/shared/api/notes";
import type { TNote } from "@/shared/types";


export function Notes() {
  const [notes, setNotes] = useState<TNote[]>([])
  const [search, setSearch] = useState("");
  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase())),
  );

  useEffect(() => {
    notes_api.getAll().then(res => setNotes(res.data.notes))
  }, [])

  return (
    <div className="max-w-3xl mx-auto">
      <SearchBar onSearch={setSearch} />
      <div className="flex flex-col gap-4">
        {filteredNotes.map((n) => {
          return (
            <Link key={n.id} to={`/notes/${n.id}`}>
              <Note note={n} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
