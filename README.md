# 🚀 AI Resume ATS Analyzer

An AI-powered Resume ATS (Applicant Tracking System) Analyzer built using the MERN Stack. The application analyzes resumes against job descriptions, calculates ATS scores, identifies missing skills, and provides AI-powered suggestions to improve interview chances.

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Remember Me Functionality
* Protected Routes

### 📄 Resume Analysis

* PDF Resume Upload
* ATS Score Calculation
* Skill Match Analysis
* Missing Skills Detection
* AI Resume Suggestions
* Job Description Matching

### 📊 Dashboard

* ATS Score Dashboard
* Score Trend Visualization
* Recent Analysis History
* Statistics Overview
* Skill Match Pie Chart

### 🎨 User Experience

* Modern Responsive UI
* Dark Mode Support
* User Profile Dropdown
* Interactive Charts
* Downloadable PDF Reports

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Recharts
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### AI Integration

* Groq API
* Llama Models

## 📂 Project Structure

```text
AI-Resume-ATS-Analyzer
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/mathan0310E/AI-Resume-ATS-Analyzer.git
cd AI-Resume-ATS-Analyzer
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_SECRET_KEY
GROQ_API_KEY=YOUR_GROQ_API_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

## ▶️ Run Application

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

## 📈 Future Enhancements

* Resume Rewriter
* Job Recommendation Engine
* Cover Letter Generator
* LinkedIn Profile Analyzer
* Multi-Resume Comparison
* AI Interview Preparation

## 👨‍💻 Author

**Mathan Kumar**

B.Tech Artificial Intelligence & Data Science

GitHub: https://github.com/mathan0310E

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
