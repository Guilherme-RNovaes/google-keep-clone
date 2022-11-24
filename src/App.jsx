import { useState } from "react";

import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Header from "./components/Header";

import "./index.css"
import Count from "./components/Count";

function App() {
  const[notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
  }

  function deleteNotes(id) {
    setNotes(preValue => {
      return[...preValue.filter((note, index) => index !== id)]
    })
  }

  return (
    <div className="App">
      <Header />
      <Count count={notes.length === 0 ? "Vazio" : `Atualmente ${notes.length} notas no banco de dados`} />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index) => (
        <Note 
          key={index} 
          id={index} 
          title={note.title} 
          content={note.content}
          onDelete={deleteNotes} 
        />
      ))}
    </div>
  );
}

export default App;
