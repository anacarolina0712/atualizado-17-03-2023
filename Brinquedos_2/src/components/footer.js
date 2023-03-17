import React from 'react';
import logoBranco from './img/logo-bandeirante-branco.png';
import facebook from './img/facebook.png';
import linkedin  from './img/linkedin.png';
import instagram from './img/instagram.png';
import youtube  from './img/youtube.png';

function footer() {

  return (
  <>
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="content-logofooter">
            <img className="logo-footer"src={logoBranco} alt="logo brinquedos bandeirante"/>
          </div>
          <div className="social-midia">
            <a href="https://www.facebook.com/oficialbrinquedosbandeirante/"><img className="icones-midia" src={facebook}
                alt="facebook"/></a>
            <a href="https://br.linkedin.com/company/brinquedos-bandeirante-oficial"><img className="icones-midia"
                src={linkedin} alt="linkedin"/></a>
            <a href="https://www.instagram.com/brinquedosbandeiranteoficial/"><img className="icones-midia"
                src={instagram} alt="instagram"/></a>
            <a href="#"><img className="icones-midia"src={youtube} alt="youtube"/></a>
          </div>
        </div>
        © 2022 Copyright
      </div>
    </footer>
  </>
  );
}

export default footer;



