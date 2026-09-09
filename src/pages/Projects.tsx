import React from 'react';

const projects = [
  {
    number: '01',
    title: 'Learning Management System',
    summary: 'A full-stack platform for managing users, courses, modules, assignments, and submissions.',
    technologies: ['.NET MAUI', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL'],
    highlights: [
      'Designed relational data models and CRUD workflows exposed through RESTful API endpoints.',
      'Built an MVVM application architecture and resolved relationship, foreign-key, migration, and data-retrieval issues.',
    ],
  },
  {
    number: '02',
    title: 'AI Marketing Agent Platform',
    summary: 'A full-stack marketing platform for organizing products, campaigns, and AI-generated content.',
    technologies: ['React', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL'],
    highlights: [
      'Designed REST API endpoints and relational database structures for core marketing workflows.',
      'Integrated external APIs and backend services to support AI-powered content generation while maintaining data integrity.',
    ],
  },
  {
    number: '03',
    title: 'Netflix Data Analytics Web Application',
    summary: 'A web application that analyzes and visualizes viewing behavior to surface meaningful user trends.',
    technologies: ['Django', 'Python', 'SQL', 'PostgreSQL', 'Pandas'],
    highlights: [
      'Built database models with Django ORM and created data-processing workflows with Pandas.',
      'Developed SQL queries and analytics dashboards to identify behavioral patterns and insights.',
    ],
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-header">
        <p className="eyebrow">Selected work</p>
        <h1>Projects</h1>
        <p className="page-introduction">
          Full-stack applications built around thoughtful architecture,
          reliable data, and useful experiences.
        </p>
      </header>

      <section className="project-list" aria-label="Software projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-heading">
              <span className="project-number" aria-hidden="true">{project.number}</span>
              <div>
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>
              </div>
            </div>
            <ul className="technology-list" aria-label="Technologies used">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Projects;
