import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />

      <main className="section-grid" id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<section className="page-panel"><p className="eyebrow">404</p><h1>Page not found</h1><p className="page-introduction">Let’s get you back to the portfolio.</p><Link className="text-link" to="/">Return home →</Link></section>} />
        </Routes>
      </main>
      <Contact />
    </div>
  );
}

export default App;
