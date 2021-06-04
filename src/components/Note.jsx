import React from "react";

function Note(props) {
  function delH() {
    props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delH}>-</button>
    </div>
  );
}

export default Note;
