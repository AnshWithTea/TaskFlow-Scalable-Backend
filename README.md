# TaskFlow - Scalable Backend 🚀

![Node.js](https://img.shields.io/badge/Node.js-V18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## 📖 Introduction

**TaskFlow-Scalable-Backend** is a high-performance, production-ready RESTful API designed to power the TaskFlow application. Built with a focus on **scalability**, **security**, and **maintainability**, this backend leverages the power of Node.js and MongoDB, enhanced with Redis for caching and Docker for containerization.

It is architected to handle high concurrent loads using Node.js clustering and follows the **Model-View-Controller-Service (MVCS)** pattern to ensure clean code separation and business logic isolation.

---

## ✨ Key Features

### 🔐 **Authentication & Security**
- **JWT Authentication**: Secure stateless authentication using JSON Web Tokens.
- **Role-Based Access Control (RBAC)**: distinct permissions for Users and Admins.
- **Password Hashing**: Bcrypt encryption for user credentials.
- **Rate Limiting**: Protection against Brute-Force and DDoS attacks using `express-rate-limit`.
- **Security Headers**: Implemented via `helmet` to secure HTTP headers.

### ⚡ **Performance & Scalability**
- **Redis Caching**: Implemented caching strategies for frequently accessed data (e.g., task feeds) to reduce database load.
- **Clustering**: Utilizes Node.js built-in cluster module to spawn worker processes across all available CPU cores.
- **Database Indexing**: Optimized MongoDB queries with proper compound indexing.
- **Pagination & Filtering**: API features cursor-based/offset-based pagination for large datasets.

### 🛠 **Core Functionality**
- **Task Management**: Full CRUD operations for tasks with priorities, due dates, and status tracking.
- **Input Validation**: Robust request validation using `Joi` / `Zod` middleware.
- **Centralized Error Handling**: Custom error classes and global error handling middleware.
- **Logging**: Structured logging with `Winston` and HTTP request logging with `Morgan`.

---

## 🏗 Tech Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Node.js (v18+) |
| **Framework** | Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Caching** | Redis |
| **Containerization** | Docker & Docker Compose |
| **Authentication** | JWT (JSON Web Tokens) |
| **Validation** | Joi / Zod |
| **Logging** | Winston, Morgan |
| **Testing** | Jest, Supertest |

---

## 📂 Architecture & Directory Structure

The project follows a modular **MVC + Service** architecture:

```bash
TaskFlow-Scalable-Backend/
├── src/
│   ├── config/         # Database, Redis, and Env configurations
│   ├── controllers/    # Request handlers (Input/Output logic)
│   ├── services/       # Business logic layer (Reusable logic)
│   ├── models/         # Mongoose Schemas (Data Layer)
│   ├── routes/         # API Routes definitions
│   ├── middlewares/    # Auth, Error Handling, Validation
│   ├── utils/          # Helper functions (Logger, Response formatting)
│   └── app.js          # Express App entry point
├── tests/              # Unit and Integration tests
├── .env.example        # Environment variable template
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Container orchestration
├── package.json        # Dependencies
└── README.md           # Documentation
