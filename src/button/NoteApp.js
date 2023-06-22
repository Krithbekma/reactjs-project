import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import '../style/style.css'; // Import custom CSS file for NoteApp styling

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: '', title: '', body: '', isEditing: false });

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentNote.title.trim() !== '' && currentNote.body.trim() !== '') {
      if (currentNote.isEditing) {
        const updatedNotes = notes.map((note) =>
          note.id === currentNote.id ? { ...currentNote } : note
        );
        setNotes(updatedNotes);
      } else {
        const newNote = { ...currentNote, id: Date.now() };
        setNotes([...notes, newNote]);
      }
      setCurrentNote({ id: '', title: '', body: '', isEditing: false });
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setCurrentNote({
      id: noteToEdit.id,
      title: noteToEdit.title,
      body: noteToEdit.body,
      isEditing: true,
    });
  };

  return (
    <div className="note-app">
      <h1>Note App</h1>
      <NoteForm
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        handleFormSubmit={handleFormSubmit}
      />
      <NoteList
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleEditNote={handleEditNote}
      />
    </div>
  );
};

export default NoteApp;
