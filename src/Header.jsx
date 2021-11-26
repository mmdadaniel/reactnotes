import React from 'react';

import './assets/css/Header.css';

const Header = ({ handleMode }) => {

    return(
        <div className="header">
            <h2>NoteApp</h2>
            <button
                onClick={() => handleMode((prevMode) => !prevMode)}
                className="btnSave"
            >Change</button>
        </div>
    )
    
}

export default Header;