import React,{useState} from "react"
import "../components/style/Signin/index.css";
import {link, Route} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signin = () => {
  const{Signin} = useAuth();
  const navigate = Route

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin= ( ) =>{
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = Signin(email,senha);
    if (res){
      setError(res);
      return;
    }
    navigate("/Home");
  };




  return (
<body>
  <div className="container">
    <header className="header">
      <img src="" alt="" /> 
      <h1>Login</h1>
      <span>Faça seu login, para acessar a plataforma</span>  
    </header>

    <form>
    <div className="inputContainer">
      <label htmlFor="email">E-mail</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
          placeholder="example@gmail.com"/>
       </div>

       <div className="inputContainer">
        <label htmlFor="password"> Senha </label>
        <input 
          type="password"
          name="senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          placeholder="senha"/>
       </div>
      <a className="passwordText" href=""> esqueci minha senha? </a>
      
      <div className="inputCheckbox">
        <input type="checkbox" name="checkbox" />
        <label htmlFor="checkbox"> Aceito receber notificação por email </label>
      </div>

      <button onClick={onclick} className="button"> Acessar</button>


      <div className="footer">
        <p>Ainda não tem conta? </p>
        <link to="/Signup">&nbsp;Cadastre-se</link>
      </div>
    </form>
  </div>
  </body>
  );
};
export default Signin();
// LINHA DE CÓDIGO PARA DAR ESPAÇO ENNTRE DOIS TEXTPS ALINHADOS 
//   &nbsp;