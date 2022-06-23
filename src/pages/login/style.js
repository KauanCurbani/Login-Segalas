import styled from "styled-components";

export const Page = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  width: 100%;
  height: 100vh;
  background-color: #f4f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;
export const Form = styled.div`
  width: 350px;
  height: 700px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 15px;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-content: center;

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }

  .inputs input {
    width: 90%;
    height: 50px;
    border-radius: 7px;
    margin: 5px 0;
    border: none;
    text-indent: 15px;
    background-color: #f3f6f9;
    font-family: "Poppins", sans-serif;

    &:focus {
      outline: none;
    }
  }
  #submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #e00208;
    color: #fff;
    cursor: pointer;
    transition: 0.5s ease;
    opacity: 1;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;

    &:hover {
      background-color: #ff0020;
    }
    &:active {
      transform: scale(0.98);
    }
  }
  .titleLogin {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .titleLogin h1 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-weight: 400;
  }

  .titleLogin span {
    font-weight: 300;
    margin-bottom: 20px;
  }

  .inputs span {
    width: 100%;
    display: flex;
    justify-content: right;
    margin-top: 10px;
    margin-bottom: 20px;
    margin-right: 40px;
    font-size: 13px;
    color: #262a33;
  }
`;
