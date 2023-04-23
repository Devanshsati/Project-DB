import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
        />
        {/* <Zoom in={isExpanded}> */}
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              setNote({
                title: "",
                content: ""
              });
              event.preventDefault();
            }}
          >
            <AddCircleOutlineIcon />
          </Fab>
        {/* </Zoom> */}
      </form>
    </div>
  );
}

export default CreateArea;