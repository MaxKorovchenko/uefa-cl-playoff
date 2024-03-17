import cup from 'assets/images/cup.png';

import styles from './Final.module.css';

export const Final = () => {
  return (
    <div className={styles.final}>
      <div>first finalist</div>
      <img src={cup} alt="Cup" />
      <div>second finalist</div>
    </div>
  );
};
