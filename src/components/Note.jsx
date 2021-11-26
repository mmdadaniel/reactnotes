import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

import '../assets/css/components/Notes.css';

const Note = ({ id, text, date, handleDel }) => {
    return (
        <div className="note">   
            <p>{ text }</p>
            <div className="note-footer">
                <small>{ date }</small>
                <MdDeleteForever 
                        onClick={()=> handleDel(id)} 
                        className="note-delete-icon" 
                        size="1.3em" />
            </div>
        </div>
    )
}

export default Note;