import React from 'react';
import '../Styles/HomePage.css'
const HomePage = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to My Notes App</h1>
        <p>Your All-in-One Note Taking Solution</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Simple and Intuitive</h2>
          <p>Create and organize notes effortlessly.</p>
        </div>
        <div className="feature">
          <h2>Real-time Timestamps</h2>
          <p>See when your notes were created at a glance.</p>
        </div>
        <div className="feature">
          <h2>Secure Login</h2>
          <p>Protect your notes with a secure login process.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
