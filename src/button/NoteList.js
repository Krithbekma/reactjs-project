import React from 'react';

const NoteList = ({ notes, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <div>
            <button onClick={() => handleEditNote(note.id)}>Edit</button>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
