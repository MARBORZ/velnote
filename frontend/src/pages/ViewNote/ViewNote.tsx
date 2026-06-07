import { useParams, Link, useNavigate } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";
import styles from "./viewnote.module.scss";
import { notes_api } from "@/shared/api/notes";
import { useNote } from "@/shared/hooks/useNote";
import { NotFound } from "@/shared/ui/NotFound";

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function ViewNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { note, loading } = useNote(id);

  const handleRemove = async () => {
    await notes_api.remove(Number(id));
    navigate("/notes");
  };

  if (!id) return <NotFound />;
  if (loading) return null;
  if (!note) return <NotFound />;

  const dateStr = new Date(note.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-6">
      <BackArrow navigate="/notes" />

      <article className={styles.article}>
        {/* Meta */}
        <div className={styles.meta}>
          <span>{dateStr}</span>
          <span className={styles.dot}>·</span>
          <span>{calcReadTime(note.content)}</span>
        </div>

        {/* Title */}
        <h1 className={styles.title}>{note.title}</h1>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Body */}
        <div className={`${styles.body} prose`}>
          <Markdown remarkPlugins={[remarkGfm]}>{note.content}</Markdown>
        </div>

        {/* Tags */}
        {note.tags.length > 0 && (
          <div className={styles.tagRow}>
            {note.tags.map((tag) => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className={styles.divider} />

        {/* Actions */}
        <div className={styles.actions}>
          <Link to={`/notes/${note.id}/edit`} className={styles.editBtn}>
            Edit
          </Link>
          <button
            type="button"
            onClick={handleRemove}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </div>
      </article>
    </div>
  );
}
