import React from "react";
import NotesIcon from "@mui/icons-material/Notes";

/**
 * Functional component representing the header of the application.
 * Displays the title with a notes icon.
 */
function Header() {
  return (
    <header>
      <h1>
        <NotesIcon />
        Keeper
      </h1>
    </header>
  );
}

export default Header;
