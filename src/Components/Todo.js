import React, { useState } from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions";
import styled from "styled-components";

const StyledTodos = styled.div`
  width: 100%;
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .smallerDiv {
    width: 20%;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: baseline;
    margin-top: 1rem;
  }

  .btn {
    background-color: pink;
    color: white;
    padding: 7px;
    width: 4%;
    height: 3%;
    text-align: center;
  }
`;

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

  return (
    <div key={props.todo.id}>
      {!editing ? (
        <StyledTodos>
          <div className="smallerDiv">
            <p className="todo">{props.todo.item}</p>
            <input
              className="check"
              type="checkbox"
              checked={props.todo.done}
              onChange={onChange}
              disabled={props.todo.done ? true : false}
            />
          </div>
          <button onClick={onEdit} className="btn">
            Edit
          </button>
        </StyledTodos>
      ) : (
        <StyledTodos>
          <input
            type="text"
            value={props.todo.item}
            name="todo"
            onChange={onChange}
          />
          <button onClick={onEdit} className="btn">
            Cancel
          </button>
          <button type="submit" className="btn">
            Save
          </button>
        </StyledTodos>
      )}
    </div>
  );
}

export default connect(null, { completeTodo })(Todo);
