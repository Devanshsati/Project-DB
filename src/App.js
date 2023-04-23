import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    fetch("http://localhost:3636/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((preValue) => {
      return preValue.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addItem} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;