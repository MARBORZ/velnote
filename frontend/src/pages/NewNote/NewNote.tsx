import { NoteForm } from "@/entities/NoteForm";
import { useState, type MouseEvent } from "react";

export function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!title || !content || !tags.length) return console.log("none data.");
      console.log({ title, content, tags });
    };

  return (
    <NoteForm
      location={"/notes"}
      cancelLocation={"/notes"}
      title={title}
      content={content}
      tags={tags}
      setTitle={setTitle}
      setContent={setContent}
      setTags={setTags}
      submit={handleSubmit}
    />
  );
}
