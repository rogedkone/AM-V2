import React from 'react';
import styles from './FooterBg.module.css';
import { ReactComponent as Bg } from '../../svg/phone/bg/footer.svg';

function FooterBg() {
  return (
    <div className={styles.bg}>
      <Bg />
    </div>
  );
}

export default FooterBg;
