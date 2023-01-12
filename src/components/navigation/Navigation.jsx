import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';

function Navigation() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.navigation}>
      <a href="changeME!">{i18next('nav-about')}</a>
      <a href="changeME!">{i18next('nav-skills')}</a>
      <a href="changeME!">{i18next('nav-portfolio')}</a>
      <a href="changeME!">{i18next('nav-contacts')}</a>
    </div>
  );
}

export default Navigation;
