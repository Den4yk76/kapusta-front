import s from '../Container/Container.module.css';
import BackgroundContainer from '../BackgroundContainer/BackgroundContainer';

export default function Container({ children }) {
  return (
    <div className={s.backgroundContainer}>
      <BackgroundContainer />
      <div className={s.container}>{children}</div>
    </div>
  );
}
