import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Caden Manwiller · Software Developer · Tallahassee, FL</p>
        <h1>Thoughtful software.<br />From interface to database.</h1>
        <p className="hero-copy">
          I’m a Computer Science student at Florida State University building
          full-stack applications with React, ASP.NET Core, and Django. I enjoy
          connecting useful interfaces with reliable APIs and well-designed data.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/projects">Explore my projects <span aria-hidden="true">↗</span></Link>
          <a className="button button-secondary" href={`${process.env.PUBLIC_URL}/CadenManwillerSoftwareEngineer.pdf`} download>Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="card-grid" aria-label="Highlights">
        <article className="content-card">
          <span className="card-number">01 / BUILD</span>
          <h2>Full-stack development</h2>
          <p>Learning management tools, AI-powered marketing workflows, and analytics dashboards, built with connected frontends, REST APIs, and relational databases.</p>
          <Link className="text-link" to="/projects">See selected work <span aria-hidden="true">→</span></Link>
        </article>
        <article className="content-card">
          <span className="card-number">02 / PRACTICE</span>
          <h2>Care in the details</h2>
          <p>Experience in digitization and quality assurance informs how I approach data accuracy, documentation, debugging, and dependable software.</p>
          <Link className="text-link" to="/about">More about my background <span aria-hidden="true">→</span></Link>
        </article>
        <article className="content-card">
          <span className="card-number">03 / LEARN</span>
          <h2>Computer science at FSU</h2>
          <p>Pursuing a Bachelor of Science in Computer Science with a minor in Mathematics. Expected graduation: May 2027.</p>
          <span className="card-detail">Tallahassee, Florida</span>
        </article>
      </section>
    </div>
  );
}

export default Home;
