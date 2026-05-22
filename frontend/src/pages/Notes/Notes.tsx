// import { useState } from "react";
import { mockData } from "@/shared/lib/mockData";
import { Note } from "@/entities/Note";
import { Link } from "react-router";

export function Notes() {
  const notes = mockData;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col gap-4">
        {notes.map((n) => {
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
