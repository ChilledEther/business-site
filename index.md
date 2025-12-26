---
layout: page
title: Clifton Cloudworks
subtitle: Offering software delivery and cloud engineering services
js:
  - "/assets/js/tech-background.js"
---

<style>
  :root {
    --page-col: #1d2228;
    --text-col: #ececec;
    --link-col: #326ce5;
    --hover-col: #b7d0f9;
    /* Glassy transparent colors */
    --navbar-col: rgba(29, 34, 40, 0.4);
    --navbar-text-col: #ececec;
    --navbar-border-col: rgba(50, 108, 229, 0.3);
    --footer-col: rgba(29, 34, 40, 0.4);
    --footer-text-col: #ccc;
    --footer-link-col: #326ce5;
  }
  body {
    background-color: transparent !important;
    color: var(--text-col) !important;
  }
  /* Global Layout Overrides for Home */
  html, body {
    height: 100vh;
    overflow: hidden; /* Prevent scrolling */
    width: 100vw;
  }

  /* Glassy Navbar and Footer */
  .navbar-custom, footer {
      background-color: var(--navbar-col) !important; 
      border-color: var(--navbar-border-col) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
  
  /* Footer Fixed at Bottom */
  footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid var(--navbar-border-col) !important;
      margin: 0 !important;
      padding: 15px 0 !important;
      z-index: 100;
  }
  
  /* Ensure Main Content Fills Space and Centers */
  body > main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-bottom: 60px; /* Space for footer */
  }

  /* Hide the default page header that Beautiful Jekyll adds to avoid clutter */
  .intro-header {
      display: none !important;
  }

  /* Centering Wrapper */
  .home-content-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      z-index: 10;
      padding: 0 20px;
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

  .home-content-wrapper p {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 10px 0;
      line-height: 1.6;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  }
</style>

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
