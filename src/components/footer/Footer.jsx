import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';
import { ReactComponent as Telegram } from '../../svg/social/telegram.svg';
import { ReactComponent as Vk } from '../../svg/social/vk.svg';
import { ReactComponent as Twitter } from '../../svg/social/twitter.svg';
import { ReactComponent as Github } from '../../svg/social/github.svg';
import { ReactComponent as Phone } from '../../svg/social/phone.svg';
import { ReactComponent as Discord } from '../../svg/social/discord.svg';
import { ReactComponent as Email } from '../../svg/social/email.svg';
import Bg from './Bg';

function Footer() {
  const [i18next] = useTranslation('translation');
  return (
    <div className={styles.footer}>
      <Bg />
      <section className={styles['social-section']}>
        <h1 className={styles.title}>{i18next('soc-title')}</h1>
        <div className={styles['soc-list']}>
          <Telegram />
          <Vk />
          <Twitter />
          <Github />
          <Phone />
          <Discord />
          <Email />
        </div>
        <h2 className={styles['soc-end']}>{i18next('soc-end')}</h2>
      </section>
    </div>
  );
}

export default Footer;
