import React from 'react';
import styles from './About.module.css';
import { ReactComponent as ThinkSvg } from '../../svg/soft/think.svg';
import { ReactComponent as AttentSvg } from '../../svg/soft/attent.svg';
import { ReactComponent as TolerSvg } from '../../svg/soft/toler.svg';

function About() {
  return (
    <div className={styles.about}>

      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles['section-edu']}>
        <h2 className={styles.subtitle}>Education</h2>
        <h5 className={`${styles['edu-subtitle']} 📱`}>CLASSIC & COURSES</h5>

        <div className={styles['edu-list']}>
          <h3 className={styles.place}>MSPE Computer Science</h3>
          <h4 className={styles.time}>2013 - 2016</h4>

          <h3 className={styles.place}>Python Biology Math</h3>
          <h4 className={styles.time}>May - August 2021</h4>

          <h3 className={styles.place}>JavaScript SelfEdu</h3>
          <h4 className={styles.time}>September - Apryl 2021</h4>

          <h3 className={styles.place}>Hexlet WebDeveloper</h3>
          <h4 className={styles.time}>May - October 2022</h4>
        </div>
      </div>

      <div className={styles['section-soft']}>
        <h2 className={`${styles.subtitle} text-right`}>SOFT SKILLS</h2>
        <h5 className={`${styles['soft-subtitle']} 📱`}>THE BEST OF ME</h5>
        <div className={styles['soft-list']}>
          <h3 className={styles.softskill}>Thinking</h3>
          <h4 className={styles['softskill-subtitle']}>Problem Solving</h4>
          <ThinkSvg className="mt-2" />
          <h5 className={styles['softskill-num']}>5/5</h5>
          <h3 className={styles.softskill}>Attention</h3>
          <h4 className={styles['softskill-subtitle']}>Details Matter</h4>
          <AttentSvg />
          <h5 className={styles['softskill-num']}>4/5</h5>
          <h3 className={styles.softskill}>Stress Tolerance</h3>
          <h4 className={styles['softskill-subtitle']}>Stay Calm</h4>
          <TolerSvg className="mt-2" />
          <h5 className={styles['softskill-num']}>5/5</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
