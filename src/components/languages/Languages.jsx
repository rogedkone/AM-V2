import React from 'react';
import styles from './Languages.module.css';
import { ReactComponent as OrangeOne } from '../../svg/grades/o1.svg';
import { ReactComponent as OrangeThree } from '../../svg/grades/o3.svg';
import { ReactComponent as WhiteTwo } from '../../svg/grades/w2.svg';

function Languages() {
  return (
    <div className={styles.languages}>
      <h1 className={styles.title}>LANGUAGES</h1>
      <div className={styles['lang-list']}>
        <OrangeThree />
        <h3 className={styles.lang}>Russian</h3>
        <WhiteTwo />
        <h3 className={styles.lang}>English</h3>
        <OrangeOne />
        <h3 className={styles.lang}>Czech</h3>
      </div>
    </div>
  );
}

export default Languages;
