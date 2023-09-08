import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';
import './Team.css';

const Team = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className='teamContainer' data-aos='fade-up'>
      <h2>NUESTRO EQUIPO</h2>
      <hr />
      <div className='teamInfo'>
        <p>
          De futbolistas para futbolistas. KC SOCCER es una agencia de
          intermediación de futbolistas y asesoramiento deportivo con más de 20
          años de experiencia que cuenta con un selecto equipo de profesionales
          vinculados con el deporte de élite expertos en diversas áreas.
        </p>
      </div>
      <div className='teamLink'>
        <a href='' className='button'>
          VER EQUIPO
        </a>
      </div>
    </div>
  );
};

export default Team;
