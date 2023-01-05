import React from 'react';
import './Title.style.css';
import { ReactComponent as First } from '../../svg/phone/text/first.svg';

function Title() {
  return (
    <div className="title">
      <section>
        <h4 className="main-title">NodeJS & Web Developer</h4>
        <First className="first-mobile 📱" />
        <h1 className="first 🖥️">EGOR DKONE</h1>
        <h3 className="desc 📱">
          I am 24 years old. A fan of rapid application
          development and modern standards for easy writing
          and code support.
        </h3>
        <h3 className="desc 🖥️">
          A fan of rapid application development and modern standards for easy writing
          and code support.
        </h3>
      </section>
    </div>
  );
}

export default Title;
