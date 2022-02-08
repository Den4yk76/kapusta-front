import s from '../Hero/Hero.module.css';
import heroMobile from '../../static/mobile/smart_finance-mobile.png';

export default function HeroMob() {
  return (
    <div>
      <img className={s.heroMobile} src={heroMobile} alt="kapu$ta" />
    </div>
  );
}
