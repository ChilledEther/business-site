---
layout: page
title: Services
permalink: /services/
share-description: tailored software delivery, cloud engineering, and platform building services for Startups and SMEs. Specializing in Kubernetes, GitOps, and GitHub.
---

<style>
  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px auto;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ececec;
  }

  /* Grid Layout */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 50px;
  }

  /* Glass Card */
  .glass-card {
    background: rgba(29, 34, 40, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(50, 108, 229, 0.3);
    border-radius: 12px;
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(50, 108, 229, 0.6);
  }

  .glass-card h3 {
    color: #326ce5; /* K8s blue */
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .glass-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .glass-card li {
    margin-bottom: 10px;
    padding-left: 20px;
    position: relative;
    color: #ccc;
  }

  .glass-card li::before {
    content: "▹";
    color: #326ce5;
    position: absolute;
    left: 0;
  }

  /* Audience Section */
  .audience-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    .audience-wrapper {
      grid-template-columns: 1fr;
    }
  }

  /* Pricing Section */
  .pricing-banner {
    background: linear-gradient(135deg, rgba(50, 108, 229, 0.1) 0%, rgba(29, 34, 40, 0.8) 100%);
    border: 1px solid #326ce5;
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    margin-top: 40px;
  }

  .price-tag {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin: 10px 0;
  }

  .cta-button {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 30px;
      background: #326ce5;
      color: #fff !important;
      border-radius: 5px;
      text-decoration: none;
      font-weight: 600;
      transition: background 0.2s;
  }
  .cta-button:hover {
      background: #2656c0;
      text-decoration: none;
  }
</style>

<div class="services-intro">
  <p>
    Navigate the complex cloud landscape with confidence. We specialize in taking ideas from <strong>source code to production</strong> using modern, scalable, and secure methodologies. Whether you are building your first MVP or scaling an enterprise platform, we provide the expertise to get you there.
  </p>
</div>

<div class="services-grid">
  <div class="glass-card">
    <h3><i class="fas fa-cloud"></i> Cloud Engineering</h3>
    <p>Comprehensive cloud-native solutions designed for scale and reliability.</p>
    <ul>
      <li><strong>Kubernetes</strong> Platform Design</li>
      <li>Infrastructure as Code (Terraform, Pulumi)</li>
      <li>Cloud Architecture (AWS, Azure, GCP)</li>
      <li>Serverless & Microservices</li>
    </ul>
  </div>

  <div class="glass-card">
    <h3><i class="fas fa-code-branch"></i> Platform Engineering</h3>
    <p>Empower your developers with robust tooling and automated workflows.</p>
    <ul>
      <li><strong>GitOps</strong> Implementation (ArgoCD, Flux)</li>
      <li>CI/CD Pipelines (GitHub Actions)</li>
      <li>Internal Developer Platforms (IDP)</li>
      <li>Automated Testing & Quality Gates</li>
    </ul>
  </div>

  <div class="glass-card">
    <h3><i class="fas fa-robot"></i> AI & Automation</h3>
    <p>Leverage the latest in AI to streamline operations and enhance products.</p>
    <ul>
      <li><strong>Agentic AI</strong> Workflows</li>
      <li>LLM Ops & Deployment</li>
      <li>Business Process Automation</li>
      <li>Infrastructure Self-Healing</li>
    </ul>
  </div>

  <div class="glass-card">
    <h3><i class="fas fa-exchange-alt"></i> Migrations</h3>
    <p>Modernize your legacy stack with zero downtime strategies.</p>
    <ul>
      <li>Git Provider Migrations (to GitHub)</li>
      <li>Monolith to Microservices</li>
      <li>On-Premise to Cloud</li>
      <li>Workflow Optimization</li>
    </ul>
  </div>
</div>

<h2 class="text-center mb-4">Who We Help</h2>

<div class="audience-wrapper">
  <div class="glass-card">
    <h3>👶 Entrepreneurs & Startups</h3>
    <p>
      Launching a product is hard. We act as your <strong>Fractional CTO / Lead Engineer</strong> to ensure your technology stack is built correctly from day one.
    </p>
    <ul>
      <li>Cost-effective MVP architectures</li>
      <li>Scalable foundations for growth</li>
      <li>Full ownership of code and IP</li>
      <li>Mentorship and technical guidance</li>
    </ul>
  </div>

  <div class="glass-card">
    <h3>🏤 SMEs & Scale-ups</h3>
    <p>
      Overcome technical debt and deployment bottlenecks. We help you streamline your engineering processes and adopt modern DevOps practices.
    </p>
    <ul>
      <li>Infrastructure Audits & Optimization</li>
      <li>Team capability upskilling</li>
      <li>Standardizing deployment reliability</li>
      <li>Breaking down silos</li>
    </ul>
  </div>
</div>

<div class="pricing-banner glassy-card">
  <h2>Transparent Pricing</h2>
  <p>Expert consultancy with no hidden fees.</p>
  <div class="price-tag">£200 <span style="font-size: 1rem; opacity: 0.7;">/ hour (VAT Excl.)</span></div>
  <p>Flexible engagement models available: Retainer, Project-based, or Ad-hoc.</p>
  
  <a href="mailto:hello@cliftoncloudworks.co.uk?subject=Consultancy%20Enquiry" class="cta-button">
    <i class="fas fa-paper-plane"></i> Book a Consultation
  </a>
</div>
