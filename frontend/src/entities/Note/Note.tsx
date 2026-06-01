import type { TNote } from "@/shared/types";
import styles from "./note.module.scss";

interface NoteCardProps {
  note: TNote;
}

export function Note({ note }: NoteCardProps) {
  return (
    <div className={`${styles.card} flex flex-col gap-2 p-4 cursor-pointer`}>
      <h3 className={`${styles.title} text-lg font-semibold`}>{note.title}</h3>
      <p className={`${styles.preview} text-sm leading-relaxed`}>{note.content.slice(0, 120)}...</p>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span key={tag} className={`${styles.tag} text-xs px-2 py-0.5`}>
            #{tag}
          </span>
        ))}
      </div>
      <span className={`${styles.date} text-xs`}>{note.created_at.toLocaleDateString("ru-RU")}</span>
    </div>
  );
}
