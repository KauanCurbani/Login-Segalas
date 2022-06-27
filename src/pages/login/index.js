import { Page, LoginForm, Form } from "./style.js";
import imgLogo from "../../assets/S-Vermelho.png";
import users from "../../data/users.json";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { StoreContext } from "../../utils/store";
import { Button } from "@mui/material";

function LoginPage() {


  const navigate = useNavigate();

  function entra() {
    let usuario = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    /*     let listaUser = [];
     */
    let userValid = {
      id: "",
      Username: "",
      Password: "",
    };

    let listaUser = users.Usuarios;
    listaUser.forEach((item) => {
      if (usuario.value == item.Username && pass.value == item.Password) {
        userValid = {
          id: item.Id,
          Username: item.Username,
          Password: item.Password,
        };
      }
    });
    if (
      usuario.value == userValid.Username &&
      pass.value == userValid.Password
    ) {
      alert("trocou de pagina");
    } else alert("Senha ou Usuário incorreta!");
  }

  return (
    <Page>
      <Form>
        <div className="titleLogin" onClick={entra}>
          <h1>Bem vindo!</h1>
          <span>
            Olá, estamos muito felizes por te receber aqui, logue junte-se a
            nós.
          </span>
        </div>
        <form className="inputs" onSubmit={entra}>
          <input
            type="text"
            id="user"
            placeholder="Usuário"
            name="user"
            required
          />
          <input
            type="password"
            id="pass"
            placeholder="Senha"
            name="password"
            required
          />
          <span>Esqueceu sua senha?</span>
          <input id="submit" type="submit" value="Logar-se" />
        </form>
        <div className="continueWith">
          <hr className="hrLeft" />
          <span className="textHr">Ou continuar com</span>
          <hr className="hrRight" />
        </div>
        <div className="iconWith">
          <FcGoogle className="icon" />
          <FaApple className="icon" />
          <VscGithub className="icon" />
        </div>
        <div className="registerNow">
          <span>
            Ainda não é membro?{" "}
            <span className="registerText">Registre-se agora!</span>
          </span>
        </div>
        <Button variant="outlined">Outlined</Button>
      </Form>
    </Page>
  );
}

export default LoginPage;
