import logo from '@assets/logo-n-bg.png';
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold, PiInstagramLogoLight } from 'react-icons/pi';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [transparent, setTransparent] = useState('Navbar');

  const showNavbar = () => {
    setMenu('showMenu menu');
  };
  const removeNavbar = () => {
    setMenu('menu');
  };
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('Navbar addBackground');
    } else {
      setTransparent('Navbar');
    }
  };
  window.addEventListener('scroll', addBg);
  return (
    <div className={transparent}>
      <div className='logoDiv'>
        <img src={logo} alt='logo' />
      </div>
      <div className={menu}>
        <ul>
          <li className='navList'>Profesionales</li>
          <li className='navList'>Quiénes Somos</li>
          <li className='navList'>Contacto</li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavbar} />
      </div>

      <PiInstagramLogoLight className='icon instagram' />

      <PiDotsNineBold className='icon menuIcon' onClick={showNavbar} />
    </div>
  );
};

export default Navbar;
