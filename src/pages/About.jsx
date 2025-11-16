import Header from '../components/Header';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        <h1>About the Scratch Club</h1>
        
        <section className="about-section">
          <h2>CS402 Program at UW Madison</h2>
          <p>
            This website is part of the CS402 - Introducing Computer Science to K-12 program 
            at the University of Wisconsin-Madison. The program aims to bring computer science 
            education to K-12 students through engaging and interactive activities.
          </p>
          <div className="links-container">
            <a
              href="https://www.cs.wisc.edu/lead-a-scratch-club-uw-madison-students/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Lead a Scratch Club - UW Madison Students
            </a>
            <a
              href="https://www.cs.wisc.edu/cs402-introducing-computer-science-to-k-12/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              CS402 - Introducing Computer Science to K-12
            </a>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Club</h2>
          <p>
            This Scratch Club is held at the Madison Children's Museum (MCM) every Sunday 
            from 2:30pm to 3:30pm. It's a one-hour session where kids learn to program and 
            create amazing projects using Scratch.
          </p>
        </section>

        <section className="about-section credits-section">
          <h2>Credits</h2>
          <p>
            This website was designed by <strong>Rain Sun</strong> for the Scratch Club 
            sessions. The club is led by Rain Sun, Brendan, and Aleeza.
          </p>
          <p className="club-details">
            <strong>Location:</strong> Madison Children's Museum (MCM)<br />
            <strong>Schedule:</strong> Every Sunday, 2:30pm - 3:30pm<br />
            <strong>Duration:</strong> 1 hour
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;

