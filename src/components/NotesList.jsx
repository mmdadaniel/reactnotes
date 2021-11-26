import React from 'react';
import Note from "./Note";
import AddNote from './AddNote';

import '../assets/css/components/NotesList.css';

const NotesList = ({ notes, handleAdd, handleDel }) => {
    return (
        <div className="notes-list">
            <AddNote handleAdd={handleAdd} />
            {notes
                .sort((a, b) => (a.text > b.text) ? 1 : -1)
                .map((note) => (
                <Note key={note.id}
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    handleDel={handleDel}
                />
            ))}
        </div>
    )
}

export default NotesList;