import { useState } from 'react';

import cup from 'assets/images/cup.png';

import styles from './Final.module.css';

export const Final = ({ firstFinalist, secondFinalist }) => {
  const [winner, setWinner] = useState('');

  const handleWinner = () => {
    setWinner('orkam pizda');
  };

  return (
    <div className={styles.final}>
      <div className={styles.team} onClick={handleWinner}>
        {firstFinalist && <img src={firstFinalist} alt="logo" />}
      </div>
      <img src={cup} alt="Cup" />
      <div className={styles.team} onClick={handleWinner}>
        {secondFinalist && <img src={secondFinalist} alt="logo" />}
      </div>

      {winner && <p className={styles.message}>YES</p>}
    </div>
  );
};
