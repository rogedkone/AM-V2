import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Title.module.css';

function Title() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.title}>
      <h4 className={styles['main-title']}>{i18next('title-title')}</h4>
      <div className={styles['first-last']}>
        <h1 className={styles.first}>{i18next('title-first')}</h1>
        <h1 className={styles.last}>{i18next('title-last')}</h1>
      </div>
      <h3 className={styles.desc}>
        {i18next('title-desc')}
      </h3>
    </div>
  );
}

export default Title;
