# 🚀 AI Site Builder

<div align="center">

![AI Site Builder](assets/home-page.png)

**Transform your ideas into stunning websites with the power of AI**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Latest-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-lightgrey.svg)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7.1.0-2D3748.svg)](https://www.prisma.io/)
[![Stripe](https://img.shields.io/badge/Stripe-20.1.0-635BFF.svg)](https://stripe.com/)

</div>

## ✨ Features

### 🎨 **AI-Powered Website Generation**
- Generate complete, responsive websites from simple text prompts
- Real-time code generation using OpenRouter API
- Intelligent design suggestions and optimizations

### 💬 **Interactive Chat Interface**
- Conversational website building experience
- Real-time preview with instant updates
- Context-aware AI assistant for design modifications

### 🛠️ **Advanced Project Management**
- Version control for all website iterations
- Project history and rollback capabilities
- Individual project workspace

### 💳 **Integrated Payment System**
- Stripe-powered credit system
- Flexible pricing tiers (Basic, Pro, Enterprise)
- Secure payment processing with webhooks

### 🌐 **Public Gallery**
- Publish projects to public gallery
- Browse published websites from other users

## 📸 Screenshots

<div align="center">

### 🏠 Homepage
![Homepage](assets/home-page.png)

### 💰 Pricing Plans
![Pricing](assets/pricing.png)

### 👥 Community Gallery
![Community](assets/community.png)

### 📁 Project Management
![My Projects](assets/my-projects.png)

### 🔧 Website Builder
![Project Builder](assets/project-builder.png)

</div>

## 🏗️ Tech Stack

### **Frontend**
- **React 19.2.0** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Sonner** - Beautiful toast notifications

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js 5.2.1** - Web application framework
- **Prisma 7.1.0** - Next-generation ORM
- **PostgreSQL** - Robust relational database
- **Better Auth** - Modern authentication solution
- **OpenRouter API** - AI-powered code generation
- **Stripe** - Payment processing

### **Infrastructure**
- **Prisma Migrate** - Database migrations
- **TypeScript** - Full-stack type safety

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- OpenRouter API key
- Stripe account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/amaan-ur-raheman/ai-site-builder.git
cd ai-site-builder
```

2. **Install dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. **Environment Setup**

Create `.env` files in both `server` and `client` directories:

**Server `.env`:**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/ai_site_builder"
OPENROUTER_API_KEY="your_openrouter_api_key"
STRIPE_SECRET_KEY="your_stripe_secret_key"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"
BETTER_AUTH_SECRET="your_auth_secret"
BETTER_AUTH_URL="http://localhost:3000"
TRUSTED_ORIGINS="http://localhost:5173"
NODE_ENV="development"
```

**Client `.env`:**
```env
VITE_BASE_URL="http://localhost:3000"
```

4. **Database Setup**
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

5. **Start Development Servers**
```bash
# Terminal 1 - Start backend
cd server
npm run server

# Terminal 2 - Start frontend
cd client
npm run dev
```

Visit `http://localhost:5173` to see the application running! 🎉

## 📁 Project Structure

```
ai-site-builder/
├── client/                 # React frontend
│   ├── public/
│   │   └── readme/        # Screenshot assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── config/        # Configuration files
│   │   ├── lib/           # Utility libraries
│   │   ├── assets/        # Static assets
│   │   └── types/         # TypeScript types
│   └── package.json
├── server/                # Node.js backend
│   ├── controller/        # Route controllers
│   ├── routes/           # API routes
│   ├── lib/              # Utility libraries
│   ├── config/           # Configuration files
│   ├── middlewares/      # Express middlewares
│   ├── prisma/           # Database schema & migrations
│   ├── generated/        # Prisma generated files
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication (Better Auth)
- `ALL /api/auth/*` - Authentication endpoints (sign-in, sign-up, sign-out)

### User & Projects
- `GET /api/user/credits` - Get user credits
- `GET /api/user/projects` - Get user projects
- `POST /api/user/project` - Create new project
- `GET /api/user/project/:projectId` - Get specific project
- `GET /api/user/publish-toggle/:projectId` - Toggle project visibility
- `POST /api/user/purchase-credits` - Create Stripe checkout session

### Project Management
- `POST /api/project/revision/:projectId` - Make project revision
- `PUT /api/project/save/:projectId` - Save project code
- `GET /api/project/rollback/:projectId/:versionId` - Rollback to version
- `DELETE /api/project/delete/:projectId` - Delete project
- `GET /api/project/preview/:projectId` - Get project preview

### Public Gallery
- `GET /api/project/published` - Get all published projects
- `GET /api/project/published/:projectId` - Get specific published project

### Payments
- `POST /api/stripe` - Stripe webhook handler

## 💳 Pricing Plans

| Plan | Price | Credits | Features |
|------|-------|---------|----------|
| **Basic** | $5 | 100 | Up to 20 creations, Limited revisions, Basic AI models |
| **Pro** | $19 | 400 | Up to 80 creations, Extended revisions, Advanced AI models |
| **Enterprise** | $49 | 1000 | Up to 200 creations, Unlimited revisions, Premium support |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenRouter](https://openrouter.ai/) for providing the AI capabilities
- [Stripe](https://stripe.com/) for payment processing
- [Prisma](https://www.prisma.io/) for the excellent ORM
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the amazing framework

---

<div align="center">

**Made with ❤️ by Amaan Ur Raheman**

[⭐ Star this repo](https://github.com/amaan-ur-raheman/ai-site-builder) if you found it helpful!

</div>
