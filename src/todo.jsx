import React from "react";

function Todo({ name }) {
  if (name) {
    return (
      <div className="card">
        <h3>{name}</h3>
      </div>
    );
  }

  return <div className="card">No Name Found</div>;
}

export default Todo;
