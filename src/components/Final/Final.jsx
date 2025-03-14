import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import cup from 'assets/images/cup.png';
import { clubs } from 'assets/db';

import styles from './Final.module.css';

export const Final = ({ firstFinalist, secondFinalist }) => {
  const [winner, setWinner] = useState('');

  const handleWinnerTop = () => {
    const winnerClub = clubs.find(club => club.logo === firstFinalist);
    if (firstFinalist && secondFinalist) {
      setWinner(winnerClub.title);
    }
  };

  const handleWinnerBottom = () => {
    const winnerClub = clubs.find(club => club.logo === secondFinalist);
    if (firstFinalist && secondFinalist) {
      setWinner(winnerClub.title);
    }
  };

  return (
    <div className={styles.final}>
      <div className={styles.firstTopLine}></div>
      <div className={styles.secondTopLine}></div>
      <div className={styles.firstBottomLine}></div>
      <div className={styles.secondBottomLine}></div>

      <div className={styles.team} onClick={handleWinnerTop}>
        {firstFinalist && <img src={firstFinalist} alt="logo" />}
      </div>
      <img src={cup} alt="Cup" />
      <div className={styles.team} onClick={handleWinnerBottom}>
        {secondFinalist && <img src={secondFinalist} alt="logo" />}
      </div>

      {winner && (
        <Modal>
          <p>Champions League Winner </p>
          <p>2025</p>
          {winner}
        </Modal>
      )}
    </div>
  );
};
