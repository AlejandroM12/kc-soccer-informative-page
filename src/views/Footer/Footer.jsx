import { useEffect } from 'react';
import { AiFillInstagram, AiFillMessage } from 'react-icons/ai';
import logo from '@assets/logo-n-bg.png';
import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className='Footer'>
      <div className='secContainer'>
        <div data-aos='fade-up' className='logoDiv'>
          <div className='footerLogo'>
            <img src={logo} alt='logo' />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,
            laborum?
          </p>
          <div className='socials'>
            <AiFillInstagram className='icon' />
            <AiFillMessage className='icon' />
          </div>
        </div>
        <div data-aos='fade-up' className='footerLinks'>
          <span className='linkTitle'> Informacion</span>
          <li>
            <a href='#'>Inicio</a>
          </li>
          <li>
            <a href='#'>Profesionales</a>
          </li>
          <li>
            <a href='#'>Quiénes Somos</a>
          </li>
          <li>
            <a href='#'>Contacto</a>
          </li>
        </div>
        <div data-aos='fade-up' className='footerLinks'>
          <span className='linkTitle'>Enlaces Útiles</span>
          <li>
            <a href='#'>Ayuda</a>
          </li>
          <li>
            <a href='#'>Política de Cookies</a>
          </li>
          <li>
            <a href='#'>Política de Privacidad</a>
          </li>
          <li>
            <a href='#'>Aviso Legal</a>
          </li>
        </div>
        <div data-aos='fade-up' className='footerLinks'>
          <span className='linkTitle'>Contact Details</span>
          <span className='phone'>+123 123 123 123</span>
          <span className='email'>example@gmail.com</span>
          <span className='instagram'>@kc.agencysoccer</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
