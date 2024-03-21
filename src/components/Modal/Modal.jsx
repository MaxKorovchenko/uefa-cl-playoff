import { createPortal } from 'react-dom';
import { Fireworks } from 'fireworks-js';
import { useEffect, useRef } from 'react';

import styles from './Modal.module.css';

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
