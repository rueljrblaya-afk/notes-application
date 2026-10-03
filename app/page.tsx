"use client";

import { useEffect, useState } from "react";
import NoteItem from "./components/NoteItem";

type Note = {
  id: number;
  title: string;
  description: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes, loaded]);

  const addNote = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    const newNote: Note = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setDescription("");
  };

  const editNote = (note: Note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditDescription(note.description);
  };

  const saveEdit = () => {
    if (!editTitle.trim() || !editDescription.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    setNotes(
      notes.map((note) =>
        note.id === editingId
          ? {
              ...note,
              title: editTitle.trim(),
              description: editDescription.trim(),
            }
          : note
      )
    );

    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditDescription("");
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <main className="container">
      <h1>My Notes</h1>
      <p className="subtitle">Simple Next.js Notes Application</p>

      <section className="note-form">
        <h2>Add New Note</h2>

        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addNote}>Add Note</button>
      </section>

      <section className="notes-section">
        <div className="notes-header">
          <h2>My Notes</h2>
          <span>{notes.length} note(s)</span>
        </div>

        {notes.length === 0 ? (
          <div className="empty">
            <h3>No notes yet</h3>
            <p>Add your first note above.</p>
          </div>
        ) : (
          <div className="notes-list">
            {notes.map((note) =>
              editingId === note.id ? (
                <div className="edit-form" key={note.id}>
                  <h3>Edit Note</h3>

                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />

                  <textarea
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />

                  <div className="edit-buttons">
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                  </div>
                </div>
              ) : (
                <NoteItem
                  key={note.id}
                  note={note}
                  onEdit={editNote}
                  onDelete={deleteNote}
                />
              )
            )}
          </div>
        )}
      </section>
    </main>
  );
}