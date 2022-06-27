import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 93px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 70%;
    margin-left: 20px;
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
    margin: 10px;
    margin-right: 20px;

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
