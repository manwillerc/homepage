import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.scss';

function App() {
  return (
    <div className="App" id="2">
      <Header />

      <main className="section-grid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Contact />
    </div>
  );
}

export default App;
