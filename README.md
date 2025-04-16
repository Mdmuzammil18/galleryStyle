# GalleryStyle Portfolio

A modern, visually stunning and fully responsive developer portfolio built with React, TypeScript, Tailwind CSS, Framer Motion, and Vite. Features a dynamic project gallery, beautiful animations, and a mobile-first design.

---

## ✨ Features

- **Responsive Design:** Looks great on all devices. Mobile-first layouts, adaptive font sizes, and flexible grid.
- **Animated Project Modal:** Click any project to see details in a smooth, animated modal with a close button that works perfectly on mobile.
- **Particle Background:** Subtle animated background adds a modern touch.
- **Filterable Project Grid:** Filter projects by tech stack instantly.
- **Accessible:** Keyboard navigation and ARIA labels for important controls.
- **Tech Stack Marquee:** Animated scrolling list of technologies used.

---

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Other:** React DOM, portals, custom hooks

---

## 📁 Project Structure

```
/ (root)
├── src/
│   ├── components/
│   │   ├── Portfolio/
│   │   │   ├── ImageGrid.tsx      # Project grid and modal logic
│   │   │   ├── Portfolio.tsx      # Portfolio section and layout
│   │   │   └── TechMarquee.tsx    # Tech stack marquee
│   │   └── Background/
│   │       └── ParticleBackground.tsx # Animated background
│   └── hooks/
│       ├── useAnimationOnLoad.ts  # Animation timing hook
│       └── useTypewriter.ts       # Animated typewriter effect
├── public/
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🖼️ Customizing Projects
- Edit `src/components/Portfolio/ImageGrid.tsx` to add, remove, or modify projects.
- Each project supports: `title`, `image`, `description`, `technologies`, `github`, and custom grid span.

---

## 📝 Accessibility & Responsiveness
- All interactive elements have ARIA labels.
- Modal and navigation are keyboard accessible.
- Layouts and font sizes adapt for mobile, tablet, and desktop.

---

## 🌐 Deployment
- Ready for deployment on Vercel, Netlify, or any static host.
- To deploy, simply build and upload the `dist/` folder or connect your repo to your preferred platform.

---

## 📣 Credits
- Project images powered by [Unsplash](https://unsplash.com/).
- Built and designed by Muzammil (replace with your name if desired).

---

## 📬 Contact
Want to get in touch or collaborate? Use the Contact Me button in the navbar!

---

## License
MIT
