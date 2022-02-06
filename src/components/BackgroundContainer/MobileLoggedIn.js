import s from '../BackgroundContainer/BackgroundContainer.module.css';
import overlay from '../../static/mobile/bg-mobile.png';

export default function MobileLoggedIn() {
  return (
    <div>
      <img className={s.overlayMobile} src={overlay} alt="overlay" />
    </div>
  );
}
