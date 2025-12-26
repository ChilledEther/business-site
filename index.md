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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  }

  /* Glassy Navbar and Footer - Slim & Modern */
  .navbar-custom {
      background-color: var(--navbar-col) !important; 
      border-bottom: 1px solid var(--navbar-border-col) !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      padding: 10px 20px !important; /* Slimmer padding */
  }
  
  .navbar-custom .navbar-brand {
      font-size: 1.1rem !important;
      letter-spacing: 1px;
      font-weight: 600;
      text-transform: uppercase;
  }
  
  .navbar-custom .nav-link {
      font-size: 0.85rem !important;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-weight: 500;
  }

  /* Footer Fixed at Bottom - Minimal */
  footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--footer-col) !important;
      border-top: none !important;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      margin: 0 !important;
      padding: 10px 0 !important; /* Reduced padding */
      z-index: 100;
      font-size: 0.75rem !important; /* Smaller text */
  }
  
  /* Target the bootstrap column inside the footer to layout contents horizontally */
  footer .container .row > div {
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
      flex-direction: row-reverse !important; /* Icons on right, Text on left */
      width: 100% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
      margin: 0 !important; /* Override bootstrap offsets */
  }
  
  /* Remove default margins from lists and paragraphs in footer */
  footer ul.list-inline {
      margin: 0 !important;
      padding: 0 !important;
  }
  
  footer p {
      margin: 0 !important;
  }
  
  /* Scale down the social icons */
  footer .fa-stack {
      width: 1.5em !important;
      height: 1.5em !important;
      line-height: 1.5em !important;
      font-size: 1.1rem !important; /* Adjusted size */
  }
  
  footer .fa-stack-2x {
      font-size: 1.5em !important; /* Adjust circle size relative to stack */
  }
  
  footer .fa-stack-1x {
      font-size: 0.8em !important; /* Adjust icon size relative to stack */
  }

  /* Ensure Main Content Fills Space and Centers */
  body > main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-bottom: 50px; /* Space for footer */
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
