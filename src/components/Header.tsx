import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="App-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="Caden Manwiller home">
          <span className="brand-mark">CM</span>
          <span>Caden Manwiller</span>
        </NavLink>
        <nav className="page-navigation" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;

