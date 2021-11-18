import React from 'react';
import Note from "./Note";
import AddNote from './AddNote';

const NotesList = ({ notes, handleAdd }) => {
    return (
        <div className="notes-list">
            <AddNote handleAdd={handleAdd} />
            {notes
                .sort((a, b) => (a.text > b.text) ? 1 : -1)
                .map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                />
            ))}
        </div>
    )
}

export default NotesList;