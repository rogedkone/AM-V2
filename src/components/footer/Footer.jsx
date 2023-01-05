import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Telegram } from '../../svg/social/telegram.svg';
import { ReactComponent as Vk } from '../../svg/social/vk.svg';
import { ReactComponent as Twitter } from '../../svg/social/twitter.svg';
import { ReactComponent as Github } from '../../svg/social/github.svg';
import { ReactComponent as Phone } from '../../svg/social/phone.svg';
import { ReactComponent as Discord } from '../../svg/social/discord.svg';
import { ReactComponent as Email } from '../../svg/social/email.svg';

function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.title}>SOCIAL</h1>
      <div className={styles['soc-list']}>
        <Telegram />
        <Vk />
        <Twitter />
        <Github />
        <Phone />
        <Discord />
        <Email />
      </div>
      <h2 className={styles['end-title']}>Thanks for watching!</h2>
    </div>
  );
}

export default Footer;
