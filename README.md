# 🚀 Portfolio Server

A robust, production-ready backend server designed to power a dynamic, modern personal portfolio.

## 📌 Overview

The **Portfolio Server** acts as the core API for managing dynamic content on a developer portfolio. It eliminates the need for hardcoded data by providing complete CRUD capabilities for projects, blog posts, skills, and tools. Additionally, it features a contact module to securely receive messages directly from the frontend.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB & Mongoose
- **Validation:** Zod
- **Code Quality:** ESLint & Prettier
- **Other:** CORS, dotenv, http-status-codes

## ⚙️ Features

- **Full CRUD Capabilities:** Manage Projects, Blogs, Skills, and Tools dynamically.
- **Message Handling:** Receive and store contact form submissions securely.
- **Modular Architecture:** Clean code structure separating routes, controllers, services, and validations.
- **Data Validation:** Strict schema validation using Zod to ensure data integrity before hitting the database.
- **Global Error Handling:** Centralized error management for consistent and predictable API responses.
- **Type Safety:** Built entirely with TypeScript for a robust developer experience.

## 🧩 API Endpoints

The API is prefixed with `/api/p4`.

### 📂 Projects
- `POST /api/p4/projects/create-project` - Create a new project
- `GET /api/p4/projects/` - Get all projects
- `GET /api/p4/projects/:id` - Get a specific project
- `PUT /api/p4/projects/:id` - Update a project
- `DELETE /api/p4/projects/:id` - Delete a project

### 📂 Blogs
- `POST /api/p4/blogs/create-blog` - Create a new blog post
- `GET /api/p4/blogs/` - Get all blog posts
- `GET /api/p4/blogs/:id` - Get a specific blog post
- `PUT /api/p4/blogs/:id` - Update a blog post
- `DELETE /api/p4/blogs/:id` - Delete a blog post

### 📂 Skills & Tools
- `GET /api/p4/skills/` - Retrieve all skills
- `GET /api/p4/tools/` - Retrieve all tools
- *(Includes full CRUD endpoints for both modules following the same pattern as above)*

### ✉️ Contact Messages
- `POST /api/p4/sendMessage` - Submit a new contact message
- `GET /api/p4/` - Retrieve all received messages

## 🔐 Authentication & Authorization

This is currently designed as a public-facing data API to serve portfolio content. Administrative endpoints are intended to be integrated with an authentication layer (like JWT or sessions) in future iterations to restrict create/update/delete actions to the portfolio owner.

## 📂 Project Structure

```text
src/
├── app/
│   ├── config/          # Environment variables & configurations
│   ├── interface/       # Global TypeScript interfaces
│   ├── middlewires/     # Custom middlewares (e.g., Global Error Handler, Validation)
│   ├── modules/         # Feature modules (Blog, Project, Skill, Tool, SendMeAMessage)
│   │   └── [Module]/    # Each contains: .route.ts, .controller.ts, .service.ts, .validation.ts, .interface.ts, .model.ts
│   └── utils/           # Utility functions
├── app.ts               # Express app setup & route aggregation
└── server.ts            # Server entry point & database connection
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-link>
   cd portfolio-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

### Run the Project

Start the development server with hot-reloading:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 📦 Deployment

This project can be easily deployed to platforms like Vercel, Render, or Railway. It includes a `vercel.json` configuration file out of the box for seamless Vercel deployment.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the code, please open an issue or submit a pull request with your suggested changes.

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Rasel**
- GitHub: [rasel754](https://github.com/rasel754)
