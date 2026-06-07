import type { TNote } from "@/shared/types";
import styles from "./note.module.scss";

interface NoteCardProps {
  note: TNote;
}

export function Note({ note }: NoteCardProps) {
  return (
    <div className={`${styles.card} flex flex-col gap-3 p-5 cursor-pointer`}>
      <h3 className={`${styles.title} font-semibold`} style={{ fontSize: "17px" }}>
        {note.title}
      </h3>
      <p className={`${styles.preview} text-sm leading-relaxed`}>
        {note.content.slice(0, 120)}...
      </p>
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {note.tags.map((tag) => (
            <span key={tag} className={`${styles.tag} text-xs px-2.5 py-0.5`}>
              #{tag}
            </span>
          ))}
        </div>
        <span className={`${styles.date} text-xs shrink-0`}>
          {new Date(note.created_at).toLocaleDateString("ru-RU")}
        </span>
      </div>
    </div>
  );
}
