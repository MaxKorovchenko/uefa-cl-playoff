import { clubs } from 'assets/db';

import styles from './QuarterSemi.module.css';
import { useState } from 'react';

export const QuarterSemi = () => {
  const [firstSemiFinalist, setFirstSemiFinalist] = useState(null);
  const [secondSemiFinalist, setSecondSemiFinalist] = useState(null);
  const [thirdSemiFinalist, setThirdSemiFinalist] = useState(null);
  const [fourthSemiFinalist, setFourthSemiFinalist] = useState(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.first}`}>
            <img
              onClick={() => setFirstSemiFinalist(clubs[0].logo)}
              src={clubs[0].logo}
              alt="logo"
            />

            <img
              onClick={() => setFirstSemiFinalist(clubs[1].logo)}
              src={clubs[1].logo}
              alt="logo"
            />
          </div>
          <div className={`${styles.pair} ${styles.first}`}>
            <img
              onClick={() => setSecondSemiFinalist(clubs[2].logo)}
              src={clubs[2].logo}
              alt="logo"
            />

            <img
              onClick={() => setSecondSemiFinalist(clubs[3].logo)}
              src={clubs[3].logo}
              alt="logo"
            />
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div>
            {firstSemiFinalist && <img src={firstSemiFinalist} alt="logo" />}
          </div>
          <div>
            {secondSemiFinalist && <img src={secondSemiFinalist} alt="logo" />}
          </div>
        </div>
      </div>

      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.second}`}>
            <img
              onClick={() => setThirdSemiFinalist(clubs[4].logo)}
              src={clubs[4].logo}
              alt="logo"
            />

            <img
              onClick={() => setThirdSemiFinalist(clubs[5].logo)}
              src={clubs[5].logo}
              alt="logo"
            />
          </div>
          <div className={`${styles.pair} ${styles.second}`}>
            <img
              onClick={() => setFourthSemiFinalist(clubs[6].logo)}
              src={clubs[6].logo}
              alt="logo"
            />

            <img
              onClick={() => setFourthSemiFinalist(clubs[7].logo)}
              src={clubs[7].logo}
              alt="logo"
            />
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div>
            {thirdSemiFinalist && <img src={thirdSemiFinalist} alt="logo" />}
          </div>
          <div>
            {fourthSemiFinalist && <img src={fourthSemiFinalist} alt="logo" />}
          </div>
        </div>
      </div>
    </div>
  );
};
