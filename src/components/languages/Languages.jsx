import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Languages.module.css';
import { ReactComponent as OrangeOne } from '../../svg/grades/o1.svg';
import { ReactComponent as OrangeThree } from '../../svg/grades/o3.svg';
import { ReactComponent as WhiteTwo } from '../../svg/grades/w2.svg';

function Languages() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.languages}>
      <h1 className={styles.title}>{i18next('lang-title')}</h1>
      <div className={styles['lang-list']}>
        <OrangeThree />
        <h3 className={styles.lang}>{i18next('lang-rus')}</h3>
        <WhiteTwo />
        <h3 className={styles.lang}>{i18next('lang-eng')}</h3>
        <OrangeOne />
        <h3 className={styles.lang}>{i18next('lang-cz')}</h3>
      </div>
    </div>
  );
}

export default Languages;
