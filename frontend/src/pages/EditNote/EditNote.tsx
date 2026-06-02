import { NotFound } from "@/shared/ui/NotFound";
import { useEffect, useState, type MouseEvent } from "react";
import { useNavigate, useParams } from "react-router";
import { NoteForm } from "@/entities/NoteForm";
import { notes_api } from "@/shared/api/notes";
import { useNote } from "@/shared/hooks/useNote";

export function EditNote() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { note, loading } = useNote(id);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setTags(note.tags);
    }
  }, [note]);

  if (!id) return <NotFound />;
  if (loading) return null;
  if (!note) return <NotFound />;

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !content || !tags.length) return;
    await notes_api.update(+id, title, content, tags);
    navigate("/notes");
  };

  return (
    <NoteForm
      location={`/notes/${id}`}
      cancelLocation={`/notes/${id}`}
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
