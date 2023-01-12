import React from 'react';
import styles from './Skills.module.css';
import { ReactComponent as OrangeOne } from '../../svg/grades/o1.svg';
import { ReactComponent as OrangeTwo } from '../../svg/grades/o2.svg';
import { ReactComponent as OrangeThree } from '../../svg/grades/o3.svg';
import { ReactComponent as WhiteOne } from '../../svg/grades/w1.svg';
import { ReactComponent as WhiteTwo } from '../../svg/grades/w2.svg';
// import { ReactComponent as WhiteThree } from '../../svg/grades/w3.svg';

function Skills() {
  return (
    <div className={styles.skills}>
      <h1 className={styles.title}>SKILLS</h1>
      <div className={styles['skills-list']}>
        <span />
        <h2 className={`${styles.subtitle}`}>ЗНАНИЯ</h2>
        <h3 className={styles.skill}>JS & Node.js</h3>
        <OrangeThree />
        <h3 className={styles.skill}>Typescript</h3>
        <WhiteOne />
        <h3 className={styles.skill}>Python</h3>
        <OrangeThree />
        <h3 className={styles.skill}>Figma</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>React</h3>
        <OrangeThree />
        <h3 className={styles.skill}>Redux</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>StyledComp</h3>
        <OrangeThree />
        <h3 className={styles.skill}>TailWind</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>PostCSS</h3>
        <OrangeTwo />
        <h3 className={styles.skill}>Bootstrap</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>GitFlow</h3>
        <OrangeTwo />
        <h3 className={styles.skill}>CI/CD</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>Unix</h3>
        <OrangeTwo />
        <h3 className={styles.skill}>Docker</h3>
        <WhiteOne />
        <h3 className={styles.skill}>Webpack</h3>
        <OrangeTwo />
        <h3 className={styles.skill}>SQL</h3>
        <WhiteTwo />
        <h3 className={styles.skill}>NoSQL</h3>
        <OrangeOne />
        <h3 className={styles.skill}>REST</h3>
        <WhiteTwo />
      </div>
    </div>
  );
}

export default Skills;
