import React from "react";
import { connect } from "react-redux";

export default function Todo(props) {
  console.log(props, "PROPS FROM TODO");
  return (
    <div key={props.todo.id}>
      <p>{props.todo.item}</p>
    </div>
  );
}
