import { NoteForm } from "@/entities/NoteForm";
import { notes_api } from "@/shared/api/notes";
import { withMinDelay } from "@/shared/lib/withMinDelay";
import { getErrorMessage } from "@/shared/lib/getErrorMessage";
import { useState, type MouseEvent } from "react";
import { useNavigate } from "react-router";

export function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !content || !tags.length) return;
    try {
      await withMinDelay(notes_api.create(title, content, tags));
      navigate("/notes");
    } catch (e) {
      setError(getErrorMessage(e));
    }
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
      error={error}
    />
  );
}
