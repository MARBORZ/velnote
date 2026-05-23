import { useState } from "react";
import styles from "./taginput.module.scss";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export function TagInput({ tags, onChange }: TagInputProps) {
  const [prevTag, setPrevTag] = useState("");

  const isValidTag = (tag: string) => /^[a-zA-Z0-9а-яА-ЯёЁ_\-\.]+$/.test(tag);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.endsWith(" ")) {
      const newTag = val.trim().toLowerCase();
      if (
        newTag &&
        !tags.includes(newTag) &&
        isValidTag(newTag) &&
        tags.length < 5
      ) {
        onChange([...tags, newTag]);
      }

      setPrevTag("");
    } else {
      setPrevTag(val);
    }
  };

  const removeTag = (tag: string) => {
    onChange(tags.filter((t) => t !== tag));
  };

  return (
    <div>
      {tags.length >= 5 && (
        <span className={styles.warning}>Max 5 tags reached</span>
      )}
    <div className={styles.wrapper}>
      {tags.map((t, i) => (
        <div key={`${t}-${i}`} className={styles.chip}>
          <span>{t}</span>
          <button
            type="button"
            className={`${styles.removeBtn} cursor-pointer`}
            onClick={() => removeTag(t)}
          >
            ✕
          </button>
        </div>
      ))}
      <input
        value={prevTag}
        className={styles.input}
        aria-label="tags"
        type="text"
        placeholder="Add tag..."
        onChange={(e) => handleInput(e)}
      />
    </div>
    </div>
  );
}
