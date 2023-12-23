import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

/**
 * The main App component that renders the application.
 * It manages the state of notes and provides functions for adding and deleting notes.
 */
function App() {
  // State to hold the list of notes
  const [notes, setNotes] = React.useState([]);

  /**
   * Adds a new note to the list of notes.
   * @param {Object} note - The note object with title and content.
   */
  const addingNote = (note) => {
    // Use the previous notes and append the new note
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };

  /**
   * Deletes a note from the list of notes based on its index.
   * @param {number} id - The index of the note to be deleted.
   */
  const deleteNote = (id) => {
    // Filter out the note with the specified index
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  };

  // Render the components including Header, CreateArea, Note, and Footer
  return (
    <div>
      <Header />
      <CreateArea onAddNote={addingNote} />
      {notes.map((item, index) => {
        return (
          item.title !== "" &&
          item.content !== "" && (
            <Note
              key={index}
              id={index}
              onDelete={deleteNote}
              title={item.title}
              content={item.content}
            />
          )
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
