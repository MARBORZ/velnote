// import { useState } from "react";
import { mockData } from "@/shared/lib/mockData";
import { Note } from "@/entities/Note";
import { Link } from "react-router";
import { SearchBar } from "@/widgets/SearchBar";
import { useState } from "react";

export function Notes() {
  const notes = mockData;
  const [search, setSearch] = useState("");
  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
  );

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
