import React from 'react';
import '../styles/footer/Footer.css'

const Footer = () => {
  return (

    <div className='footer'>
      <div className='footer__contex'>
        {/* contenedor de la información de contacto */}
        <div className='footer__info'>
          {/* información individual */}
          <p>Daniel Bedoya</p>
          <div className='footer__icons'>
            <a 
              href="https://www.linkedin.com/in/jose-daniel-b-b9a8021b1/" target={"_blank"}>
              <i className="fa-brands fa-linkedin-in icons"></i></a>         
            <a 
              href="https://github.com/J-Daniel-Bedoya" target={"_blank"}>
              <i className="fa-brands fa-github icons"></i></a>         
            <a 
              href="#" target={"_blank"}>
              <span className="material-symbols-outlined icons">business_center</span></a> 
            <a 
              href="" target={"_blank"}>
              <span className="material-symbols-outlined icons">mail</span></a>   
            <a 
              href="" target={"_blank"}>
              <span className="material-symbols-outlined icons">call</span></a>  
          </div>
        </div>
        <div className='footer__info'>
          {/* información individual */}
          <p>Oween Unda</p>
          <div className='footer__icons'>
            <a href="#" target={"_blank"}><i className="fa-brands fa-linkedin-in icons"></i></a>
            <a href="#" target={"_blank"}><i className="fa-brands fa-github icons"></i></a>
            <a href="#" target={"_blank"}><span className="material-symbols-outlined icons">business_center</span></a>
            <a href="#" target={"_blank"}><span className="material-symbols-outlined icons">mail</span></a>
            <a href="#" target={"_blank"}><span className="material-symbols-outlined icons">call</span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;