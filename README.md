# Hrishabh Raj — Portfolio Website

A premium, interactive, and fully responsive personal portfolio website showcasing work as a **Content Strategist & Video Editor**. The site features detailed case studies, an interactive video player gallery for short-form reel content, custom micro-interactions, smooth scrolling, and a polished dark-themed design system.

---

## 📂 Project Structure

The project has a clean, organized, and static folder structure designed for easy local development, version control, and instant hosting on platforms like GitHub Pages, Vercel, or Netlify.

```text
hrishabh-portfolio/
│
├── index.html               # Main landing page (Hero, Work, About, Reels, Contact)
├── style.css                # Core design system and layout styling
├── app.js                   # Interactive logic, navigation, and video handling
├── brandbizztech.html       # Case study: BrandBizzTech content system strategy
├── founder-content.html     # Case study: Founder Content Project short-form videos
├── freelance-video.html     # Case study: Freelance Video Editing high-volume systems
├── README.md                # Project documentation and deployment guide
│
└── assets/                  # Media assets used throughout the website
    ├── portrait.png         # Main portrait image (transparent cutout)
    ├── brandbizztech.png    # BrandBizzTech project showcase mockup
    ├── founder.png          # Founder Content Project showcase mockup
    ├── project3.png         # Freelance video project collage mockup
    ├── favicon.png          # Custom site favicon
    ├── reel1.mp4            # Showcase reel 1
    ├── reel2.mp4            # Showcase reel 2
    ├── reel3.mp4            # Showcase reel 3
    ├── reel4.mp4            # Showcase reel 4
    ├── reel5.mp4            # Showcase reel 5
    ├── reel6.mp4            # Showcase reel 6
    ├── icons/               # Subdirectory for icon files (if needed)
    └── fonts/               # Subdirectory for local font files (if needed)
```

---

## ⚡ Features

- **Performance-First static stack**: Built using pure semantic HTML5, Vanilla CSS, and modern asynchronous JavaScript.
- **Dynamic Case Studies**: Independent project detail pages with clear grids, back-to-work links, and smooth transitions.
- **Short-form Reel Player**: Dynamic video cards that load and overlay video content smoothly with micro-animations, volume controls, and loop capabilities.
- **Mobile-Responsive Styling**: Responsive grid layouts and fluid typography that adjust perfectly across screen widths from mobile up to ultra-wide displays.
- **SEO Optimized**: Standard HTML title structures, descriptive header elements, meta descriptions, and unique interactive item IDs.

---

## 💻 Local Development

Since this is a static website, you can run it locally in two ways:

### Method 1: Double-click index.html
Simply open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).

### Method 2: Local Development Server (Recommended)
Running through a local development server ensures proper video stream behavior and removes browser constraints on local file resources.
- If you have **Node.js** installed, run:
  ```bash
  npx serve .
  ```
- If you have **Python** installed, run:
  ```bash
  python -m http.server 8000
  ```
  Then open [http://localhost:8000](http://localhost:8000) in your browser.
- Alternatively, you can use the **Live Server** extension in VS Code.

---

## 🚀 Deployment Guide

### GitHub Repository Setup
1. Create a new empty repository on your GitHub account.
2. Initialize and push this codebase to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

### Vercel Deployment
This repository is 100% ready for one-click Vercel deployment:
1. Log in to [Vercel](https://vercel.com).
2. Click **Add New** > **Project**.
3. Select your GitHub repository.
4. Keep the default settings (Vercel automatically detects it as an HTML/CSS/JS project).
5. Click **Deploy**.
Your site will be live on a production-ready URL in under a minute!
