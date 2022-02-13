import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { logOut } from '../../redux/auth/auth-operations';
import s from '../UniversalModal/UniversalModal.module.css';
import { ReactComponent as Close } from '../../static/icons/close.svg';

const modalRoot = document.querySelector('#modal-root');

export default function UniversalModal({ content }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);

  const onClose = () => {
    setShowModal(false);
  };

  /* const openModal = content => () => {
    setOpenModal(true);
  }; */

  useEffect(() => {
    window.removeEventListener('keydown', keyDownHandler);
  });
  const keyDownHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    showModal && (
      <div className={s.overlay} onClick={overlayClickHandler}>
        <div className={s.wrapperModal}>
          <Close className={s.iconClose} />
          <p className={s.modalTitle}>
            {content}Этот текст прийдет через пропс
          </p>
          <div>
            <button
              onClick={() => dispatch(logOut())}
              className={`${s.btnYes} ${s.btn}`}
            >
              Yes
            </button>
            <button className={s.btn}>No</button>
          </div>
        </div>
      </div>
    ),
    modalRoot,
  );
}
