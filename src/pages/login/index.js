import { Page, LoginForm, Form } from "./style.js";
import imgLogo from "../../assets/S-Vermelho.png";
import users from "../../data/users.json";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function entra() {
    let usuario = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    let listaUser = [];

    let userValid = {
      id: "",
      Username: "",
      Password: "",
    };

    // listaUser = JSON.parse(localStorage.getItem(users));
    listaUser = users.Usuarios;

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
      navigate("/home");
    } else alert("Senha ou Usuário incorreta!");
  }

  return (
    <Page>
      <Form>
        <div className="titleLogin">
          <h1>Bem vindo!</h1>
          <span>
            Olá, estamos muito felizes por te receber aqui, logue e se junta a
            nós.
          </span>
        </div>
        <form className="inputs" onSubmit={entra}>
          <input type="text" id="user" placeholder="Usuário" />
          <input type="password" id="pass" placeholder="Senha" />
          <span>Esqueceu sua senha?</span>
          <input id="submit" type="submit" value="Logar-se" />
        </form>
      </Form>
    </Page>
  );
}

export default LoginPage;
