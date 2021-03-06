import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from '../../redux/auth/auth-operations';
import s from '../UniversalModal/UniversalModal.module.css';
import { ReactComponent as Close } from '../../static/icons/close.svg';

const modalRoot = document.querySelector('#modal-root');

export default function UniversalModal({ content, onClose }) {
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return window.removeEventListener('keydown', keyDownHandler);
  });
  const keyDownHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.wrapperModal}>
        <Close className={s.iconClose} onClick={onClose} />
        <p className={s.modalTitle}>{content}</p>
        <div>
          <button onClick={onLogOut} className={`${s.btnYes} ${s.btn}`}>
            Yes
          </button>
          <button className={s.btn} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
