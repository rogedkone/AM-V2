import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Skills.module.css';
import { ReactComponent as OrangeOne } from '../../svg/grades/o1.svg';
import { ReactComponent as OrangeTwo } from '../../svg/grades/o2.svg';
import { ReactComponent as OrangeThree } from '../../svg/grades/o3.svg';
import { ReactComponent as WhiteOne } from '../../svg/grades/w1.svg';
import { ReactComponent as WhiteTwo } from '../../svg/grades/w2.svg';
// import { ReactComponent as WhiteThree } from '../../svg/grades/w3.svg';

function Skills() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.skills}>
      <h1 id="skills" className={styles.title}>{i18next('skills-title')}</h1>
      <h2 className={`${styles[`subtitle-${i18next('lang')}`]}`}>{i18next('skills-subtitle')}</h2>
      <div className={styles['skills-list']}>
        <div className={`${styles['cell-white']} ${styles.first}`}>
          <h3 className={styles.skill}>JS & NodeJS</h3>
          <OrangeThree />
        </div>
        <div className={`${styles.cell} ${styles.second}`}>
          <h3 className={styles.skill}>TypeScript</h3>
          <WhiteOne />
        </div>
        <div className={styles['cell-white']}>
          <h3 className={styles.skill}>Python</h3>
          <OrangeThree />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>Figma</h3>
          <WhiteTwo />
        </div>
        <div className={styles['cell-white']}>
          <h3 className={styles.skill}>React</h3>
          <OrangeThree />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>Redux</h3>
          <WhiteTwo />
        </div>
        <div className={styles['cell-white']}>
          <h3 className={styles.skill}>StyledCompt</h3>
          <OrangeThree />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>TailWind</h3>
          <WhiteTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>PostCSS</h3>
          <OrangeTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>BootStrap</h3>
          <WhiteTwo />
        </div>
        <div className={styles['cell-white']}>
          <h3 className={styles.skill}>GitFlow</h3>
          <OrangeThree />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>CI/CD</h3>
          <WhiteTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>Unix</h3>
          <OrangeTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>Docker</h3>
          <WhiteOne />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>Webpack</h3>
          <OrangeTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>SQL</h3>
          <WhiteTwo />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>NoSQL</h3>
          <OrangeOne />
        </div>
        <div className={styles.cell}>
          <h3 className={styles.skill}>REST</h3>
          <WhiteTwo />
        </div>
      </div>
    </div>
  );
}

export default Skills;
