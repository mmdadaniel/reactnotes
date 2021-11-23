import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'Some fun note',
      date: '11/18/2021'
    },
    {
      id: nanoid(),
      text: 'Some fun note 2',
      date: '11/17/2021'
    },{
      id: nanoid(),
      text: 'Some fun note 3',
      date: '11/16/2021'
    },
    {
      id: nanoid(),
      text: 'Some fun note 4',
      date: '11/16/2021'
    },
    {
      id: nanoid(),
      text: 'Some fun note 5',
      date: '11/11/2021'
    },
]);

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

return <div className="container">
  <Header />
  <NotesList notes={notes} handleAdd={addNote} />
  <Footer />
</div>
}

export default App;
