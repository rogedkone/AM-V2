import React from 'react';
import './Bg.style.css';
import { ReactComponent as AboutM } from '../../svg/phone/bg/about.svg';
import { ReactComponent as AboutP } from '../../svg/pc/bg/about.svg';

function Bg() {
  return (
    <div className="bg">
      <AboutM className="📱" />
      <AboutP className="🖥️" />
    </div>
  );
}

export default Bg;
