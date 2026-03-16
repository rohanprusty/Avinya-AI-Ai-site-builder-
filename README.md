# 🚀 Avinya AI – AI Website Builder

<div align="center">

<img src="assets/home-page.png" width="900"/>

### 🧠 Build Complete Websites Using AI

Turn a **simple prompt into a fully functional website in seconds**

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-black?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe)

</div>

---

# ✨ Features

## 🧠 AI Website Generation

Generate **complete websites from simple prompts**

Example prompt:

```
Create a portfolio website for a photographer with dark theme
```

AI automatically generates:

✔ Layout  
✔ Components  
✔ Styling  
✔ Responsive Design  

---

## 💬 Conversational Website Builder

Chat with AI to modify your website.

Example prompts:

```
Make the navbar sticky
Add a pricing section
Change theme to dark mode
```

---

## ⚡ Live Preview Builder

Real-time preview while AI generates code.

Features:

- Instant updates  
- Code editing  
- Component rendering  

---

## 📂 Project Management

Manage multiple AI generated websites.

Features:

- Project history
- Version control
- Rollback to previous version

---

## 🌍 Community Gallery

Users can publish websites publicly.

Browse:

- Portfolio sites
- Startup landing pages
- AI generated designs

---

## 💳 Credit System (Stripe)

AI generation works with a **credit based system**

| Plan | Credits | Price |
|-----|------|------|
| Basic | 100 | $5 |
| Pro | 400 | $19 |
| Enterprise | 1000 | $49 |

Stripe handles:

✔ Payments  
✔ Checkout  
✔ Webhooks  

---

# 📸 Screenshots

## 🏠 Homepage

<img src="assets/home-page.png" width="900"/>

---

## 💰 Pricing Page

<img src="assets/pricing.png" width="900"/>

---

## 🌐 Community Gallery

<img src="assets/community.png" width="900"/>

---

## 📁 Project Dashboard

<img src="assets/my-projects.png" width="900"/>

---

## 🧠 AI Builder

<img src="assets/project-builder.png" width="900"/>

---

# 🏗️ System Architecture

```
User
 │
 │ Prompt
 ▼
Frontend (React + Vite)
 │
 │ API Request
 ▼
Backend (Node.js + Express)
 │
 ├── Authentication (Better Auth)
 │
 ├── AI Generation (OpenRouter API)
 │
 ├── Payments (Stripe)
 │
 ▼
Database (PostgreSQL + Prisma)
```

---

# 🧰 Tech Stack

## 🎨 Frontend

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Axios

---

## ⚙ Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Better Auth
- OpenRouter API

---

## ☁ Infrastructure

- Prisma Migrations
- Stripe Payments
- Environment based configuration

---

# 🚀 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/rohanprusty/Avinya-AI-Ai-site-builder-.git
cd Avinya-AI-Ai-site-builder-
```

---

## 2️⃣ Install Dependencies

### Server

```bash
cd server
npm install
```

### Client

```bash
cd client
npm install
```

---

## 3️⃣ Setup Environment Variables

### server/.env

```
DATABASE_URL=postgresql://username:password@localhost:5432/avinya_ai

OPENROUTER_API_KEY=your_api_key

STRIPE_SECRET_KEY=your_key

STRIPE_WEBHOOK_SECRET=your_webhook

BETTER_AUTH_SECRET=secret

BETTER_AUTH_URL=http://localhost:3000

TRUSTED_ORIGINS=http://localhost:5173
```

---

### client/.env

```
VITE_BASE_URL=http://localhost:3000
```

---

## 4️⃣ Database Setup

```bash
cd server

npx prisma migrate dev
npx prisma generate
```

---

## 5️⃣ Run Application

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd client
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# 📁 Project Structure

```
avinya-ai
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   ├── config
│   │   └── types
│
├── server
│   ├── controller
│   ├── routes
│   ├── middlewares
│   ├── prisma
│   └── config
│
└── README.md
```

---

# 🔌 API Endpoints

## Authentication

```
/api/auth/*
```

## User

```
GET /api/user/projects
GET /api/user/credits
POST /api/user/project
```

## Project

```
POST /api/project/revision/:projectId
PUT /api/project/save/:projectId
DELETE /api/project/delete/:projectId
GET /api/project/preview/:projectId
```

## Gallery

```
GET /api/project/published
```

---

# 🤝 Contributing

1️⃣ Fork the repository  

2️⃣ Create feature branch

```bash
git checkout -b feature/new-feature
```

3️⃣ Commit changes

```bash
git commit -m "Added new feature"
```

4️⃣ Push

```bash
git push origin feature/new-feature
```

5️⃣ Open Pull Request

---

# 📝 License

MIT License

---

# 👨‍💻 Author

### Rohan Kumar Prusty

ECE Student — IIITDM Jabalpur  
AI | MERN | Machine Learning

GitHub:

https://github.com/rohanprusty

---

<div align="center">

⭐ **Star this repository if you like the project**

</div>
