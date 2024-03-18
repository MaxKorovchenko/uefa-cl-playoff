import { createPortal } from 'react-dom';
import { Fireworks } from 'fireworks-js';

import styles from './Modal.module.css';
import { useEffect, useRef } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const containerRef = useRef();

  useEffect(() => {
    const fireworks = new Fireworks(containerRef.current);
    fireworks.start();
  }, []);

  return createPortal(
    <div className={styles.backdrop} ref={containerRef}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
};
