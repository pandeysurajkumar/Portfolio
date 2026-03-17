# Portfolio (React + Vite)

Personal portfolio website built with React and Vite.

### Deploy link

- **Live site**: _ADD YOUR DEPLOY LINK HERE_

### Technology used

- **React**
- **Vite**
- **React Router DOM**
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **Framer Motion**
- **ESLint**

### How to run (local)

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### How to build / preview

```bash
npm run build
npm run preview
```

### How to modify

- **Main homepage layout**: `src/App.jsx`
- **App entry + routes**: `src/main.jsx`
  - `/` renders `App`
  - `/resume` renders `src/components/Resume`
- **Sections/components**: `src/components/`
  - `Navbar.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Certifications.jsx`, `Contact.jsx`, `Footer.jsx`
- **Styles**
  - Global styles: `src/index.css`
  - App styles (if used): `src/App.css`

### Notes

- If you deploy to a static host (Netlify/Vercel/GitHub Pages), configure it for **SPA routing** so routes like `/resume` work on refresh.
