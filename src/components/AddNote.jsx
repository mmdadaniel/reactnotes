import React from 'react';
import { useState } from 'react';

const AddNote = ({handleAdd}) => {

    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSave = (event) => {

        if (noteText.trim().length > 0) {
            handleAdd(noteText);
            setNoteText('');
        }
    };

    return (
       <div className="note new">
           <textarea 
                cols="10" 
                rows="8" 
                placeholder="Type your new note..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
           <div className="note-footer">
                <small>200 remaing.</small>
                <button className="btnSave" onClick={handleSave}>Save</button>
            </div>
       </div> 
    );
}

export default AddNote;