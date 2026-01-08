WI PROJECT

## Rendering Strategies Used

- About Page → Static Rendering (SSG)
- Dashboard → Dynamic Rendering (SSR)
- News Page → Hybrid Rendering (ISR)
  Static pages load fast, dynamic pages stay fresh,
  and hybrid pages balance speed and freshness

### Trade-offs

Static rendering offers speed and scalability,
dynamic rendering ensures freshness,
and hybrid rendering provides the best balance for frequently updated content.

This project demonstrates containerizing a Next.js application using Docker with a compatible Node.js version.
The application was built and run in production mode to ensure stability inside the container.
Docker enables consistent behavior across local and cloud environments.
CI/CD concepts were studied using GitHub Actions to automate build and deployment workflows.
The containerized app is cloud-ready and can be deployed on AWS or Azure securely.

# Rendering Demo – Next.js TypeScript Project

## 📌 Project Overview

This project initializes a scalable Next.js application using TypeScript.
It serves as the foundation for future full-stack development with clean
folder organization and best practices.

---

## 📂 Folder Structure

txt
src/
├── app/ # App Router: routes, pages, layouts
├── components/ # Reusable UI components
├── lib/ # Utility functions and configurations


ESLint error → fix it

Pre-commit hook blocking commit