import React from 'react';

const skills = [
  { title: 'Languages', items: ['C++', 'C#', 'Java', 'Python', 'SQL', 'JavaScript'] },
  { title: 'Frameworks', items: ['ASP.NET Core', '.NET MAUI', 'Entity Framework Core', 'React', 'Django'] },
  { title: 'Databases & data', items: ['PostgreSQL', 'SQLite', 'Supabase', 'Relational database design', 'SQL queries', 'ETL workflows'] },
  { title: 'Software development', items: ['REST APIs', 'Object-oriented programming', 'Software architecture', 'Debugging', 'Troubleshooting', 'CRUD operations', 'Git'] },
  { title: 'Tools', items: ['Visual Studio', 'VS Code', 'Jupyter Notebook', 'Linux / Unix'] },
];

function About() {
  return (
    <div className="about-page">
      <header className="projects-header">
        <p className="eyebrow">Get to know me</p>
        <h1>A foundation in code.<br />An eye for detail.</h1>
        <p className="about-introduction">
          I’m Caden Manwiller, a Computer Science student at Florida State University.
          I enjoy solving problems across the frontend and backend, from designing
          REST APIs to modeling relational databases. My work spans learning
          management, AI-powered marketing, and data analytics.
        </p>
      </header>
      <section className="resume-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <article className="resume-card">
          <p className="eyebrow">Expected May 2027</p>
          <h3>Florida State University</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p className="muted">Minor in Mathematics · Tallahassee, FL</p>
        </article>
      </section>
      <section className="resume-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <article className="resume-card">
          <p className="eyebrow">May 2021 – August 2022</p>
          <h3>Digitization Specialist</h3>
          <p>The Crowley Company · Ellicott City, MD</p>
          <ul className="project-highlights">
            <li>Processed and validated large volumes of digital records while maintaining accuracy and consistency.</li>
            <li>Maintained detailed workflow documentation and performed quality assurance checks.</li>
          </ul>
        </article>
      </section>
      <section className="resume-section" aria-labelledby="skills-title">
        <h2 id="skills-title">Technical skills</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="technology-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
