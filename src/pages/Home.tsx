import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Developer · Data storyteller · Problem solver</p>
        <h1>Turning complex ideas into clear digital experiences.</h1>
        <p className="hero-copy">
          I’m Caden, a developer interested in data visualization, thoughtful
          design, and building useful experiences for the web.
        </p>
      </section>

      <section className="card-grid" aria-label="Highlights">
        <article className="content-card">
          <span className="card-number">01</span>
          <h2>Experience</h2>
          <p>Building practical projects with code, data, and a focus on the people using them.</p>
        </article>
        <article className="content-card">
          <span className="card-number">02</span>
          <h2>Interests</h2>
          <p>Data visualization, front-end development, design systems, and creative technology.</p>
        </article>
        <article className="content-card">
          <span className="card-number">03</span>
          <h2>Currently</h2>
          <p>Learning new tools, refining my craft, and creating work that makes information easier to understand.</p>
        </article>
      </section>
    </div>
  );
}

export default Home;

