import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  return createPortal(
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
};
