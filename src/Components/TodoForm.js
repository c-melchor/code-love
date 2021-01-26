import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const StyledForm = styled.form`
  color: black;
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 2rem;

  .btn {
    background-color: #d99830;
    color: white;
    padding: 7px;
    width: 7%;
    height: 3%;
    margin-left: 0.5rem;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
      width: 20%;
    }
  }
`;

function TodoForm(props) {
  const [formValues, setFormValues] = useState({
    item: "",
    id: Date.now(),
    done: false
  });

  const onChange = e => {
    setFormValues({ ...formValues, item: e.target.value, id: Date.now() });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(formValues);
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="todo">To do: </label>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={onChange}
          value={formValues.value}
        />
        <button className="btn" type="submit">
          Add to list
        </button>
      </StyledForm>
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo })(TodoForm);
