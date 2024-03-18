import { clubs } from 'assets/db';

import styles from './QuarterSemi.module.css';
import { useState } from 'react';

export const QuarterSemi = ({ setFirstFinalist, setSecondFinalist }) => {
  const [firstSemiFinalist, setFirstSemiFinalist] = useState(null);
  const [secondSemiFinalist, setSecondSemiFinalist] = useState(null);
  const [thirdSemiFinalist, setThirdSemiFinalist] = useState(null);
  const [fourthSemiFinalist, setFourthSemiFinalist] = useState(null);

  const handleFirstFinalistTop = () => {
    if (firstSemiFinalist && secondSemiFinalist) {
      setFirstFinalist(firstSemiFinalist);
    }
  };

  const handleFirstFinalistBottom = () => {
    if (firstSemiFinalist && secondSemiFinalist) {
      setFirstFinalist(secondSemiFinalist);
    }
  };

  const handleSecondFinalistTop = () => {
    if (thirdSemiFinalist && fourthSemiFinalist) {
      setSecondFinalist(thirdSemiFinalist);
    }
  };

  const handleSecondFinalistBottom = () => {
    if (thirdSemiFinalist && fourthSemiFinalist) {
      setSecondFinalist(fourthSemiFinalist);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.first}`}>
            <div className={styles.team}>
              <img
                onClick={() => setFirstSemiFinalist(clubs[0].logo)}
                src={clubs[0].logo}
                alt="logo"
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => setFirstSemiFinalist(clubs[1].logo)}
                src={clubs[1].logo}
                alt="logo"
              />
            </div>
          </div>
          <div className={`${styles.pair} ${styles.first}`}>
            <div className={styles.team}>
              <img
                onClick={() => setSecondSemiFinalist(clubs[2].logo)}
                src={clubs[2].logo}
                alt="logo"
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => setSecondSemiFinalist(clubs[3].logo)}
                src={clubs[3].logo}
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div className={styles.team} onClick={handleFirstFinalistTop}>
            {firstSemiFinalist && <img src={firstSemiFinalist} alt="logo" />}
          </div>
          <div className={styles.team} onClick={handleFirstFinalistBottom}>
            {secondSemiFinalist && <img src={secondSemiFinalist} alt="logo" />}
          </div>
        </div>
      </div>

      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.second}`}>
            <div className={styles.team}>
              <img
                onClick={() => setThirdSemiFinalist(clubs[4].logo)}
                src={clubs[4].logo}
                alt="logo"
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => setThirdSemiFinalist(clubs[5].logo)}
                src={clubs[5].logo}
                alt="logo"
              />
            </div>
          </div>
          <div className={`${styles.pair} ${styles.second}`}>
            <div className={styles.team}>
              <img
                onClick={() => setFourthSemiFinalist(clubs[6].logo)}
                src={clubs[6].logo}
                alt="logo"
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => setFourthSemiFinalist(clubs[7].logo)}
                src={clubs[7].logo}
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div className={styles.team} onClick={handleSecondFinalistTop}>
            {thirdSemiFinalist && <img src={thirdSemiFinalist} alt="logo" />}
          </div>
          <div className={styles.team} onClick={handleSecondFinalistBottom}>
            {fourthSemiFinalist && <img src={fourthSemiFinalist} alt="logo" />}
          </div>
        </div>
      </div>
    </div>
  );
};
