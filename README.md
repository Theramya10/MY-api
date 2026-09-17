# 🚀 MY-API — Docker & CI/CD Practice

A production-style Node.js REST API project created to practice **containerization, Git workflows, and Continuous Integration (CI)** using Docker and GitHub Actions.

The project demonstrates how application source code moves from a developer workstation into an automated CI pipeline where the Docker image is validated on every code push.

---

## 🏗️ Architecture

Developer
    │
    │ git push
    ▼
GitHub Repository
    │
    │ push trigger
    ▼
GitHub Actions
    │
    ├── Checkout source code
    │
    └── Docker Build
           │
           ▼
     Docker Image

## 🛠️ Technology Stack

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Node.js        | Application runtime          |
| Express.js     | REST API framework           |
| Docker         | Application containerization |
| Git            | Source code management       |
| GitHub         | Repository hosting           |
| GitHub Actions | Continuous Integration       |


## 📁 Project Structure

ramya-api/
│
├── .github/
│   └── workflows/
│       └── build.yml
│
├── .dockerignore
├── Dockerfile
├── package.json
├── package-lock.json
├── server.js
└── README.md


---

## 🚀 Run Locally

### 1. Clone the repository

git clone https://github.com/Theramya10/MY-api.git
cd MY-api


### 2. Install dependencies

npm ci

### 3. Start the application


node server.js


The application runs on:


http://localhost:8080

## 🐳 Run with Docker

### Build the image


docker build -t ramya-api:v1 .


### Run the container


docker run -d \
  --name ramya-api \
  -p 8080:8080 \
  ramya-api:v1


### Verify the container

docker ps


Test the application:

bash
curl http://localhost:8080


---

## 🔄 Continuous Integration

This repository uses **GitHub Actions** to automatically validate the Docker build whenever code is pushed to GitHub.

Workflow:

*
git push
   ↓
GitHub Actions
   ↓
Checkout source code
   ↓
Docker Build
   ↓
Build successful / failed


Workflow file:


.github/workflows/build.yml


The pipeline currently focuses on CI validation.

It does not push the image to a container registry or deploy the application.

---

## 🔐 Containerization Approach

The Docker image follows basic container security and optimization practices:

* Uses an official lightweight Node.js Alpine image.
* Uses a dedicated application working directory.
* Uses `npm ci` for reproducible dependency installation.
* Uses `.dockerignore` to avoid unnecessary files in the build context.
* Runs the application as the non-root `node` user.
* Keeps application startup defined through Docker `CMD`.

---

## 🧪 CI Validation

Every push to the repository triggers the workflow:

yaml
on:
  push:


The GitHub-hosted Ubuntu runner executes:

bash
docker build -t ramya-api:${{ github.sha }} .


A successful workflow confirms that the application can be packaged into a Docker image.

---

## 📌 Current Scope

### Implemented

* [x] Node.js REST API
* [x] Git repository
* [x] GitHub repository
* [x] Dockerfile
* [x] Docker image build
* [x] Local Docker container execution
* [x] GitHub Actions CI
* [x] Automated Docker build validation

### Planned

* [ ] Push Docker image to Azure Container Registry
* [ ] Image tagging strategy
* [ ] Container vulnerability scanning
* [ ] Automated deployment to Azure
* [ ] Environment-specific configuration
* [ ] Health checks
* [ ] CI/CD approval workflow
* [ ] Production deployment

---

## 🎯 DevOps Learning Objectives

This project is designed to demonstrate practical understanding of:

* Source Code Management
* Git branching and commits
* Docker image creation
* Container lifecycle management
* CI pipeline design
* GitHub Actions
* Build validation
* Container security fundamentals
* CI/CD evolution from build → registry → deployment

---

## 👨‍💻 Author

**Theramya10**

DevOps / Cloud Engineering Practice Project

> Building practical DevOps skills through hands-on infrastructure, containerization, automation, and CI/CD workflows.


<p align="center">
  <a href="https://www.facebook.com/theramya10">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"/>
  </a>
  <a href="https://www.linkedin.com/in/theramya10">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://www.instagram.com/theramya10">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/>
  </a>
  <a href="https://x.com/theramya10">
    <img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/>
  </a>
</p>