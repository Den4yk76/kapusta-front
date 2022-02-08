import s from '../BackgroundContainer/BackgroundContainer.module.css';
import cabbageHalf from '../../static/mobile/kapusta_half-mobile.png';
import cabbageBig from '../../static/mobile/kapusta_big-mobile.png';
import overlay from '../../static/mobile/bg-mobile.png';

export default function MobileMain() {
  return (
    <div className={s.backgroundContainer}>
      <img className={s.overlayMobile} src={overlay} alt="overlay" />
      <img className={s.cabbageHalf} src={cabbageHalf} alt="kapusta_bg" />
      <img className={s.cabbageBig} src={cabbageBig} alt="kapusta_bg" />
    </div>
  );
}
