import { useState } from 'react';

import { QuarterSemi } from 'components/QuarterSemi/QuarterSemi';
import { Final } from 'components/Final/Final';

import styles from './Bracket.module.css';

export const Bracket = () => {
  const [firstFinalist, setFirstFinalist] = useState(null);
  const [secondFinalist, setSecondFinalist] = useState(null);

  return (
    <>
      <h1 className={styles.title}>UEFA Champions League Playoff 2024</h1>
      <div className={styles.container}>
        <QuarterSemi
          setFirstFinalist={setFirstFinalist}
          setSecondFinalist={setSecondFinalist}
        />

        {/* <Final firstFinalist={firstFinalist} secondFinalist={secondFinalist} /> */}
      </div>
    </>
  );
};
