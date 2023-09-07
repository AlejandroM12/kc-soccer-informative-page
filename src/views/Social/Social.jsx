import { PiInstagramLogoLight } from 'react-icons/pi';
import './Social.css';

const Social = () => {
  return (
    <div className='social'>
      <div className='socialContent'>
        <h2>KC SOCCER DEPORTE</h2>
        <a
          href='https://www.instagram.com/kc.agencysoccer/'
          className='socialImg'
          target='_blank'
          rel='noreferrer'
        >
          <PiInstagramLogoLight className='icon instagram' />
          <p>Síguenos en @kc.agencysoccer</p>
        </a>
      </div>
    </div>
  );
};

export default Social;
