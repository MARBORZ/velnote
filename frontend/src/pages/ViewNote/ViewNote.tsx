import { mockData } from "@/shared/lib/mockData";
import { useParams, Link } from "react-router";
import styles from "./viewnote.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { NotFound } from "@/shared/ui/NotFound";
import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";

export function ViewNote() {
  const { id } = useParams();
  const data = mockData;

  const note = data.find((e) => e.id === +id);

  if (!note) return <NotFound />;

  return (
    <>
      <div className={styles.back}>
        <BackArrow navigate={`notes/`}/>
      </div>
      <article className={`${styles.page} ${styles.article}`}>
        <h1 className={styles.title}>{note.title}</h1>
        <div className={styles.content}>
          <Markdown remarkPlugins={[remarkGfm]}>{note.content}</Markdown>
        </div>
        <div className={styles.tags}>
          {note.tags.map((tag) => {
            return (
              <span className={styles.tag} key={tag}>
                #{tag}
              </span>
            );
          })}
        </div>
        <span className={styles.date}>
          {note.created_at.toLocaleDateString()}
        </span>
        <div className={styles.actions}>
          <Link to={`/notes/${note.id}/edit`} className={styles.editBtn}>
            Edit
          </Link>
          <button className={styles.deleteBtn}>Delete</button>
        </div>
      </article>
    </>
  );
}
