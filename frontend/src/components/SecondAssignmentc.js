import React from "react";
import "./SecondAssignmentc.css"; 

export default function SecondAssignmentc() {
  const projects = [
    {
      id: 1,
      title: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      subtitle: "News App using ReactJS (Parsing XML to JSON)",
      description: "Photo by Christina Morillo from PexelsLive Demo:",
      image: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg",
      author: "Mehul Kothari",
      date: "Aug 12, 2020 04:32",
    },
    {
      id: 2,
      title: "Medium Like Blogging App Using Angular 9 and Firebase",
      subtitle: "Creating a Medium-Like Blog App Using Angular 9 and Firebase",
      description: "Photo by Miguel Á. Padriñán from PexelsLive Demo:",
      image: "https://images.pexels.com/photos/3621344/pexels-photo-3621344.jpeg",
      author: "Mehul Kothari",
      date: "Jul 10, 2020 10:59",
    },
    {
      id: 3,
      title: "COVID 19 Tracker (Statistics) app Using Angular",
      subtitle: "COVID 19 Tracker (Statistics) app Using Angular Dark Mode",
      description: "DemoIntroduction: Everyone is aware",
      image: "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg",
      author: "Mehul Kothari",
      date: "Apr 04, 2020 08:46",
    },
  ];

  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.width = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="logo-container">
          <div className="logo">N</div>
          <nav className="main-nav">
            <ul>
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about-author">About Author</a></li>
              <li><a href="#about-project">About this Project</a></li>
            </ul>
          </nav>
        </div>
        <div className="social-icons">
          <a href="#github"><i className="fab fa-github"></i></a>
          <a href="#medium"><i className="fab fa-medium"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
      </header>
      <main className="profiles-container">
        <div className="profiles-grid">
          {projects.map((project) => (
            <div key={project.id} className="profile-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-avatar">
                <img src="https://via.placeholder.com/40" alt="Author avatar" />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <p className="description">{project.description}</p>
                <div className="card-footer">
                  <div className="author">
                    <i className="fas fa-user"></i> {project.author}
                  </div>
                  <div className="date">
                    <i className="far fa-calendar"></i> {project.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <p>This portfolio showcases various development projects using technologies like ReactJS, Angular, and Firebase.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: mehul@example.com</p>
            <p>LinkedIn: linkedin.com/in/mehulkothari</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#resume">Resume</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Mehul Kothari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}