import React from 'react'
import {Link, Route} from "react-router-dom";
import useAuth from '../hooks/useAuth';
import "../components/style/Signup/index.css";
 
const Signup= () => {

  const [email, setEmail] = useState("");
  const [emailconf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
const [error, setError] = useState("");



  return (
<body>
  <div className="container">
    <header className="header">
      <img src="" alt="" /> 
      <h1>cadastro</h1>
      <span>Faça seu Cadastro</span>  
    </header>

    <form>
    <div className="inputContainer">
  
      <label htmlFor="email">E-mail</label>
        <input 
          type="email"
          name="email"
          value={emailconf}
          onCharge={(e) => [setEmailConf(e.target.value), setError("")]}
          placeholder="Digite seu E-mail"/>
       </div>

       <div className="inputContainer">
        <label htmlFor="password"> Senha </label>
        <input 
          type="password"
          name="senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          placeholder="Crie uma senha"/>
       </div>
      
      <div className="inputCheckbox">
        <input type="checkbox" name="checkbox" />
        <label htmlFor="checkbox"> Aceito receber notificação por email </label>
      </div>

      <button type="submit" className="button"> Acessar</button>


      <div className="footer">
        <p>Ajudar?</p>
        <a href="#">Clique aqui!</a>
      </div>
    </form>
  </div>
  </body>
  );
  };
  export default Signup();




 
