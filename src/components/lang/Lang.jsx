import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Lang.module.css';
import { ReactComponent as EngSvg } from '../../svg/lang/eng.svg';
import { ReactComponent as RusSvg } from '../../svg/lang/rus.svg';

function Lang() {
  const { i18n } = useTranslation();
  return (
    <div className={styles.lang}>
      <button type="button" onClick={() => i18n.changeLanguage('en')}>
        <EngSvg />
      </button>
      <button type="button" onClick={() => i18n.changeLanguage('ru')}>
        <RusSvg />
      </button>
    </div>
  );
}

export default Lang;
