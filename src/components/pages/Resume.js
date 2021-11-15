import React from 'react';

export default function Resume() {
  return (
    <section className="section">
      <header>
        Resume
      </header>
      <div className="content">
        <p>
          Download my <a href="#">resume</a>
        </p>
        <h5>Front-end Proficiencies</h5>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>ReactJS</li>
        </ul>
        <h5>Back-end Proficiencies</h5>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>SQL Server</li>
        </ul>
      </div>
    </section>
  );
}
