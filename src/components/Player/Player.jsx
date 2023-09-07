import PropTypes from 'prop-types';
import './Player.css';

const Player = ({
  id,
  imageUrl,
  playerName,
  teamName,
  teamLogoUrl,
  playerUrl,
}) => {
  return (
    <div className='playersContainer slick-slide' data-id={id}>
      <a href={playerUrl} className='imgUrl'>
        <img src={imageUrl} alt={`${playerName} img`} />
      </a>
      <div className='dataPlayers'>
        <div className='infoPlayer'>
          <a href={playerUrl}>
            <h3>{playerName}</h3>
          </a>
          <div className='team'>{teamName}</div>
          <div className='shield'>
            <img src={teamLogoUrl} alt={`${teamName} logo`} />
          </div>
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  playerName: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
  teamLogoUrl: PropTypes.string.isRequired,
  playerUrl: PropTypes.string.isRequired,
};

export default Player;
