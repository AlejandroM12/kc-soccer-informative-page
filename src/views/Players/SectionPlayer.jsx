import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Player } from '../../components';
import players from '../../helpers/data';
import 'swiper/swiper-bundle.css';
import './SectionPlayer.css';

const SectionPlayer = () => {
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
    <div className='containerPlayersSection'>
      <h1 style={{ color: '#000', textAlign: 'center' }}>PROFESIONALES</h1>
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
