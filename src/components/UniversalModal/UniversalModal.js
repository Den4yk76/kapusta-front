import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from '../UniversalModal/UniversalModal.module.css';
import { ReactComponent as Close } from '../../static/icons/close.svg';

const modalRoot = document.querySelector('#modal-root');

export default function UniversalModal({ content }) {
  useEffect(() => {
    window.removeEventListener('keydown', keyDownHandler);
  });
  const keyDownHandler = e => {
    if (e.code === 'Escape') {
      //onClose(); нужно передать в пропсах onClose
    }
  };

  const overlayClickHandler = event => {
    if (event.currentTarget === event.target) {
      //onClose();
    }
  };
  return createPortal(
    <div className={s.overlay} onClick={overlayClickHandler}>
      <div className={s.wrapperModal}>
        <Close className={s.iconClose} />
        <p className={s.modalTitle}>{content}Этот текст прийдет через пропс</p>
        <div>
          <button className={`${s.btnYes} ${s.btn}`}>Yes</button>
          <button className={s.btn}>No</button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
