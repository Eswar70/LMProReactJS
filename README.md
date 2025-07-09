# 📊 Responsive Web & Mobile Dashboard

This project is a fully responsive, interactive dashboard web application built with **ReactJS** and **Redux**. It features dynamic widgets, data visualizations, theme toggling, and mobile-first design principles.

---

## 🚀 Live Demo

🌐 [Live Web App (Vercel)]([https://your-vercel-link](https://dashboardui-zeta.vercel.app/))

---

## 📱 Features Overview

### 🧱 Core Layout
- **Header:** Navigation links, user avatar, notifications
- **Sidebar:** Routes to Overview, Analytics, Settings
- **Main Content:** Widgets including charts, metrics, and activity feeds
- **Footer:** Compact site description

### 📊 Widgets
- **Line Chart:** User activity over time
- **Bar Chart:** Sales data
- **Pie Chart:** Demographics
- **Activity Feed:** Real-time recent actions

### 📱 Responsive Design
- CSS Grid + Flexbox
- Desktop, tablet, and mobile views
- Collapsible sidebar and mobile-optimized content

### 🔧 Settings Page
- Form for user preferences
- Validation and smooth user experience

### 🌙 Dark Mode
- Toggle between light and dark themes

---

## 🧰 Technologies Used

- **ReactJS**
- **Redux Toolkit**
- **React Router**
- **Tailwind CSS / Styled Components**
- **Recharts / Chart.js**
- **Mock API (e.g., JSON Server / MirageJS)**

---

## 🏗️ Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/responsive-dashboard-app.git
cd responsive-dashboard-app
```

### 2. Install Dependencies
```bash
Copy
Edit
npm install
3. Run the App
bash
Copy
Edit
npm start
App will be available at http://localhost:3000
```

### 🌐 Deployment
```
📤 Frontend (Vercel)
Push repo to GitHub

Import into Vercel

Set build command: npm run build

Output directory: build

Deploy

🧠 Architecture Highlights
Redux for global state (charts, theme, settings)

Lazy Loading of route-based pages for performance

ThemeContext for managing light/dark mode globally

Custom hooks for API fetching with loading and error states
```
