import React from 'react';
import styles from './App.module.css';
import Navigation from './components/navigation/Navigation';
import Title from './components/title/Title';
// import AboutBg from './components/about/Bg';
import About from './components/about/About';
// import Skills from './components/skills/Skills';
// import Languages from './components/languages/Languages';
// import Footer from './components/footer/Footer';
// import FooterBg from './components/footer/FooterBg';
// import Figures from './components/figures/Figures';

function App() {
  return (
    <div className={styles.app}>
      {/* <div className="📱">
        Phone
      </div>
      <div className="💻">
        Tablet
      </div>
      <div className="🖥️">
        PC
      </div> */}
      {/* <Figures /> */}
      <Navigation />
      <Title />
      <About />
      {/* <AboutBg /> */}
      {/* <Skills />
      <Languages />
      <Footer />
      <FooterBg /> */}

      {/* TODO: Navigation */}
    </div>
  );
}

export default App;
