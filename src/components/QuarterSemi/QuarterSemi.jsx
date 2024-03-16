import { clubs } from 'assets/db';

import styles from './QuarterSemi.module.css';

export const QuarterSemi = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.first}`}>
            <div>{clubs[0].title}</div>
            <div>{clubs[1].title}</div>
          </div>
          <div className={`${styles.pair} ${styles.first}`}>
            <div>{clubs[2].title}</div>
            <div>{clubs[3].title}</div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={styles.half}>
        <div className={styles.quarter}>
          <div className={`${styles.pair} ${styles.second}`}>
            <div>{clubs[4].title}</div>
            <div>{clubs[5].title}</div>
          </div>
          <div className={`${styles.pair} ${styles.second}`}>
            <div>{clubs[6].title}</div>
            <div>{clubs[7].title}</div>
          </div>
        </div>

        <div className={`${styles.pair} ${styles.third}`}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
