import { Quarterfinals } from 'components/Quarterfinals/Quarterfinals';
import styles from './Bracket.module.css';

export const Bracket = () => {
  return (
    <div className={styles.container}>
      <Quarterfinals />
    </div>
  );
};
