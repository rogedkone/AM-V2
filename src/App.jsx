import React from 'react';
import styles from './App.module.css';
import Navigation from './components/navigation/Navigation';
import Title from './components/title/Title';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Languages from './components/languages/Languages';
import Footer from './components/footer/Footer';
// import Figures from './components/figures/Figures';

function App() {
  return (
    <div className={styles.app}>
      {/* <Figures /> */}
      <Navigation />
      <Title />
      <About />
      <Skills />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
