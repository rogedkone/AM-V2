import React from 'react';
import styles from './Title.module.css';
// import { ReactComponent as First } from '../../svg/phone/text/first.svg';

function Title() {
  return (
    <div className={styles.title}>
      <h4 className={styles['main-title']}>NodeJS & Web Developer</h4>
      <div className={styles['first-last']}>
        <h1 className={styles.first}>EGOR</h1>
        <h1 className={styles.last}>DKONE</h1>
      </div>
      <h3 className={styles.desc}>
        I am 24 years old. A fan of rapid application
        development and modern standards for easy writing
        and code support.
      </h3>
      {/* <h3 className="desc 📱">
        I am 24 years old. A fan of rapid application
        development and modern standards for easy writing
        and code support.
      </h3> */}
      {/* <h3 className="desc 🖥️">
        A fan of rapid application development and modern standards for easy writing
        and code support.
      </h3> */}
    </div>
  );
}

export default Title;
