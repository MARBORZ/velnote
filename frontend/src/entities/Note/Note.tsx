import type { Note } from "../../shared/types";
import styles from "./note.module.scss";

interface NoteCardProps {
  note: Note;
}

export function Note({ note }: NoteCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.preview}>{note.content.slice(0, 120)}...</p>
      <div className={styles.tags}>
        {note.tags.map((tag) => (
          <span key={tag} className={styles.tag}>#{tag}</span>
        ))}
      </div>
      <span className={styles.date}>{note.created_at.toLocaleDateString()}</span>
    </div>
  );
}
