import React from 'react';
import styles from './Bg.module.css';
import { ReactComponent as FooterP } from '../../svg/pc/bg/footer.svg';

function Bg() {
  return (
    <div className={styles.bg}>
      <FooterP />
    </div>
  );
}

export default Bg;
