import s from '../Hero/Hero.module.css';
import heroDesktop from '../../static/desktop/smart_finance-desktop.png';

export default function HeroDesktop() {
  return (
    <div>
      <img className={s.heroDesktop} src={heroDesktop} alt="kapu$ta" />
    </div>
  );
}
