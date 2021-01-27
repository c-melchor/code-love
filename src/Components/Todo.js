import React, { useState } from "react";
import { connect } from "react-redux";
import { editTodo, completeTodo } from "../actions";
import styled from "styled-components";

const StyledTodos = styled.div`
  width: 100%;
  color: black;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .smallerDiv {
    border: 1px solid black;
    background-color: white;
    width: 20%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    justify-items: center;
    align-items: baseline;
    margin-top: 1rem;
  }
  .smallerDiv p {
    background-color: white;
  }

  .btn {
    background-color: #d99830;
    color: white;
    padding: 5px;
    margin-top: 0.5rem;
    text-align: center;
  }

  @media (max-width: 750px) {
    .smallerDiv {
      justify-content: space-between;
      width: 60%;
    }
    
  }
`;

function Todo(props) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState({
    item: props.todo.item || ""
  });

  const onEdit = e => {
    setEditing(!editing);
  };

  const onEditChange = e => {
    setText(e.target.value);
  };

  const saveEdit = e => {
    e.preventDefault();
    props.editTodo({ id: props.todo.id, item: text });
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
              name="item"
              onChange={onEditChange}
              value={text.item}
            />
            <button onClick={onEdit} className="btn">
              Cancel
          </button>
            <button type="submit" onClick={saveEdit} className="btn">
              Save
          </button>
          </StyledTodos>
        )}
    </div>
  );
}

export default connect(null, { editTodo, completeTodo })(Todo);
