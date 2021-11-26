import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from './Header';
import Footer from './Footer';
import Search from './components/Search';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-note-app-data'));

    if (savedNotes) {
      setNotes(savedNotes);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('react-note-app-data', JSON.stringify(notes))
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const delNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleMode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NotesList 
            notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
            handleAdd={addNote} 
            handleDel={delNote} 
        />
        <Footer />
      </div>
    </div>
  )
}

export default App;
