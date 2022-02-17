import HeroDesktop from './HeroDesc';
import HeroMob from './HeroMob';
import HeroTab from './HeroTab';
import s from '../Hero/Hero.module.css';

export default function Hero() {
  return (
    <>
      <HeroMob className={s.mobRender} />
      <HeroTab className={s.tabRender} />
      <HeroDesktop className={s.descRender} />
    </>
  );
}
