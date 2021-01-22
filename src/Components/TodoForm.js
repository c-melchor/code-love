import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

function TodoForm(props) {
  const [formValues, setFormValues] = useState({
    item: "",
    id: Date.now(),
    done: false
  });

  const onChange = e => {
    setFormValues({ ...formValues, item: e.target.value, id: Date.now() });
    console.log(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    props.addTodo(formValues);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">To do</label>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={onChange}
          value={formValues.value}
        />
        <button type="submit">Add to list</button>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, { addTodo })(TodoForm);
