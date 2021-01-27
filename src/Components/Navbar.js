import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;

  .list {
    display: flex;
  }

  .listItem {
    display: flex;
    flex-direction: row;
  }

  a {
    color: black;
    text-decoration: none;
    margin-left: 1rem;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;

    @media (max-width: 750px) {
      justify-content: space-around;
      margin: 0 auto;
    }
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
};
