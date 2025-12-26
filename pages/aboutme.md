---
layout: page
title: About Me
permalink: /aboutme/
share-description: Meet Jarred, the founder of Clifton Cloudworks. A passionate Cloud Engineer helping businesses scale with automation and honesty.
---

<style>
  .about-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .profile-header {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 50px;
  }

  .profile-text {
    flex: 1;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #ececec;
  }
  
  .profile-text strong {
      color: #326ce5;
  }

  /* Glass Section - Reusing style for consistency */
  .glass-section {
    background: rgba(29, 34, 40, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(50, 108, 229, 0.3);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 40px;
  }

  .glass-section h2 {
    color: #326ce5;
    margin-top: 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  .experience-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
  }

  .experience-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 15px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      color: #ccc;
  }
  
  .experience-item i {
      color: #326ce5;
  }

  .contact-cta {
    text-align: center;
    padding: 50px;
    background: linear-gradient(135deg, rgba(50, 108, 229, 0.15) 0%, rgba(29, 34, 40, 0.9) 100%);
    border: 1px solid #326ce5;
    border-radius: 12px;
  }

  .contact-cta h2 {
      margin-top: 0;
  }

  .btn-primary-glass {
      display: inline-block;
      margin-top: 20px;
      padding: 15px 40px;
      background: #326ce5;
      color: white !important;
      border-radius: 30px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(50, 108, 229, 0.4);
  }

  .btn-primary-glass:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(50, 108, 229, 0.6);
      text-decoration: none;
      background: #2656c0;
  }

  @media (max-width: 768px) {
    .profile-header {
      flex-direction: column;
      text-align: center;
    }
  }
</style>

<div class="about-container">

  <div class="profile-header">
    <!-- Optional: Add an image here if uploaded later -->
    <!-- <img src="/assets/img/jarred.jpg" style="width: 150px; border-radius: 50%; border: 3px solid #326ce5;"> -->
    <div class="profile-text">
        <p>
            👋 Hey, I'm <strong>Jarred</strong>. I'm a Cloud Engineer and Consultant engaging with businesses to solve complex delivery problems.
        </p>
        <p>
            I believe in <strong>transparency, automation, and simplicity</strong>. My goal isn't just to build infrastructure; it's to empower your team to own it. I bridge the gap between "it works on my machine" and "it creates value in production".
        </p>
    </div>
  </div>

  <div class="glass-section">
    <h2><i class="fas fa-book-open"></i> My Story</h2>
    <p>
        I have spent the last <strong>15+ years</strong> navigating the IT landscape, from traditional on-premise setups to large-scale distributed cloud platforms. I've seen the good, the bad, and the ugly of software delivery.
    </p>
    <p>
        This broad exposure—spanning specialized SaaS providers to global enterprises—has taught me that technology problems are often people and process problems in disguise. I use this experience to steer specialized startups and SMEs away from common pitfalls, ensuring they build a foundation that scales <em>with</em> them, not against them.
    </p>
  </div>

  <div class="glass-section">
    <h2><i class="fas fa-industry"></i> Industry Experience</h2>
    <div class="experience-list">
        <div class="experience-item"><i class="fas fa-gas-pump"></i> Oil & Gas</div>
        <div class="experience-item"><i class="fas fa-chart-line"></i> Finance & Fintech</div>
        <div class="experience-item"><i class="fas fa-database"></i> Data & Analytics</div>
        <div class="experience-item"><i class="fas fa-shopping-cart"></i> Retail & E-commerce</div>
        <div class="experience-item"><i class="fas fa-briefcase"></i> Technical Consultancy</div>
    </div>
  </div>

  <div class="contact-cta">
    <h2>Ready to scale?</h2>
    <p>Let's have a chat about your current challenges. No sales pitch, just honest engineering advice.</p>
    
    <a href="mailto:hello@cliftoncloudworks.co.uk?subject=Let's%20Connect" class="btn-primary-glass">
        <i class="fas fa-envelope"></i> Email Me
    </a>
    
    <p style="margin-top: 20px; font-size: 0.9rem; opacity: 0.7;">
        Prefer chat? Find me on <a href="https://www.linkedin.com/in/thejarredroberts/" target="_blank" style="color: #326ce5;">LinkedIn</a>.
        <br>
        Once we start, we collaborate directly via Slack or Teams.
    </p>
  </div>

</div>
