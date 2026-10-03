"use client";

type Note = {
  id: number;
  title: string;
  description: string;
};

type NoteItemProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

export default function NoteItem({
  note,
  onEdit,
  onDelete,
}: NoteItemProps) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>

      <p>{note.description}</p>

      <div className="note-buttons">
        <button
          className="edit-btn"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}