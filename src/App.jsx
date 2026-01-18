import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-white font-display overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Register />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;