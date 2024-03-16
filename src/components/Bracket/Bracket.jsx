import { QuarterSemi } from 'components/QuarterSemi/QuarterSemi';
import styles from './Bracket.module.css';
import { Final } from 'components/Final/Final';

export const Bracket = () => {
  return (
    <div className={styles.container}>
      <QuarterSemi />

      <Final />
    </div>
  );
};
