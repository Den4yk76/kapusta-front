import logo from '../../static/logos/kapusta_logo.png';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Header.module.css';
import { ReactComponent as LogOut } from '../../static/icons/logout.svg';
import { ReactComponent as Line } from '../../static/icons/vertical_line.svg';

export default function HeaderIsLoggedIn() {
  return (
    <header className={s.header}>
      <img className={s.logo} width="90px" src={logo} alt="kapusta_logo" />
      <div className={s.user}>
        <span className={s.userInfo}>
          <b>U</b>
        </span>
      </div>
      <div className={s.loggedInfo}>
        <span className={s.userLoggedInfo}>User name</span>
        <Line className={s.line} />
        <button type="button" className={(s.userLoggedInfo, s.logoutButton)}>
          <u className={s.userLoggedInfo}>Log out</u>
        </button>
      </div>
      <button className={s.logoutButton}>
        <LogOut className={s.logoutIcon} />
      </button>
    </header>
  );
}

{
  /* <button className={s.svg}>
  <Back className={s.arrows} onClick={getPrevMonth} />
</button>; */
}
