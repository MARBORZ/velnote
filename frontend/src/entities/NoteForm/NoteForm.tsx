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
    <div>
      <BackArrow navigate={location} label={backLabel} />
      <article className={`${styles.article} max-w-5xl mx-auto p-8`}>
        <div className="grid grid-cols-2 gap-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                className={`${styles.titleInput} w-full pb-2`}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Note title..."}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="content">
                Content (Markdown)
              </label>
              <textarea
                id="content"
                className={`${styles.textarea} w-full px-3 py-2 min-h-80 resize-y`}
                onChange={(e) => setContent(e.target.value)}
                placeholder={"Note content..."}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium" htmlFor="tags">
                Tags (separate by comma)
              </label>
              <TagInput tags={tags} onChange={setTags}></TagInput>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className={`${styles.saveBtn} px-4 py-2 text-sm cursor-pointer`}
                onClick={(e) => submit(e)}
              >
                Save
              </button>
              <Link
                to={cancelLocation}
                className={`${styles.cancelBtn} px-4 py-2 text-sm`}
              >
                Cancel
              </Link>
            </div>
          </form>

          <div className="flex flex-col mh-150 gap-2">
            <span className={`${styles.previewLabel} text-sm font-medium`}>
              Preview
            </span>
            <div className={styles.previewBox}>
              <h1 className="pb-5">{title || "Untitled"}</h1>

              <div className={`prose ${styles.previewContent}`}>
                <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
              </div>
              <div
                className={`flex flex-row items-start gap-4 min-w-0 ${styles.tagContainer}`}
              >
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
