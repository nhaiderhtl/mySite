import React from 'react'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <main className="container">
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App
