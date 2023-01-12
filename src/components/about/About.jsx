import React from 'react';
import styles from './About.module.css';
import { ReactComponent as ThinkSvg } from '../../svg/soft/think.svg';
import { ReactComponent as AttentSvg } from '../../svg/soft/attent.svg';
import { ReactComponent as TolerSvg } from '../../svg/soft/toler.svg';
import Bg from './Bg';

function About() {
  return (
    <div className={styles.about}>
      <Bg />
      <section className={styles['about-section']}>
        <h1 className={`${styles['about-title']}`}>ABOUT</h1>
        <section className={styles['edu-section']}>
          <h2 className={styles['edu-title']}>Education</h2>
          <h5 className={`${styles['edu-subtitle']} 📱💻`}>CLASSIC & COURSES</h5>

          <div className={styles['edu-list']}>
            <h3 className={styles['edu-place']}>MSPE Computer Science</h3>
            <h4 className={styles['edu-time']}>2013 - 2016</h4>

            <h3 className={styles['edu-place']}>Python Biology Math</h3>
            <h4 className={styles['edu-time']}>May - August 2021</h4>

            <h3 className={styles['edu-place']}>JavaScript SelfEdu</h3>
            <h4 className={styles['edu-time']}>September - Apryl 2021</h4>

            <h3 className={styles['edu-place']}>Hexlet WebDeveloper</h3>
            <h4 className={styles['edu-time']}>May - October 2022</h4>
          </div>
        </section>
        <section className={styles['soft-section']}>
          <h2 className={`${styles['soft-title']}`}>SOFT SKILLS</h2>
          <h5 className={`${styles['soft-subtitle']} 📱💻`}>THE BEST OF ME</h5>
          <div className={styles['soft-list']}>
            <h3 className={`${styles.softskill} ${styles['skill-one']}`}>Thinking</h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>Problem Solving</h4>
            <ThinkSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>5/5</h5>
            <h3 className={`${styles.softskill} ${styles['skill-two']}`}>Attention</h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>Details Matter</h4>
            <AttentSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>4/5</h5>
            <h3 className={`${styles.softskill} ${styles['skill-three']}`}><span /></h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>Stay Calm</h4>
            <TolerSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>5/5</h5>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
