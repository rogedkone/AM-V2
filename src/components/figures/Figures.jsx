import React from 'react';
import { ReactComponent as NavTriangle } from '../../svg/phone/figures/nav/triangle.svg';
import { ReactComponent as NavCircle } from '../../svg/phone/figures/nav/circle.svg';
import { ReactComponent as TitleSquare } from '../../svg/phone/figures/title/square.svg';
import './Figures.style.css';
// import titleSquare from '../../svg/figures/title/square.svg';
// import aboutCircle from '../../svg/figures/about/circle.svg';
// import aboutSquare from '../../svg/figures/about/square.svg';
// import softTriangle from '../../svg/figures/soft/triangle.svg';
// import softSquare from '../../svg/figures/soft/square.svg';

export default function Figures() {
  return (
    <div className="figures">
      <NavCircle className="nav-circle 📱" />
      <NavTriangle className="nav-triangle 📱" />
      <TitleSquare className="title-square 📱" />

    </div>
  );
}
/* nav-triangle */
