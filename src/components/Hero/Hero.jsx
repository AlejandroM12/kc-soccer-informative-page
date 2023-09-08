import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className='Hero'>
      <div className='secContainer'>
        <div className='textDiv'>
          <h1 data-aos='fade-up'>KC Soccer FIFA AGENT</h1>
          <p data-aos='fade-up' className='subtitleHero'>
            Somos una empresa de representación de deportistas, con mas de 20
            años de experiencia.
          </p>
          <p data-aos='fade-up' className='subtitleHero'>
            Avalados con Licencia FIFA, para asesorar futbolistas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
