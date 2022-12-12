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
          <p>Para más detalles contactame!</p>
          <div className='footer__icons'>
            <a 
              href="https://www.linkedin.com/in/jose-daniel-bedoya-chavarriaga-b9a8021b1/" target={"_blank"}>
              <i className="fa-brands fa-linkedin-in icons"></i></a>         
            <a 
              href="https://github.com/J-Daniel-Bedoya" target={"_blank"}>
              <i className="fa-brands fa-github icons"></i></a>         
            <a 
              href="https://portafolio-danielbedoya.netlify.app/" target={"_blank"}>
              <i className="fa-solid fa-briefcase icons"></i></a> 
            <a 
              href="mailto:jbedoyachavarriaga@gmail.com">
              <i className="fa-solid fa-envelope icons"></i></a>   
            <a 
              href="tel:+57 316 449 3210">
              <i className="fa-solid fa-phone icons"></i></a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;