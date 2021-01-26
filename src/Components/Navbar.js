import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
  display: flex;

  .list {
    display: flex;
  }

  .listItem {
    display: flex;
    flex-direction: row;
  }

  a {
    text-decoration: none;
    display: flex;
    margin-left: 1rem;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export default function Navbar() {
  return (
    <StyledDiv>
      <ul className="list">
        <li className="listItem">
          <a href="/">Home</a>
        </li>
        <li className="listItem">
          <a href="/todos">To Do</a>
        </li>
        <li className="listItem">
          <a href="#">Shop</a>
        </li>
        <li className="listItem">
          <a href="#">Cart</a>
        </li>
      </ul>
    </StyledDiv>
  );
}
