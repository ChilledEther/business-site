---
layout: base
title: Clifton Cloudworks
subtitle: Offering software delivery and cloud engineering services
share-description: Clifton Cloudworks is a Bristol-based consultancy specializing in Cloud Engineering, Kubernetes, and GitOps. We help startups and SMEs build scalable, cloud-native software delivery platforms.
js:
  - "/assets/js/tech-background.js"
---

<style>
<style>
  /* Home Page Specific Overrides */
  /* We need transparency to see the canvas background */
  body {
    background-color: transparent !important;
    overflow: hidden !important; /* Prevent scrolling on splash page */
  }

  /* Centering wrapper specific to home content */
  .home-content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      z-index: 10;
      
      /* Glassmorphism Card Style */
      background: rgba(29, 34, 40, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(50, 108, 229, 0.3);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      
      padding: 50px 40px;
      max-width: 900px;
      width: 90%;
      height: auto; /* Fit content */
  }
  
  .home-content-wrapper h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
      color: #fff;
      text-shadow: 0 0 10px rgba(50, 108, 229, 0.8);
      font-weight: 700;
  }
  
  .home-content-wrapper h2 {
      font-size: 1.25rem;
      margin-bottom: 1.5rem;
      color: #b7d0f9;
      font-weight: 300;
      text-transform: uppercase;
      letter-spacing: 2px;
  }

  /* Force main to take full height for centering, but respect navbar padding */
  main {
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 100%;
  }

  .home-content-wrapper p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 10px 0;
      line-height: 1.6;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  }

  /* CTA Buttons */
  .cta-container {
      display: flex;
      gap: 20px;
      margin-top: 30px;
      flex-wrap: wrap;
      justify-content: center;
  }

  .btn-glass {
      padding: 12px 24px;
      background: rgba(50, 108, 229, 0.2);
      border: 1px solid rgba(50, 108, 229, 0.5);
      border-radius: 5px;
      color: #fff;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
  }

  .btn-glass:hover {
      background: rgba(50, 108, 229, 0.5);
      box-shadow: 0 0 15px rgba(50, 108, 229, 0.5);
      color: #fff;
      transform: translateY(-2px);
      text-decoration: none;
  }
</style>

<main>
  <div class="home-content-wrapper">
    <h1>Clifton Cloudworks</h1>
    <h2>Software Delivery & Cloud Engineering</h2>
    
    <p>
      Based in <strong>Bristol, UK</strong>, we help startups and SMEs accelerate their product delivery.
      We specialize in building scalable, <strong>Cloud-Native</strong> platforms using <strong>Kubernetes</strong>, <strong>GitOps</strong>, and <strong>AI-driven</strong> workflows.
    </p>
    <p>
      Whether you need to modernize your infrastructure or scale your team's capabilities, we provide tailored consultancy to meet your unique needs.
    </p>
    
    <div class="cta-container">
      <a href="/services/" class="btn-glass">Our Services</a>
      <a href="/technologies/" class="btn-glass">Our Tech Stack</a>
      <a href="/aboutme/" class="btn-glass">Contact Us</a>
    </div>
  </div>
</main>
