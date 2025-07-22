# 🚀 Cosmic Learning App

> Complete setup guide for the Cosmic Learning App. Follow these steps to get your space academy up and running!

## ⚠️ Prerequisites

Before you begin, ensure you have the following installed:

| Requirement     | Version | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| **Node.js**     | 18+     | Required for running the development server    |
| **Git**         | Latest  | For cloning the repository and version control |
| **Code Editor** | Any     | VS Code recommended with React extensions      |

---

## 🗄️ Step 1: Supabase Database Setup

### Why Supabase?

This project requires a Supabase database to handle:

- User authentication
- Store learning progress
- Track XP points
- Manage task completion

Supabase provides a powerful PostgreSQL database with real-time capabilities and built-in authentication.

### Setup Steps:

1. **Create Account**: Go to [supabase.com](https://supabase.com) and create a free account
2. **New Project**: Create a new project and choose a region close to your users
3. **Get Credentials**: Copy your project URL and anon key from Settings → API
4. **Database Schema**: Insert the required database schema (see database.webp reference)

> **⚠️ Important Note**: You'll need to turn off RLS policies which is not recommended for production. Create your own policies for select, insert, update operations.

---

## 📦 Step 2: Clone Repository & Install Dependencies

### Clone the Repository

```bash
git clone https://github.com/FilipElznic/LearningApp.git
cd LearningApp
```

### Install Required Libraries

#### Core Dependencies:

```bash
npm install react react-dom react-router-dom
npm install @supabase/supabase-js
npm install lucide-react
```

#### Styling & UI:

```bash
npm install tailwindcss postcss autoprefixer
npm install @splinetool/react-spline
```

#### Development Tools:

```bash
npm install -D vite @vitejs/plugin-react
npm install -D eslint eslint-plugin-react
```

#### Or install everything at once:

```bash
npm install
```

---

## ⚙️ Step 3: Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **🔒 Security Warning**: Never commit your .env file to version control. Add it to .gitignore!

---

## 🚀 Step 4: Launch Your Cosmic Academy

### Start Development Server

```bash
npm run dev
```

_This will start the development server at http://localhost:5173_

### Build for Production

```bash
npm run build
```

_Creates an optimized production build in the dist folder_

---

## ✨ Features Overview

### 🔐 User Authentication

- Secure login/signup with Supabase Auth

### ⭐ XP System

- Earn points based on difficulty levels

### 📈 Progress Tracking

- Monitor learning journey and achievements

### 🎮 Interactive UI

- Engaging space-themed interface

### 🌍 Multiple Realms

- Earth, Moon, and Deep Space challenges

### 🏆 Leaderboards

- Compete with fellow space explorers

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **3D Elements**: Spline
- **Icons**: Lucide React
- **Routing**: React Router DOM

---

## 📁 Project Structure

```
LearningApp/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── App.css
│   └── App.jsx
│   └── AuthContext.jsx
│   └── index.css
│   └── main.jsx
│   └── supabaseClient.js
│   └── ToastContext.jsx
├── public/
├── .env
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

<div align="center">
  <a href="https://shipwrecked.hackclub.com/?t=ghrm" target="_blank">
    <img src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/739361f1d440b17fc9e2f74e49fc185d86cbec14_badge.png" 
         alt="This project is part of Shipwrecked, the world's first hackathon on an island!" 
         style="width: 35%;">
  </a>
</div>
---

**Ready to explore the cosmos of learning? 🌌**
