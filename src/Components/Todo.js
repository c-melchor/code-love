import React, { useState } from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";

function Todo(props) {
  const [editing, setEditing] = useState(false);

  const onEdit = e => {
    setEditing(!editing);
  };

  const onChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    props.completeTodo({ done: value, id: props.todo.id });
  };

  console.log({ todo: props.todo }, props);
  return (
    <div key={props.todo.id}>
      <p>{props.todo.item}</p>
      <input type="checkbox" checked={props.todo.done} onChange={onChange} />
      <div>
        <button onClick={onEdit}>Edit</button>
      </div>
    </div>
  );
}

export default connect(null, { completeTodo })(Todo);
