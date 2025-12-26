---
layout: page
title: Technologies
permalink: /technologies/
share-description: Our curated tech stack includes Kubernetes, GitHub, Azure, AWS, Terraform, and GitOps tools. We build on modern, CNCF-certified foundations.
---

<style>
  .tech-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 40px auto;
    font-size: 1.1rem;
    color: #ececec;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }

  /* Glass Card - Reusing generic style but ensuring it's defined for this page context */
  .glass-card {
    background: rgba(29, 34, 40, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(50, 108, 229, 0.3);
    border-radius: 12px;
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
  }

  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(50, 108, 229, 0.6);
  }

  .glass-card h3 {
    color: #326ce5;
    margin-top: 0;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .glass-card p {
    font-size: 0.95rem;
    color: #cecece;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: auto; /* Push to bottom */
  }

  .tech-tag {
    background: rgba(50, 108, 229, 0.15);
    border: 1px solid rgba(50, 108, 229, 0.3);
    color: #fff;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }
</style>

<div class="tech-intro">
  <p>
    We bet on <strong>proven, improved, and open</strong> technologies. By aligning with the Cloud Native Computing Foundation (CNCF) landscape and industry giants, we ensure your platform is future-proof, portable, and supported by a massive community.
  </p>
</div>

<div class="tech-grid">

  <!-- CSP -->
  <div class="glass-card">
    <h3><i class="fas fa-server"></i> Cloud Providers</h3>
    <p>
      We build cloud-agnostic solutions primarily, but have deep specialized experience in the major hyperscalers. While Azure is our primary stronghold, our Terraform and K8s expertise translates seamlessly across providers.
    </p>
    <div class="tech-tags">
      <span class="tech-tag">Microsoft Azure</span>
      <span class="tech-tag">AWS</span>
      <span class="tech-tag">Google Cloud</span>
    </div>
  </div>

  <!-- GitHub -->
  <div class="glass-card">
    <h3><i class="fab fa-github"></i> GitHub Ecosystem</h3>
    <p>
      More than just source control. GitHub is the center of our gravity for collaboration, CI/CD, and security. We leverage the full platform to enable high-velocity engineering teams.
    </p>
    <div class="tech-tags">
      <span class="tech-tag">GitHub Actions</span>
      <span class="tech-tag">GitHub Advanced Security</span>
      <span class="tech-tag">Copilot</span>
      <span class="tech-tag">Codespaces</span>
    </div>
  </div>

  <!-- Kubernetes -->
  <div class="glass-card">
    <h3><i class="fas fa-cubes"></i> Kubernetes (K8s)</h3>
    <p>
      The operating system of the cloud. We use K8s not just for running containers, but as a unified control plane for managing infrastructure, certificates, and scaling requirements.
    </p>
    <div class="tech-tags">
      <span class="tech-tag">AKS / EKS / GKE</span>
      <span class="tech-tag">Helm</span>
      <span class="tech-tag">Docker</span>
      <span class="tech-tag">Cert-Manager</span>
    </div>
  </div>

  <!-- IaC -->
  <div class="glass-card">
    <h3><i class="fas fa-code"></i> Infrastructure as Code</h3>
    <p>
      If it's not in code, it doesn't exist. We enforce strict IaC practices to eliminate drift, enable disaster recovery, and allow rapid environment cloning.
    </p>
    <div class="tech-tags">
      <span class="tech-tag">Terraform</span>
      <span class="tech-tag">OpenTofu</span>
      <span class="tech-tag">Pulumi</span>
      <span class="tech-tag">Bicep</span>
    </div>
  </div>

  <!-- GitOps -->
  <div class="glass-card">
    <h3><i class="fas fa-sync-alt"></i> GitOps</h3>
    <p>
      Continuous Deployment done right. We move beyond CI scripts and use Kubernetes-native operators to reconcile reliance, ensuring your production state always matches git.
    </p>
    <div class="tech-tags">
      <span class="tech-tag">ArgoCD</span>
      <span class="tech-tag">Flux</span>
      <span class="tech-tag">Crossplane</span>
    </div>
  </div>

</div>

<div style="text-align: center; margin-top: 50px; opacity: 0.8;">
  <p><small><em>Don't see your specific tech? We prioritize principles over tools. If it's modern and cloud-native, we can likely work with it.</em></small></p>
</div>
