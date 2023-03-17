import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo_remove.png';

function header() {

  return (
  <>
     <header>
      <nav className="nav-extended">
        <div className="nav-wrapper container">
          <Link to="#" className="brand-logo"><img className="logo_principal" src={logo} alt="logo principal"/></Link>
          
          <ul className="right">
            <li>
              <Link classname ="black-text" to="#"><i className="material-icons left">help</i>Ajuda</Link>
            </li>
            <li>
              <Link className="black-text" to="#">Trabalhe conosco</Link>
            </li>
            <li>
              <Link to="/" className='black-text'>
                <i className="material-icons left">logout</i>Sair</Link>
            </li>
          </ul>
        </div>
    
        <nav className="dp-menu">
          <ul className="browser-default">
            <li>
              <Link to="#">Administrativo</Link>
              <ul>
                <li><Link to="/Planejamento_estratégico">Planejamento estratégico</Link></li>
                <li><Link to="/Consultoria">Consultoria</Link></li>
                <li><Link to="/Comercio">Comércio</Link></li>
              </ul>
            </li>

            <li>
              <Link to="#">Financeiro</Link>
              <ul>
                <li><Link to="/Gestao_de_tesouraria">Gestão de tesouraria</Link></li>
                <li>
                  <Link to="/Controle_financeiro">Controle financeiro</Link>
                </li>
              </ul>
            </li>

            <li><Link to="/Vendas">Vendas</Link></li>
            <li><Link to="/Contabilidade">Contabilidade</Link></li>
            <li>
              <Link to="#">Marketing</Link>
              <ul>
                <li><Link to="/Pesquisa_de_mercado">Pesquisa de mercado</Link></li>
                <li><Link to="/Analise_do_marketing">analise do Marketing</Link></li>
                <li><Link to="/Gestao_de_ferramentas">Gestão de ferramentas</Link></li>
              </ul>
            </li>

            <li><Link to="/Producao">Produção</Link></li>
            <li><Link to="/Comercial">Comercial</Link></li>
          </ul>
        </nav>
      </nav>
    </header>



  </>

  );
}

export default header;


