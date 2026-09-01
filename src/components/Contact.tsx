import React from 'react';

function Contact() {
  return (
    <footer className="contact-section">
      <div className="contact-card">
        <div className="contact-copy">
          <p className="contact-eyebrow">Have a project in mind?</p>
          <h2>Let&rsquo;s build something thoughtful together.</h2>
          <p>
            I&rsquo;m always happy to talk about new projects, creative ideas, or
            opportunities to collaborate.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-button" href="mailto:manwillerc@gmail.com">
            Get in touch <span aria-hidden="true">&rarr;</span>
          </a>
          <a className="contact-link" href="https://github.com/manwillerc" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <p className="contact-footer-note">&copy; {new Date().getFullYear()} Caden Manwiller</p>
    </footer>
  );
}

export default Contact;
