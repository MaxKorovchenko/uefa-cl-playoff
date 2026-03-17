import { useEffect, useRef, useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import cup from 'assets/images/cup.png';
import { clubs } from 'assets/db';

import styles from './Final.module.css';

export const Final = ({ firstFinalist, secondFinalist }) => {
  const [winner, setWinner] = useState('');
  const [showModal, setShowModal] = useState(false);

  const firstImg = useRef();
  const secondImg = useRef();

  useEffect(() => {
    if (!winner) return;

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [winner]);

  const handleWinnerTop = () => {
    if (!firstFinalist || !secondFinalist) return;

    const winnerClub = clubs.find(club => club.logo === firstFinalist);
    setWinner(winnerClub.title);
    firstImg.current.style.filter = 'brightness(1)';
    secondImg.current.style.filter = 'brightness(0.3)';
  };

  const handleWinnerBottom = () => {
    if (!firstFinalist || !secondFinalist) return;

    const winnerClub = clubs.find(club => club.logo === secondFinalist);
    setWinner(winnerClub.title);
    firstImg.current.style.filter = 'brightness(0.3)';
    secondImg.current.style.filter = 'brightness(1)';
  };

  return (
    <div className={styles.final}>
      <div className={styles.firstTopLine}></div>
      <div className={styles.secondTopLine}></div>
      <div className={styles.firstBottomLine}></div>
      <div className={styles.secondBottomLine}></div>

      <div className={styles.team} onClick={handleWinnerTop}>
        {firstFinalist && <img src={firstFinalist} alt="logo" ref={firstImg} />}
      </div>
      <img src={cup} alt="Cup" />
      <div className={styles.team} onClick={handleWinnerBottom}>
        {secondFinalist && (
          <img src={secondFinalist} alt="logo" ref={secondImg} />
        )}
      </div>

      {showModal && (
        <Modal>
          <p>Champions League Winner </p>
          <p>2026</p>
          {winner}
        </Modal>
      )}
    </div>
  );
};
