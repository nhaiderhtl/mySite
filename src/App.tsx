import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-background text-text-primary font-sans">
      <Header />
      <main className="container mx-auto px-4">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App
