import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import './assets/css/Footer.css';

export default (props) => {
    return(
        <div className="footer">
            <div className="left-side">
                <span>
                    &copy; {new Date().getFullYear()}, All rights reserved. <a href="/">NoteApp</a>
                </span>
            </div>
            <div className="right-side">
                <span>Follow us: </span>
                <a href="#" target="_blank">
                    <FaInstagram fab icon="instagram" />
                </a>
                <a href="#" target="_blank">
                    <FaTwitter fab icon="twitter" />
                </a>
            </div>
        </div>
    )
}