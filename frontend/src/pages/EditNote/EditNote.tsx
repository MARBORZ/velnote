import { mockData } from "@/shared/lib/mockData";
import { NotFound } from "@/shared/ui/NotFound";
import { useState, type MouseEvent } from "react";
import { useParams } from "react-router";
import { NoteForm } from "@/entities/NoteForm";

export function EditNote() {
  const { id } = useParams();
  const note = id ? mockData.find((n) => n.id === +id) : undefined;

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [tags, setTags] = useState<string[]>(note?.tags ?? []);

  if (!id) return <NotFound />;
  if (!note) return <NotFound />;

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!title || !content || !tags.length) return console.log("none data.");
    console.log({ title, content, tags });
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
