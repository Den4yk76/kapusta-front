import logo from '../../static/logos/kapusta_logo.png';
import s from './Header.module.css';
import { ReactComponent as LogOut } from '../../static/icons/logout.svg';
import { ReactComponent as Line } from '../../static/icons/vertical_line.svg';
import UniversalModal from '../UniversalModal/UniversalModal';
import { useState } from 'react';
// import authSelectors from '../../redux/auth/auth-selectors';
// import { useSelector } from 'react-redux';

export default function HeaderIsLoggedIn() {
  const [showModal, setShowModal] = useState(false);
  const onOpen = () => {
    setShowModal(true);
  };
  const onClick = () => {
    setShowModal(false);
  };
  // const mailUsers = useSelector(authSelectors.mailCurrentUser);
  // const UserNameFirstLetter = mailUsers?.toUpperCase().slice(0, 1);
  // const UserName = mailUsers?.substring(0, mailUsers?.indexOf('@'));
  // console.log(mailUsers);
  // console.log(UserNameFirstLetter);
  // console.log(UserName);

  const currentMail = localStorage.getItem('email');
  const UserNameFirstLetter = currentMail?.toUpperCase().slice(0, 1);
  const UserName = currentMail?.substring(0, currentMail?.indexOf('@'));

  console.log(currentMail);
  return (
    <header className={s.header}>
      <a href="./">
        <img className={s.logo} width="90px" src={logo} alt="kapusta_logo" />
      </a>
      <div className={s.user}>
        <span className={s.userInfo}>
          <b>{currentMail ? UserNameFirstLetter : 'U'}</b>
        </span>
      </div>
      <div className={s.loggedInfo}>
        <span className={s.userLoggedInfo}>
          {currentMail ? UserName : 'User'}
        </span>
        <Line className={s.line} />
        <button
          type="button"
          onClick={onOpen}
          className={(s.userLoggedInfo, s.logoutButton)}
        >
          <u className={s.userLoggedInfo}>Log out</u>
        </button>
      </div>
      <button className={s.logoutButton} type="button" onClick={onOpen}>
        <LogOut className={s.logoutIcon} />
      </button>
      {showModal && (
        <UniversalModal
          onClose={onClick}
          content="Вы действительно хотите выйти?"
        />
      )}
    </header>
  );
}
