import React from 'react';
import '../../styles/About.css';
import '../../styles/Section.css';

export default function About() {
  return (
    <section className="section">
      <header>
        About Me
      </header>
      <div className="content">
        <div className="profile-photo" ></div>
        <p>
          Hello, my name is Natalia Post, and I am a New York-based freelance Web Developer. If I am not freelancing at
          some of New
          York’s finest digital agencies, I am working on projects remotely on for clients all over the world. I have a
          diverse set of skills, ranging from design to HTML + CSS + JavaScript.
        </p><br />
        <p>
          Certificate of Completion the Institute For Robotic Process Automation & Artificial Intelligence Completed The
          Next Gen Society: Intro to artificial intelligence.
        </p>
      </div>
    </section>
  );
}
