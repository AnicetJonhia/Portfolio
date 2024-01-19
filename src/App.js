import React from 'react';
import './App.css';
import Navbar from './utils/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './utils/Footer';
import Main from './Main';

function App() {
  return (
        <div>
            <Navbar />
            
            <Home />
            <About />
            <Services />
            <Portfolio />
            
            <Contact />
            <Footer />

            <Main /> 
        </div>
  );
}

export default App;
