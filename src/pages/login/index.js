import { Page, LoginForm, Form } from "./style.js";
import imgLogo from "../../assets/S-Vermelho.png";
import { Link, useNavigate } from "react-router-dom";
import users from "../../data/users.json";

function LoginPage() {
  fetch(users).then(response => response.json()).then(obj => console.log(obj));

  let navigate = useNavigate();

  function loginAdmin() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user === "Admin" && pass === "Admin") {
      navigate("/home", { replace: true });
      console.log("ok!");
    } else {
      console.log("Não Logou!");
      console.log(user, pass);
    }
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
        <form className="inputs" onSubmit={loginAdmin}>
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
