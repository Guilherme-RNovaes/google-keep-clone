import { useState } from "react";

import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";

import "./index.css"

function App() {
  const[notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index) => (
        <Note key={index} id={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default App;
