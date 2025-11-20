⚡ TaskFlow - Scalable Task Management System

TaskFlow is a secure, scalable, full-stack MERN application designed to handle task management with robust authentication and role-based access control. Built with a modular MVC architecture, it is engineered for performance, security, and easy scalability.

🚀 Live Demo

Component

Status

URL

Frontend UI

🟢 Live

Click to View App (Vercel)

Backend API

🟢 Live

API Health Check (Render)

(Note: The backend is hosted on a free instance and may take 30-60 seconds to spin up on the first request.)

🔑 Key Features

🔐 Secure Authentication: Stateless JWT (JSON Web Token) authentication with bcryptjs for password hashing.

🛡️ Role-Based Access Control (RBAC):

Users: Can Create, Read, Update, and Delete their own tasks.

Admins: Have elevated privileges to manage all system data.

📝 Full CRUD Operations: Create, Read, Update, and Delete functionality with real-time UI updates.

🏗️ Scalable Architecture:

MVC Pattern: Separation of concerns (Models, Views, Controllers).

Service Layer: Business logic is decoupled from controllers for better maintainability.

🎨 Modern UI: Responsive, dark-themed dashboard built with React + Vite and CSS modules.

☁️ Cloud Native: Database hosted on MongoDB Atlas; Backend on Render; Frontend on Vercel.

🛠️ Tech Stack

Backend

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Atlas) with Mongoose ODM

Security: Helmet, CORS, Dotenv, Joi (Validation)

Auth: JSONWebToken (JWT), Bcryptjs

Frontend

Framework: React.js (Vite)

HTTP Client: Axios (with Interceptors)

Routing: React Router DOM v6

Styling: CSS Modules / Modern CSS3

📂 Scalable Folder Structure

The project follows a strict Model-View-Controller (MVC) pattern to ensure code clarity and scalability.

backend/
├── src/
│   ├── config/         # Database connection & env configuration
│   ├── controllers/    # Request handling logic
│   ├── middlewares/    # Auth checks, Error handling, & Logging
│   ├── models/         # Mongoose database schemas
│   ├── routes/         # API route definitions
│   ├── services/       # Business logic layer
│   ├── utils/          # Helper functions (Token generation, etc.)
│   └── server.js       # Application entry point


🚀 Getting Started Locally

Follow these steps to run the project on your local machine.

Prerequisites

Node.js (v14 or higher)

MongoDB (Local or Atlas Connection String)

Git

1. Clone the Repository

git clone [https://github.com/AnshWithTea/TaskFlow-Scalable-Backend.git](https://github.com/AnshWithTea/TaskFlow-Scalable-Backend.git)
cd TaskFlow-Scalable-Backend


2. Backend Setup

cd backend
npm install


Create a .env file in the backend/ directory:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=assignment
JWT_SECRET=your_super_secret_key_123
NODE_ENV=development


(Note: If your MongoDB password has special characters like @, ensure they are URL encoded, e.g., %40).

Start the Server:

npm run dev


3. Frontend Setup

Open a new terminal window:

cd ../frontend
npm install


Create a .env file in the frontend/ directory:

VITE_API_URL=http://localhost:5000/api


Start the UI:

npm run dev


Access the app at http://localhost:5173.

🧪 API Endpoints

The API is designed to be RESTful. You can test these using Postman or Thunder Client.

Authentication

Method

Endpoint

Description

Access

POST

/api/auth/register

Register a new user

Public

POST

/api/auth/login

Login & receive JWT

Public

Tasks

Method

Endpoint

Description

Access

GET

/api/tasks

Get all tasks for logged-in user

Private 🔒

POST

/api/tasks

Create a new task

Private 🔒

PUT

/api/tasks/:id

Update a task

Private 🔒

DELETE

/api/tasks/:id

Delete a task

Owner/Admin 🔒

📈 Scalability & Performance

This project includes a detailed analysis of how to scale for high-traffic scenarios, including:

Horizontal Scaling: Load balancing across multiple Node.js instances.

Database Optimization: Indexing strategies and Sharding.

Caching: Implementation strategy for Redis to reduce database load.

Microservices: Pathway to decouple the Auth and Task services.

See SCALABILITY.md for the full report.

👤 Author

Ansh Vivek Kature

Role: Backend Developer Intern Candidate

Domain: AI, ML, & Full Stack Development

Portfolio Projects: MedTrack, Pathfinder AI, Multilingual ASR

GitHub: AnshWithTea

Built with ❤️ for the Backend Developer Intern Assignment.
