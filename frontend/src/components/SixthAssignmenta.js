import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './SixthAssignmenta.css';
const Home = () => {
  return (
    <div className="page-container">
      <h2>Home Page</h2>
      <p>Welcome to our application! This is the home page.</p>
      <p>Use the navigation menu to explore different sections of the app.</p>
    </div>
  );
};

const Register = () => {
  return (
    <div className="page-container">
      <h2>Register</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm password" />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

const Login = () => {
  return (
    <div className="page-container">
      <h2>Login</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

const Technologies = () => {
  const techList = [
    { id: 1, name: "React", description: "A JavaScript library for building user interfaces" },
    { id: 2, name: "Node.js", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
    { id: 3, name: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js" },
    { id: 4, name: "MongoDB", description: "Document-based, distributed database" }
  ];

  return (
    <div className="page-container">
      <h2>Technologies</h2>
      <div className="tech-list">
        {techList.map(tech => (
          <div key={tech.id} className="tech-card">
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="page-container not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="link-home">Go to Home</Link>
    </div>
  );
};

const SixthAssignmenta = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>React Router Demo</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/technologies">Technologies</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 React Router Demo. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default SixthAssignmenta;