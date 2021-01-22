import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo todo={todo} />;
      })}
      <TodoForm />
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(TodoList);
