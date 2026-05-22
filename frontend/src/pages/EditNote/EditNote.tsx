import { mockData } from "@/shared/lib/mockData";
import { NotFound } from "@/shared/ui/NotFound";
import { useState } from "react";
import { Link, useParams } from "react-router";
import styles from "./editnote.module.scss";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function EditNote() {
  const { id } = useParams();
  const note = mockData.find((n) => n.id === +id);

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [tags, setTags] = useState(note?.tags.join(", ") ?? "");
  if (!note) return <NotFound />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !tags) return;

    console.log({ title, content, tags });
    // Потом API логика, сейчас просто заглушка
  };

  return (
    <article className={`${styles.page} ${styles.article}`}>
      <div className={styles.editor}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              className={styles.titleInput}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={title}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="content">Content (Markdown)</label>
            <textarea
              id="content"
              className={styles.contentTextarea}
              onChange={(e) => setContent(e.target.value)}
              placeholder={content}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label} htmlFor="tags">Tags (separate by comma)</label>
            <input
              id="tags"
              type="text"
              className={styles.tagsInput}
              onChange={(e) => setTags(e.target.value)}
              placeholder={tags}
            />
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.saveBtn} onClick={handleSubmit}>
              Save
            </button>
            <Link to={`/notes/${id}`} className={styles.cancelBtn}>
              Cancel
            </Link>
          </div>
        </form>

        <div className={styles.preview}>
          <span className={styles.previewLabel}>Preview</span>
          <div className={styles.previewContent}>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
          </div>
        </div>
      </div>
    </article>
  );
}
