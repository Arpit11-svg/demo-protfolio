import React from 'react';
import './App.css';
import profile from './assets/1_profilePhoto.jpeg'; // 👈 import image

const App = () => {
  return (
    <div className="container">

      {/* Header */}
      <header className="header">

        {/* Profile Image */}
        <div className="profile-container">
          <img src={profile} alt="profile" className="profile-img" />
        </div>

        <h1 className="title">Arpit Choudhary</h1>
        <p className="subtitle">
          Aspiring Software Engineer | Java | Spring Boot | React
        </p>
      </header>

      {/* About */}
      <section className="section">
        <h2>👨‍💻 About Me</h2>
        <p>
          I am a passionate developer currently learning Full Stack Development.
          I enjoy building real-world applications using Java, Spring Boot, and React.
          I am also exploring Machine Learning and Data Structures.
        </p>
      </section>

      {/* Personal Info */}
      <section className="section">
        <h2>📌 Personal Details</h2>
        <p><strong>Age:</strong> 19</p>
        <p><strong>City:</strong> Delhi</p>
        <p><strong>Education:</strong> B.Tech (Computer Science)</p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>🚀 Skills</h2>
        <ul>
          <li>Java (Core + Advanced)</li>
          <li>Spring Boot</li>
          <li>React.js</li>
          <li>Data Structures & Algorithms</li>
          <li>SQL / MySQL</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>📂 Projects</h2>
        <ul>
          <li>
            <strong>Food Delivery Website</strong> – Personalized food recommendation system
          </li>
          <li>
            <strong>E-commerce Backend</strong> – Built using Spring Boot with REST APIs
          </li>
        </ul>
      </section>

      {/* Contact */}

      <section className="section">
  <h2>📞 Contact</h2>

  <p>Email: arpit@example.com</p>

  <div className="btn-container">
    <a 
      href="https://github.com/Arpit11-svg" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn github"
    >
      GitHub
    </a>

    <a 
      href="https://www.linkedin.com/in/arpit-choudhary-092706328/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn linkedin"
    >
      LinkedIn
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Arpit Choudhary</p>
      </footer>

    </div>
  );
};

export default App;