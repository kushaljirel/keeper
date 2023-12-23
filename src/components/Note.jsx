import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

/**
 * Functional component representing a note.
 * @param {Object} props - React props containing id, title, content, and onDelete function.
 */
function Note(props) {
  /**
   * Handles the click event on the delete button.
   * Calls the onDelete function with the note's id to delete the note.
   */
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
