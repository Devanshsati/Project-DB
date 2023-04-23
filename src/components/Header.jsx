import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />Keeper
        <form action="/post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </h1>
    </header>
  );
}

export default Header;