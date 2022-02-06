import s from '../BackgroundContainer/BackgroundContainer.module.css';
import cabbageString from '../../static/desktop/kapusta_string-desktop.png';
import overlay from '../../static/desktop/bg-desktop.png';

export default function DesktopLoggedIn() {
  return (
    <div>
      <img className={s.overlayDesktop} src={overlay} alt="overlay" />
      <img
        className={s.cabbageStringLoggedDesktop}
        src={cabbageString}
        alt="kapusta_bg"
      />
    </div>
  );
}
