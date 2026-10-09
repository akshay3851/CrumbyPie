# Crumbypie — React Single-Page Application

Welcome to the modular React application repository for **Crumbypie**, a mobile-responsive, premium-themed website built for an artisanal home bakery based in Faridabad.

## 🛠️ Tech Stack & Architecture
- **React (v18)** with Vite for lightning-fast bundling and Hot Module Replacement (HMR).
- **Tailwind CSS (v3)** for utility-first styling adhering to the custom brand color palette (Cream, Cocoa Brown, Caramel, Blush).
- **Lucide React** for clean, modern iconography.
- **Component-Driven Modular Architecture**:
  ```text
  crumbypie-react/
  ├── public/
  │   └── crumbypie-logo.svg
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   │   /Navbar.jsx
  │   │   /Hero.jsx
  │   │   /Menu.jsx
  │   │   /Perks.jsx
  │   │   /Bespoke.jsx
  │   │   /Guestbook.jsx
  │   │   /Bakers.jsx
  │   │   /Footer.jsx
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── package.json
  ├── tailwind.config.js
  ├── postcss.config.js
  ├── vite.config.js
  └── README.md
  ```

---

## ⚙️ Prerequisites & Environment
Ensure you have the following versions installed on your local machine:
- **Node.js**: `v20.11.1`
- **npm**: `v10.2.4`

To check your current versions, run:
```bash
node -v
npm -v
```

---

## 🚀 Step-by-Step Local Setup Instructions

1. **Unzip the Project Archive:**
   Extract `crumbypie-react.zip` into your desired working directory and navigate into the folder:
   ```bash
   cd crumbypie-react
   ```

2. **Install Dependencies:**
   Install all required npm packages specified in `package.json`:
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   Start the local Vite development server:
   ```bash
   npm run dev
   ```

4. **View in Browser:**
   Open your web browser and navigate to the local URL provided in your terminal (typically `http://localhost:5173`).

---

## 📦 Production Build

To build the application for production deployment (generates static optimized assets in the `dist` folder):
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
