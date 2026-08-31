import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <nav className="page-navigation" aria-label="Main navigation">
        <button type="button" onClick={() => navigate('/')}>Home</button>
        <button type="button" onClick={() => navigate('/projects')}>Projects</button>
        <button type="button" onClick={() => navigate('/about')}>About</button>
      </nav>
    </header>
  );
}

export default Header;
