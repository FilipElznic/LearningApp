<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LearningApp Docs</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="background-stars"></div>

  <nav class="navbar">
    <div class="logo">LearningApp</div>
  </nav>

  <main class="container">
    <section class="hero">
      <div class="hero-icon">
        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V5H19V19Z" />
        </svg>
      </div>
      <h1>Project Documentation</h1>
      <p>Complete setup guide for the Cosmic Learning App. Follow these steps to get your space academy up and running!</p>
    </section>

    <section class="card">
      <h2><span class="icon-circle yellow">!</span>Prerequisites</h2>
      <div class="prerequisites">
        <div class="prereq">
          <div class="prereq-icon green"></div>
          <h3>Node.js</h3>
          <p>Version 18+ required for running the development server</p>
        </div>
        <div class="prereq">
          <div class="prereq-icon blue"></div>
          <h3>Git</h3>
          <p>For cloning the repository and version control</p>
        </div>
        <div class="prereq">
          <div class="prereq-icon purple"></div>
          <h3>Code Editor</h3>
          <p>VS Code recommended with React extensions</p>
        </div>
      </div>
    </section>

    <section class="card">
      <h2><span class="icon-circle">1</span> Supabase Database Setup</h2>
      <p>This project requires a Supabase database to handle user authentication, store learning progress, track XP points, and manage task completion.</p>
      <ol>
        <li>Go to <a href="https://supabase.com">supabase.com</a> and create a free account</li>
        <li>Create a new project and choose a region close to your users</li>
        <li>Copy your project URL and anon key from Settings → API</li>
        <li>Insert the database schema:</li>
      </ol>
      <img src="assets/database.webp" alt="Database Schema" class="schema-img" />
    </section>

    <section class="card">
      <h2><span class="icon-circle">2</span> Clone & Install</h2>
      <p>Run the following in terminal:</p>
      <pre><code>git clone https://github.com/FilipElznic/LearningApp.git

cd LearningApp
npm install</code></pre>
</section>

    <section class="card">
      <h2><span class="icon-circle">3</span> Environment Setup</h2>
      <p>Create a <code>.env</code> file in the root:</p>
      <pre><code>VITE_SUPABASE_URL=your_supabase_url

VITE_SUPABASE_ANON_KEY=your_anon_key</code></pre>
<p><strong>Warning:</strong> Never commit `.env` to GitHub!</p>
</section>

    <section class="card">
      <h2><span class="icon-circle">4</span> Launch</h2>
      <p>Start development server:</p>
      <pre><code>npm run dev</code></pre>
      <p>Build for production:</p>
      <pre><code>npm run build</code></pre>
    </section>

  </main>

  <script>
    // Create starfield
    const stars = document.querySelector(".background-stars");
    for (let i = 0; i < 30; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      stars.appendChild(star);
    }
  </script>
</body>
</html>
