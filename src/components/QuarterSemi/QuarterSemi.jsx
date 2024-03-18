import { clubs } from 'assets/db';

import styles from './QuarterSemi.module.css';
import { useRef, useState } from 'react';

export const QuarterSemi = ({ setFirstFinalist, setSecondFinalist }) => {
  const [firstSemiFinalist, setFirstSemiFinalist] = useState(null);
  const [secondSemiFinalist, setSecondSemiFinalist] = useState(null);
  const [thirdSemiFinalist, setThirdSemiFinalist] = useState(null);
  const [fourthSemiFinalist, setFourthSemiFinalist] = useState(null);

  const firstQuarterFinalist = useRef();
  const secondQuarterFinalist = useRef();
  const thirdQuarterFinalist = useRef();
  const fourthQuarterFinalist = useRef();
  const fifthQuarterFinalist = useRef();
  const sixthQuarterFinalist = useRef();
  const seventhQuarterFinalist = useRef();
  const eighthQuarterFinalist = useRef();
  const firstSemiFinalistRef = useRef();
  const secondSemiFinalistRef = useRef();
  const thirdSemiFinalistRef = useRef();
  const fourthSemiFinalistRef = useRef();

  const handleFirstFinalistTop = () => {
    if (firstSemiFinalist && secondSemiFinalist) {
      secondSemiFinalistRef.current.style.filter = 'brightness(0.2)';
      firstSemiFinalistRef.current.style.filter = 'brightness(1)';
      setFirstFinalist(firstSemiFinalist);
    }
  };

  const handleFirstFinalistBottom = () => {
    if (firstSemiFinalist && secondSemiFinalist) {
      firstSemiFinalistRef.current.style.filter = 'brightness(0.2)';
      secondSemiFinalistRef.current.style.filter = 'brightness(1)';
      setFirstFinalist(secondSemiFinalist);
    }
  };

  const handleSecondFinalistTop = () => {
    if (thirdSemiFinalist && fourthSemiFinalist) {
      fourthSemiFinalistRef.current.style.filter = 'brightness(0.2)';
      thirdSemiFinalistRef.current.style.filter = 'brightness(1)';
      setSecondFinalist(thirdSemiFinalist);
    }
  };

  const handleSecondFinalistBottom = () => {
    if (thirdSemiFinalist && fourthSemiFinalist) {
      thirdSemiFinalistRef.current.style.filter = 'brightness(0.2)';
      fourthSemiFinalistRef.current.style.filter = 'brightness(1)';
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
                onClick={() => {
                  secondQuarterFinalist.current.style.filter =
                    'brightness(0.2)';
                  firstQuarterFinalist.current.style.filter = 'brightness(1)';
                  setFirstSemiFinalist(clubs[0].logo);
                }}
                src={clubs[0].logo}
                alt="logo"
                ref={firstQuarterFinalist}
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => {
                  firstQuarterFinalist.current.style.filter = 'brightness(0.2)';
                  secondQuarterFinalist.current.style.filter = 'brightness(1)';
                  setFirstSemiFinalist(clubs[1].logo);
                }}
                src={clubs[1].logo}
                alt="logo"
                ref={secondQuarterFinalist}
              />
            </div>
          </div>
          <div className={`${styles.pair} ${styles.first}`}>
            <div className={styles.team}>
              <img
                onClick={() => {
                  fourthQuarterFinalist.current.style.filter =
                    'brightness(0.2)';
                  thirdQuarterFinalist.current.style.filter = 'brightness(1)';
                  setSecondSemiFinalist(clubs[2].logo);
                }}
                src={clubs[2].logo}
                alt="logo"
                ref={thirdQuarterFinalist}
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => {
                  thirdQuarterFinalist.current.style.filter = 'brightness(0.2)';
                  fourthQuarterFinalist.current.style.filter = 'brightness(1)';
                  setSecondSemiFinalist(clubs[3].logo);
                }}
                src={clubs[3].logo}
                alt="logo"
                ref={fourthQuarterFinalist}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div className={styles.team} onClick={handleFirstFinalistTop}>
            {firstSemiFinalist && (
              <img
                src={firstSemiFinalist}
                alt="logo"
                ref={firstSemiFinalistRef}
              />
            )}
          </div>
          <div className={styles.team} onClick={handleFirstFinalistBottom}>
            {secondSemiFinalist && (
              <img
                src={secondSemiFinalist}
                alt="logo"
                ref={secondSemiFinalistRef}
              />
            )}
          </div>
        </div>
      </div>

      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.second}`}>
            <div className={styles.team}>
              <img
                onClick={() => {
                  sixthQuarterFinalist.current.style.filter = 'brightness(0.2)';
                  fifthQuarterFinalist.current.style.filter = 'brightness(1)';
                  setThirdSemiFinalist(clubs[4].logo);
                }}
                src={clubs[4].logo}
                alt="logo"
                ref={fifthQuarterFinalist}
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => {
                  fifthQuarterFinalist.current.style.filter = 'brightness(0.2)';
                  sixthQuarterFinalist.current.style.filter = 'brightness(1)';
                  setThirdSemiFinalist(clubs[5].logo);
                }}
                src={clubs[5].logo}
                alt="logo"
                ref={sixthQuarterFinalist}
              />
            </div>
          </div>
          <div className={`${styles.pair} ${styles.second}`}>
            <div className={styles.team}>
              <img
                onClick={() => {
                  eighthQuarterFinalist.current.style.filter =
                    'brightness(0.2)';
                  seventhQuarterFinalist.current.style.filter = 'brightness(1)';
                  setFourthSemiFinalist(clubs[6].logo);
                }}
                src={clubs[6].logo}
                alt="logo"
                ref={seventhQuarterFinalist}
              />
            </div>

            <div className={styles.team}>
              <img
                onClick={() => {
                  seventhQuarterFinalist.current.style.filter =
                    'brightness(0.2)';
                  eighthQuarterFinalist.current.style.filter = 'brightness(1)';
                  setFourthSemiFinalist(clubs[7].logo);
                }}
                src={clubs[7].logo}
                alt="logo"
                ref={eighthQuarterFinalist}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div className={styles.team} onClick={handleSecondFinalistTop}>
            {thirdSemiFinalist && (
              <img
                src={thirdSemiFinalist}
                alt="logo"
                ref={thirdSemiFinalistRef}
              />
            )}
          </div>
          <div className={styles.team} onClick={handleSecondFinalistBottom}>
            {fourthSemiFinalist && (
              <img
                src={fourthSemiFinalist}
                alt="logo"
                ref={fourthSemiFinalistRef}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
