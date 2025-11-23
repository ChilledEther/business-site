---
layout: page
title: Technologies
permalink: /technologies/
---

# ☁️ Cloud Service Provider (CSP)

The largest CSPs are:

* Amazon Web Services (AWS)
* Microsoft Azure
* Google Cloud Platform (GCP)

I have primarily worked with Azure and have a majority of experience there. I am happy to work with any large CSP though.

# 🤖 GitHub

GitHub is a developer platform primarily used for Git, CI/CD workflows (sometimes known as pipelines), and Agentic Artificial Intelligence (AI) baked in.

Having worked with various git providers and CI/CD tools throughout the years, I now only specialise in GitHub or migrations to GitHub.

GitHub is the largest developer platform, and for good reason. They are one of the few developer platforms that are fully onboarding AI and integrating it into many parts of their system as AI rapidly expands.

A majority of open source projects are hosted on GitHub, making it easy for you to navigate and collaborate, read code, and use as context for AI.

They also cater to all kinds of developers, enabling the next generation of developers to leverage their tools with a good social media presence.

# 🏭 Kubernetes

When developing new applications, they tend to be packaged up as microservices and housed in containers. These containers are then ran on a platform. The most popular platforms are Kubernetes and Docker.

Kubernetes is a full orchastration platform for containers. The ecosystem for Kubernetes has matured over the last 10 years and has become the de facto standard for running AI/ML workflows, and applications at scale.

It can be leveraged and used for various other things such as infrastructure provisioning, certificate management, and so much more. The possibilities are extensive.

# 🏗️ Infrastructure-as-Code

When it comes to infrastructure, it is best to have the infrastructure declared in code. The main reason for this is so you can ensure that any time infrastructure is provisioned, it'll be exactly what is in code. It becomes a nightmare when manual changes are made that drift away from what is being declared.

There are a few tools out there that can help with this.

Some of the main tools are:

* [Terraform](https://developer.hashicorp.com/terraform)
* [Pulumi](https://www.pulumi.com/)
* [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep) (Azure only)
* [Crossplane](https://www.crossplane.io/), or another operator (Kubernetes - GitOps)

Over the years, I have started to lean more into the Kubernetes GitOps approach for a number of reasons.

* It is easier to create high level abstractions for developers
* It puts the complex ownership of infrastructure to a dedicated team (as you grow)
* It doesn't require any additional workflows to provision
* It sits closer with the source code that's using it

# 🤺 GitOps

GitOps simply stands for Git Operations. This means that your code is the source of truth. It is primarily known in the Kubernetes space for infrastructure and application provisioning, but the principles can be applied outside of this.

Because [git](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git) itself has version control, it makes it very easy for rollbacks, auditing, compliance, and automation.

With a strong foundation, you will be able to rapidly develop and deploy your application at ease. This makes scaling your application very easy.

The tech world is slowly moving towards an intent driven way of dealing with infrastructure, making AI + GitOps the modern approach with kubernetes being the core engine for the platform.
