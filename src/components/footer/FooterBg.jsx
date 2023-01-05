import React from 'react';
import styles from './FooterBg.module.css';
import { ReactComponent as BgMobile } from '../../svg/phone/bg/footer.svg';
import { ReactComponent as BgPc } from '../../svg/pc/bg/footer.svg';

function FooterBg() {
  return (
    <div className={styles.bg}>
      <BgMobile className="📱" />
      <BgPc className="🖥️" />
    </div>
  );
}

export default FooterBg;
