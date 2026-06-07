import type { MouseEvent } from "react";
import styles from "./noteform.module.scss";
import { BackArrow } from "@/shared/ui/BackArrow/BackArrow";
import { TagInput } from "@/shared/ui/TagInput";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router";

interface NoteFormProps {
  location: string;
  cancelLocation: string;
  backLabel?: string;
  title: string;
  content: string;
  tags: string[];
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setTags: (tags: string[]) => void;
  submit: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function NoteForm({
  location,
  cancelLocation,
  backLabel,
  title,
  content,
  tags,
  setTitle,
  setContent,
  setTags,
  submit,
}: NoteFormProps) {
  return (
    <div className="flex flex-col gap-6 h-full">
      <BackArrow navigate={location} label={backLabel} />

      <div className={`${styles.card} flex-1 grid grid-cols-2`}>

        {/* Left — editor */}
        <div className={`${styles.left} flex flex-col gap-5`}>

          {/* Title */}
          <div className={styles.titleSection}>
            <span className={styles.fieldLabel}>Title</span>
            <input
              id="title"
              type="text"
              value={title}
              className={`${styles.titleInput} w-full`}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
            />
          </div>

          {/* Content */}
          <div className={`${styles.contentSection} flex flex-col gap-1.5 flex-1`}>
            <span className={styles.fieldLabel}>Content (Markdown)</span>
            <textarea
              id="content"
              value={content}
              className={`${styles.textarea} w-full flex-1 resize-none`}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Note content..."
            />
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-1.5">
            <span className={styles.fieldLabel}>Tags</span>
            <TagInput tags={tags} onChange={setTags} />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              type="button"
              className={`${styles.saveBtn} cursor-pointer`}
              onClick={(e) => submit(e)}
            >
              Save
            </button>
            <Link to={cancelLocation} className={styles.cancelBtn}>
              Cancel
            </Link>
          </div>
        </div>

        {/* Right — preview */}
        <div className={`${styles.right} flex flex-col gap-4`}>
          <span className={styles.fieldLabel}>Preview</span>
          <div className={`${styles.previewBox} flex flex-col gap-4 flex-1`}>
            <h1 className={styles.previewTitle}>{title || "Untitled"}</h1>
            <div className={`prose ${styles.previewContent}`}>
              <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
