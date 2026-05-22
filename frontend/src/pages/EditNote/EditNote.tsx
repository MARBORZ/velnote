import { mockData } from "@/shared/lib/mockData";
import { NotFound } from "@/shared/ui/NotFound";
import { useState, type MouseEvent } from "react";
import { Link, useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";
import styles from "./editnote.module.scss";

export function EditNote() {
  const { id } = useParams();
  const note = id ? mockData.find((n) => n.id === +id) : undefined;

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [tags, setTags] = useState(note?.tags.join(", ") ?? "");

  if (!id) return <NotFound />;
  if (!note) return <NotFound />;

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !content || !tags) return;
    console.log({ title, content, tags });
  };

  return (
    <>
      <BackArrow navigate={`/notes/${id}`} />
      <article className={`${styles.article} max-w-5xl mx-auto p-8`}>
        <div className="grid grid-cols-2 gap-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                className={`${styles.titleInput} w-full pb-2`}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={title}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="content">Content (Markdown)</label>
              <textarea
                id="content"
                className={`${styles.textarea} w-full px-3 py-2 min-h-80 resize-y`}
                onChange={(e) => setContent(e.target.value)}
                placeholder={content}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="tags">Tags (separate by comma)</label>
              <input
                id="tags"
                type="text"
                className={`${styles.input} w-full px-3 py-2`}
                onChange={(e) => setTags(e.target.value)}
                placeholder={tags}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className={`${styles.saveBtn} px-4 py-2 text-sm cursor-pointer`}
                onClick={(e) => handleSubmit(e)}
              >
                Save
              </button>
              <Link to={`/notes/${id}`} className={`${styles.cancelBtn} px-4 py-2 text-sm`}>
                Cancel
              </Link>
            </div>
          </form>

          <div className="flex flex-col gap-2">
            <span className={`${styles.previewLabel} text-sm font-medium`}>Preview</span>
            <div className={`${styles.previewBox} prose overflow-y-auto max-h-[600px] p-4`}>
              <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
