import React, { useState } from 'react';

function NoteTakingApp() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState('');

  const addNote = () => {
    if (inputText.trim() !== '') {
      setNotes([...notes, inputText]);
      setInputText('');
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="note-taking-app">
      <h2>Memopad Platform 1</h2>
      <div className="note-form">
        <input
          type="text"
          placeholder="Write a thought, poem, caption..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note}</p>
            <button onClick={() => deleteNote(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteTakingApp;
