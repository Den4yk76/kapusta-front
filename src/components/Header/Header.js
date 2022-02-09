import logo from '../../static/logos/kapusta_logo.png';
import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <a href="./">
        <img className={s.logo} width="90px" src={logo} alt="kapusta_logo" />
      </a>
    </header>
  );
}
