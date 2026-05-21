// import { useState } from "react";
import { mockData } from "../../shared/lib/mockData";
import { Note } from "../../entities/Note";

export function Notes() {
  const notes = mockData;

  return (
    <div className="note">
      {notes.map((n) => {
        return <Note key={n.id} note={n}></Note>;
      })}
    </div>
  );
}
