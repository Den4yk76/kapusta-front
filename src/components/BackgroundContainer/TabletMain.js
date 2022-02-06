import s from '../BackgroundContainer/BackgroundContainer.module.css';
import cabbageString from '../../static/tablet/kapusta_string-tablet.png';
import cabbageDouble from '../../static/tablet/kapusta_double-tablet.png';
import overlay from '../../static/tablet/bg-tablet.png';

export default function TabletMain() {
  return (
    <div>
      <img className={s.overlayTablet} src={overlay} alt="overlay" />
      <img className={s.cabbageString} src={cabbageString} alt="kapusta_bg" />
      <img className={s.cabbageDouble} src={cabbageDouble} alt="kapusta_bg" />
    </div>
  );
}
