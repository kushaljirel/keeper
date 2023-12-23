import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

/**
 * Functional component that represents an area for creating notes.
 * @param {Object} props - React props containing onAddNote function.
 */
function CreateArea(props) {
  // State to manage the note's title, content, and expansion state
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Handles the submission of a new note.
   * Displays alerts if title or content is empty and prevents adding an empty note.
   * @param {Object} e - Event object.
   */
  function addNote(e) {
    e.preventDefault();

    // Display alert if both title and content are empty
    if (note.title.trim() === "" && note.content.trim() === "") {
      alert("Title and Content are empty");
      return;
    }

    // Display alert if content is empty
    if (note.content.trim() === "") {
      alert("Content is empty");
      return;
    }

    // Display alert if title is empty
    if (note.title.trim() === "") {
      alert("Title is empty");
      return;
    }

    // Notify the parent component to add the note
    props.onAddNote(note);

    // Clear out inputs only when both title and content are non-empty
    if (note.title.trim() !== "" && note.content.trim() !== "") {
      setNote({
        title: "",
        content: "",
      });
    }
  }

  /**
   * Handles changes in the input fields and updates the corresponding state.
   * @param {Object} e - Event object.
   */
  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onClick={() => setIsExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? "4" : "1"}
        />
        <Zoom in={isExpanded} style={{ transitionDelay: "100ms" }}>
          <Fab onClick={addNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
