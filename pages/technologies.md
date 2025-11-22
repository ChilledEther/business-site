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

GitHub is the largest developer platform, and for good reason. They are one of the few developer platforms that are fully onboarding AI and integrating it into many parts of their system when AI is rapidly growing.

A majority of open source projects are hosted on GitHub, making it easy for you to navigate and collaborate, read code, and use as context for AI.

They also cater to all kinds of developers, enabling the next generation of developers to leverage their tools.

# 🏭 Kubernetes

When developing new applications, they tend to be created as microservices and contained in containers. These containers are then ran on a platform of some sort. The most popular ones are Kubernetes and Docker. 

Kubernetes is a full orchastration platform for containers. The ecosystem for Kubernetes has grown over the last 10 years and matured a lot. It has become the de facto standard for running AI and ML workflows at scale as well as general applications and components.

It can be leveraged and used for various other things such as infrastructure provisioning, certificate management, and so much more. The list is endless.

# 🏗️ Infrastructure-as-Code

When it comes to infrastructure, it is best to have the infrastructure declared in code. There are a few main ways to do this and quite a few tools out there.

Some of the main tools used are:

* Terraform (Cloud agnostic)
* Pulumi (Cloud agnostic)
* Bicep (Azure only)
* Crossplane, or another operator (Kubernetes - GitOps)

Over the years, I have started to lean more into the Kubernetes GitOps approach for a number of reasons. 
It is easier to create high level abstractions for developers, and put the complex ownership of infrastructure to a dedicated team (as you grow).

Because of GitOps, it means that the code is the source of truth. If it exists in code, it'll provision. When you're done with it, removing it from code means that the infrastructure is destroyed. You do not need additional workflows to provision as a result where the other methods would require this.

# 🤺 GitOps

GitOps simply stands for Git Operations. This means that your code is the source of truth. It is primarily used in the Kubernetes space for Infrastructure and Application provisioning, but the principles can be applied outside of this.

Because git has version control, it makes it very easy for rollbacks, auditing, compliance, and automation.
