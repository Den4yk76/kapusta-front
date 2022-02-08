import s from '../BackgroundContainer/BackgroundContainer.module.css';
import cabbageDouble from '../../static/tablet/kapusta_double-tablet.png';
import overlay from '../../static/tablet/bg-tablet.png';

export default function TabletLoggedIn() {
  return (
    <div>
      <img className={s.overlayTablet} src={overlay} alt="overlay" />
      <img
        className={s.cabbageDoubleLogged}
        src={cabbageDouble}
        alt="kapusta_bg"
      />
    </div>
  );
}
