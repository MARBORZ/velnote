// import { useState } from "react";
import { mockData } from "@/shared/lib/mockData";
import { Note } from "@/entities/Note";
import styles from "./notes.module.scss";
import { Link } from "react-router";

export function Notes() {
  const notes = mockData;

  return (
    <div className={styles.page}>
      <ul className={styles.list}>
        {notes.map((n) => {
          return (
            <Link key={n.id} to={`/notes/${n.id}`}>
              <Note note={n}></Note>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
