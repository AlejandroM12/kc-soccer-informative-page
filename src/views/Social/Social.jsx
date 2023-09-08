import { useEffect } from 'react';
import { PiInstagramLogoLight } from 'react-icons/pi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Social.css';

const Social = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className='social'>
      <div className='socialContent'>
        <h2 data-aos='fade-up'>KC SOCCER DEPORTE</h2>
        <a
          href='https://www.instagram.com/kc.agencysoccer/'
          className='socialImg'
          target='_blank'
          rel='noreferrer'
          data-aos='fade-up'
        >
          <PiInstagramLogoLight className='icon instagram' />
          <p>Síguenos en @kc.agencysoccer</p>
        </a>
      </div>
    </div>
  );
};

export default Social;
