import { mockData } from "@/shared/lib/mockData";
import { useParams, Link } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { NotFound } from "@/shared/ui/NotFound";
import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";
import styles from "./viewnote.module.scss";

export function ViewNote() {
  const { id } = useParams();
  const data = mockData;

  if (!id) return <NotFound />;

  const note = data.find((e) => e.id === +id);

  if (!note) return <NotFound />;

  return (
    <>
      <BackArrow navigate="/notes" />
      <article className={`${styles.article} max-w-3xl mx-auto p-8 flex flex-col gap-4`}>
        <h1 className={`${styles.title} text-3xl font-bold`}>{note.title}</h1>
        <div className="prose">
          <Markdown remarkPlugins={[remarkGfm]}>{note.content}</Markdown>
        </div>
        <div className="flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span key={tag} className={`${styles.tag} text-xs px-2 py-0.5`}>
              #{tag}
            </span>
          ))}
        </div>
        <span className={`${styles.date} text-xs`}>{note.created_at.toLocaleDateString()}</span>
        <div className="flex gap-3">
          <Link to={`/notes/${note.id}/edit`} className={`${styles.editBtn} px-4 py-2 text-sm`}>
            Edit
          </Link>
          <button className={`${styles.deleteBtn} px-4 py-2 text-sm cursor-pointer`}>
            Delete
          </button>
        </div>
      </article>
    </>
  );
}
