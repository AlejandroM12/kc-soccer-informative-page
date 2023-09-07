import { useState, useEffect, useRef } from 'react';
import logo from '@assets/logo-n-bg.png';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold, PiInstagramLogoLight } from 'react-icons/pi';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');
  const [transparent, setTransparent] = useState('Navbar');
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (menu === 'menu') {
      setMenu('showMenu menu');
    } else {
      setMenu('menu');
    }
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenu('menu');
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('Navbar addBackground');
    } else {
      setTransparent('Navbar');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);

  return (
    <div className={transparent}>
      <div className='logoDiv'>
        <img src={logo} alt='logo' />
      </div>
      <div className={menu} ref={menuRef}>
        <ul>
          <li className='navList'>Profesionales</li>
          <li className='navList'>Quiénes Somos</li>
          <li className='navList'>Contacto</li>
        </ul>
        <AiFillCloseCircle className='icon closeIcon' onClick={toggleMenu} />
      </div>

      <PiInstagramLogoLight className='icon instagram' />
      <PiDotsNineBold className='icon menuIcon' onClick={toggleMenu} />
    </div>
  );
};

export default Navbar;
