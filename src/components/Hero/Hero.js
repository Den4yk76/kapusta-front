import HeroDesktop from './HeroDesc';
import HeroMob from './HeroMob';
import HeroTab from './HeroTab';

export default function Hero() {
  return (
    <>
      <HeroMob />
      <HeroTab />
      <HeroDesktop />
    </>
  );
}
