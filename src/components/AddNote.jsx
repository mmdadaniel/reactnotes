import React from 'react';
import { useState } from 'react';

const AddNote = ({handleAdd}) => {

    const [noteText, setNoteText] = useState('');
    const [remaingColor, setRemaingColor] = useState('');
    const charLimit = 200;

    const handleChange = (event) => {

        if (charLimit - event.target.value.length >= 0) {

            setNoteText(event.target.value);

        }

        if(charLimit - event.target.value.length >= 50) {

            setRemaingColor('#000');

        } 
        
        if(charLimit - event.target.value.length < 50) {

            setRemaingColor('#EED65E');

        } 

        if(charLimit - event.target.value.length < 20) {

            setRemaingColor('#EE6A4C');

        }

    };

    const handleSave = (event) => {

        if (noteText.trim().length > 0) {

            handleAdd(noteText);
            setNoteText('');
            setRemaingColor('#000');

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
                <small style={{ color: remaingColor }}>{ charLimit - noteText.length } remaing.</small>
                <button className="btnSave" onClick={handleSave}>Save</button>
            </div>
       </div> 
    );
}

export default AddNote;