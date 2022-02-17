import s from '../Hero/Hero.module.css';
import heroTablet from '../../static/tablet/smart_finance-tablet.png';

export default function HeroTab() {
  return (
    <div>
      <img className={s.heroTablet} src={heroTablet} alt="kapu$ta" />
    </div>
  );
}
