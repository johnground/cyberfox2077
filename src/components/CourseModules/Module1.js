import { h } from 'preact';
import '/styles/styles.css'; // Make sure this path is correct for your project

const Module1 = () => {
  return (
    <div className="module-container">
      <header>
        <h1 className="module-title">Module 1: Introduction to Version Control for Cybersecurity</h1>
      </header>
      
      <div className="content">
        <section className="content-section">
          <h2>Version Control: What Every Cybersecurity Professional Should Know</h2>
          <p>Welcome to Module 1 of our course on Version Control for Cybersecurity Professionals. 
          In this module, we'll explore the fundamental concepts of version control and understand 
          its crucial role in cybersecurity practices.</p>
        </section>

        <section className="content-section">
          <h2>Why Version Control Matters</h2>
          <p>Version control is not just for developers; it's a valuable tool for cybersecurity 
          experts too. We'll discuss how version control helps you track changes in security 
          policies, configurations, and incident response procedures. Learn how it enhances 
          collaboration among security teams.</p>
        </section>

        <section className="content-section">
          <h2>Getting Started with Git</h2>
          <p>If you're new to Git, don't worry! We'll introduce you to this popular version control 
          system. Git's simplicity and power make it a perfect fit for managing security-related 
          code, scripts, and configurations.</p>
        </section>

        <section className="content-section">
          <h2>Installing GitLab with Docker</h2>
          <p>Now, let's explore how to set up a GitLab instance using Docker. GitLab provides a 
          comprehensive platform for managing your security projects, including code repositories, 
          issue tracking, and continuous integration.</p>
        </section>

        {/* Additional content sections would go here */}

        <footer className="module-footer">
          {/* Navigation buttons would go here */}
        </footer>
      </div>
    </div>
  );
};

export default Module1;
