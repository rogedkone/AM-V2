import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import { ReactComponent as ThinkSvg } from '../../svg/soft/think.svg';
import { ReactComponent as AttentSvg } from '../../svg/soft/attent.svg';
import { ReactComponent as TolerSvg } from '../../svg/soft/toler.svg';
import Bg from './Bg';

function About() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.about}>
      <Bg />
      <section className={styles[`about-section-${i18next('lang')}`]}>
        <h1 id="about" className={`${styles['about-title']}`}>
          {i18next('about-title')}
        </h1>
        <section className={styles['edu-section']}>
          <h2 className={styles['edu-title']}>
            {i18next('edu-title')}
          </h2>
          <h5 className={`${styles['edu-subtitle']} 📱💻`}>
            {i18next('edu-subtitle')}
          </h5>
          <div className={styles['edu-list']}>
            <h3 className={styles['edu-place']}>
              {i18next('edu-place-one')}
            </h3>
            <h4 className={styles['edu-time']}>
              {i18next('edu-time-one')}
            </h4>

            <h3 className={styles['edu-place']}>
              {i18next('edu-place-two')}
            </h3>
            <h4 className={styles['edu-time']}>
              {i18next('edu-time-two')}
            </h4>
            <h3 className={styles['edu-place']}>
              {i18next('edu-place-three')}
            </h3>
            <h4 className={styles['edu-time']}>
              {i18next('edu-time-three')}
            </h4>
            <h3 className={styles['edu-place']}>
              {i18next('edu-place-four')}
            </h3>
            <h4 className={styles['edu-time']}>
              {i18next('edu-time-four')}
            </h4>
          </div>
        </section>
        <section className={styles['soft-section']}>
          <h2 className={`${styles['soft-title']}`}>
            {i18next('soft-title')}
          </h2>
          <h5 className={`${styles['soft-subtitle']} 📱💻`}>
            {i18next('soft-subtitle')}
          </h5>
          <div className={styles['soft-list']}>
            <h3 className={`${styles.softskill} ${styles['skill-one']}`}>
              {i18next('softskill-one')}
            </h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>
              {i18next('softskill-subtitle-one')}
            </h4>
            <ThinkSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>5/5</h5>
            <h3 className={`${styles.softskill} ${styles['skill-two']}`}>
              {i18next('softskill-two')}
            </h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>
              {i18next('softskill-subtitle-two')}
            </h4>
            <AttentSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>4/5</h5>
            <h3 className={`${styles.softskill} ${styles['skill-three']} ${styles[i18next('softskill-three-class')]}`}>
              <span />
            </h3>
            <h4 className={`${styles['softskill-subtitle']} 📱💻`}>
              {i18next('softskill-subtitle-three')}
            </h4>
            <TolerSvg className="svg" />
            <h5 className={`${styles['softskill-num']} 📱💻`}>5/5</h5>
          </div>
        </section>
      </section>
    </div>
  );
}

export default About;
