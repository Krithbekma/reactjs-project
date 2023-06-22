import React from 'react';

const NoteForm = ({ currentNote, setCurrentNote, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={currentNote.title}
        onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
        className="note-form-input"
      />
      <textarea
        placeholder="Body"
        value={currentNote.body}
        onChange={(e) => setCurrentNote({ ...currentNote, body: e.target.value })}
        className="note-form-textarea"
      ></textarea>
      <button type="submit" className="note-form-button">Save Note</button>
    </form>
  );
};

export default NoteForm;
