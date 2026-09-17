# 🚀 Ramya API — Docker & CI/CD Practice

A production-style Node.js REST API project created to practice **containerization, Git workflows, and Continuous Integration (CI)** using Docker and GitHub Actions.

The project demonstrates how application source code moves from a developer workstation into an automated CI pipeline where the Docker image is validated on every code push.

---

## 🏗️ Architecture

```text
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
```

---

## 🛠️ Technology Stack

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Node.js        | Application runtime          |
| Express.js     | REST API framework           |
| Docker         | Application containerization |
| Git            | Source code management       |
| GitHub         | Repository hosting           |
| GitHub Actions | Continuous Integration       |

---

## 📁 Project Structure

```text
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
```

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/ramya-api.git
cd ramya-api
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the application

```bash
node server.js
```

The application runs on:

```text
http://localhost:8080
```

---

## 🐳 Run with Docker

### Build the image

```bash
docker build -t ramya-api:v1 .
```

### Run the container

```bash
docker run -d \
  --name ramya-api \
  -p 8080:8080 \
  ramya-api:v1
```

### Verify the container

```bash
docker ps
```

Test the application:

```bash
curl http://localhost:8080
```

---

## 🔄 Continuous Integration

This repository uses **GitHub Actions** to automatically validate the Docker build whenever code is pushed to GitHub.

Workflow:

```text
git push
   ↓
GitHub Actions
   ↓
Checkout source code
   ↓
Docker Build
   ↓
Build successful / failed
```

Workflow file:

```text
.github/workflows/build.yml
```

The pipeline currently focuses on **CI validation**.

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

```yaml
on:
  push:
```

The GitHub-hosted Ubuntu runner executes:

```bash
docker build -t ramya-api:${{ github.sha }} .
```

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

**Ramya**

DevOps / Cloud Engineering Practice Project

> Building practical DevOps skills through hands-on infrastructure, containerization, automation, and CI/CD workflows.
