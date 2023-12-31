import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Player } from '../../components';
import players from '../../helpers/data';
import 'swiper/swiper-bundle.css';
import './SectionPlayer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SectionPlayer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const params = {
    pagination: {
      clickable: true,
    },
    navigation: true,
    breakpoints: {
      '@0.00': {
        slidesPerView: 1,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div data-aos='fade-down' className='containerPlayersSection'>
      <h2>PROFESIONALES</h2>
      <hr />
      <Swiper {...params} navigation modules={[Navigation]}>
        {players.map((jugador) => (
          <SwiperSlide key={jugador.id}>
            <Player
              id={jugador.id}
              imageUrl={jugador.imageUrl}
              playerName={jugador.playerName}
              teamName={jugador.teamName}
              teamLogoUrl={jugador.teamLogoUrl}
              playerUrl={jugador.playerUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <a href='#' className='button'>
        VER PROFESIONALES
      </a>
    </div>
  );
};

export default SectionPlayer;
