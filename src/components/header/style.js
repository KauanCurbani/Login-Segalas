import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #555;

  img {
    height: 90%;
  }
  nav ul {
    display: flex;
    list-style: none;
    align-items: center;
  }
  nav ul li {
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #e00208;
    }
  }
  #Menu-C {
    background-color: #e00208;
    padding: 0.6em 1em;
    border-radius: 8px;
    color: #fff;

    &:hover {
      border-radius: 2px;
      color: #fff;
    }
  }

`;
