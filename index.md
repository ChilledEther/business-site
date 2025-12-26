---
layout: base
title: Clifton Cloudworks
subtitle: Offering software delivery and cloud engineering services
js:
  - "/assets/js/tech-background.js"
---

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
      
      padding: 60px 40px;
      max-width: 900px;
      width: 90%;
      height: auto; /* Fit content */
  }
  
  .home-content-wrapper h1 {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
      color: #fff;
      text-shadow: 0 0 10px rgba(50, 108, 229, 0.8);
      font-weight: 700;
  }
  
  .home-content-wrapper h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: #b7d0f9;
      font-weight: 300;
  }

  /* Force main to take full height for centering, but respect navbar padding */
  main {
      display: flex !important;
      align-items: center;
      justify-content: center;
      height: 100%;
  }

  .home-content-wrapper p {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 10px 0;
      line-height: 1.6;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  }
</style>

<main>
  <div class="home-content-wrapper">
    <h1>Clifton Cloudworks</h1>
    <h2>Software Delivery & Cloud Engineering</h2>
    
    <p>
      Based in Bristol, UK, we help startups and small businesses deliver software products quickly and reliably using modern cloud-native technologies and best practices.
    </p>
    <p>
      Whether you're just starting out or looking to scale, we provide tailored solutions to meet your unique needs.
    </p>
  </div>
</main>
