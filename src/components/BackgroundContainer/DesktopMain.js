import s from '../BackgroundContainer/BackgroundContainer.module.css';
import cabbageString from '../../static/desktop/kapusta_string-desktop.png';
import cabbageDouble from '../../static/desktop/kapusta_double-desktop.png';
import overlay from '../../static/desktop/bg-desktop.png';

export default function DesktopMain() {
  return (
    <div>
      <img className={s.overlayDesktop} src={overlay} alt="overlay" />
      <img
        className={s.cabbageStringDesktop}
        src={cabbageString}
        alt="kapusta_bg"
      />
      <img
        className={s.cabbageDoubleDesktop}
        src={cabbageDouble}
        alt="kapusta_bg"
      />
    </div>
  );
}
