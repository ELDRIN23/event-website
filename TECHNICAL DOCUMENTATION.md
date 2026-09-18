# Technical Documentation — Luxury Event Planning Web Application

> **Project Name**: Event Website (`web02`)  
> **Authors & Copyright Owners**: Eldrin Johnson & Merin Joy  
> **Copyright**: © 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.

---

## 1. Project Overview

This application is an interactive, high-end, responsive luxury event planning platform. It highlights bespoke event management services across weddings, family celebrations, baptisms, holy communions, and milestone birthdays.

The repository is structured with a root deployment wrapper (`vercel.json`) pointing to the primary Vite application nested inside `event-website/`.

---

## 2. Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev/) + [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Styling System** | [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI 5](https://daisyui.com/) |
| **Animations & Visual Effects** | [Framer Motion / Motion](https://motion.dev/), [GSAP](https://gsap.com/), [Canvas Confetti](https://github.com/catdad/canvas-confetti) |
| **Icons & Maps** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), [Dotted Map](https://github.com/niinature/dotted-map) |
| **Linting & Quality** | ESLint |

---

## 3. Directory & File Structure

```
event-website/
├── vercel.json                        # Root Vercel deployment configuration
└── event-website/                      # Main React application directory
    ├── index.html                     # Entry HTML template
    ├── package.json                   # Dependencies, devDependencies & npm scripts
    ├── vite.config.js                 # Vite bundler & plugin configuration
    ├── vercel.json                    # Application-level Vercel configuration
    ├── eslint.config.js               # ESLint configuration rules
    ├── README.md                      # Copyright and IP Notice
    ├── TECHNICAL DOCUMENTATION.md      # System & architectural documentation
    ├── public/                        # Static public assets
    └── src/
        ├── main.jsx                    # React root entry, router, splash screen & layout wrapper
        ├── App.jsx                     # Landing page hero section & interactive showcase
        ├── index.css                   # Global Tailwind CSS imports
        ├── demo.css                    # Custom styles for demo pages & dynamic overlays
        ├── components/                 # Reusable UI components
        │   ├── Navbar.jsx              # Responsive header navigation
        │   ├── Footer.jsx              # Footer links & copyright details
        │   ├── BottomNav.jsx           # Mobile quick-action dock navigation
        │   ├── ScrollToTop.jsx         # Scroll reset on route change
        │   ├── TextLoop.jsx            # Animated text ticker/looping element
        │   └── ui/                     # Specialized UI elements
        │       ├── 3d-marquee.tsx      # 3D interactive image marquee
        │       ├── background-lines.tsx# Animated SVG background effect
        │       └── world-map.tsx       # Animated global network / map component
        ├── layouts/
        │   └── Layout.jsx              # Master application layout wrapping Navbar, Outlet, & Footer
        └── pages/                      # Page view components
            ├── Splash.jsx              # Initial animated splash loading screen
            ├── Weddings.jsx            # Weddings service overview
            ├── WeddingDemo.jsx         # Interactive live wedding website demo showcase
            ├── FamilyEvents.jsx        # Family event planning view
            ├── LoveCelebrations.jsx    # Engagements & anniversary events view
            ├── baptisum.jsx            # Baptism celebration experience view
            ├── birthday.jsx            # Birthday event showcase view
            ├── holy-communion.jsx      # Holy Communion celebration view
            └── Contact.jsx             # Booking inquiry & contact form
```

---

## 4. Key Application Workflows & Features

### 4.1 Initial Load & Splash Screen
- **[`main.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/main.jsx)**: Upon initial access, the application renders a 2.5-second full-screen animated [`Splash.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/Splash.jsx) screen before displaying the requested route view.
- **Scroll Restoration**: Included [`ScrollToTop`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/main.jsx#L18-L30) component ensures smooth top-of-page navigation whenever route paths change.

### 4.2 Routing Map
| Route Path | Component View | Description |
| :--- | :--- | :--- |
| `/` | [`App.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/App.jsx) | Main landing page featuring interactive event categories & global map |
| `/weddings` | [`Weddings.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/Weddings.jsx) | Luxury wedding planning showcase |
| `/wedding-demo` | [`WeddingDemo.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/WeddingDemo.jsx) | Full-featured interactive sample wedding client site |
| `/family-events` | [`FamilyEvents.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/FamilyEvents.jsx) | Family gatherings, reunions, and anniversary services |
| `/love-celebrations` | [`LoveCelebrations.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/LoveCelebrations.jsx) | Romantic proposals, engagements, and vow renewals |
| `/Baptism` | [`baptisum.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/baptisum.jsx) | Custom baptism event planning showcase |
| `/Birthday` | [`birthday.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/birthday.jsx) | Milestone birthday celebrations |
| `/HolyCommunion` | [`holy-communion.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/holy-communion.jsx) | First Holy Communion event management |
| `/contact` | [`Contact.jsx`](file:///c:/Users/MERIN%20JOY/Documents/event-website/event-website/src/pages/Contact.jsx) | Contact form, venue mapping, and consultation scheduler |

---

## 5. Development & Deployment Scripts

Run all scripts inside the inner project directory (`c:/Users/MERIN JOY/Documents/event-website/event-website`):

- **Start Local Development Server**:
  ```bash
  npm run dev
  ```
- **Local Network Mobile Preview**:
  ```bash
  npm run dev:mobile
  ```
- **Build Production Assets**:
  ```bash
  npm run build
  ```
- **Run ESLint Checks**:
  ```bash
  npm run lint
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 6. Deployment Configuration

The root workspace includes a [`vercel.json`](file:///c:/Users/MERIN%20JOY/Documents/event-website/vercel.json) file configured to build the nested project seamlessly:

```json
{
  "framework": "vite",
  "buildCommand": "cd event-website && npm install && npm run build",
  "outputDirectory": "event-website/dist"
}
```

---

## 7. Intellectual Property & Copyright Notice

**Copyright © 2026 Eldrin Johnson and Merin Joy. All Rights Reserved.**  
All source code, design assets, and component architectures are proprietary and confidential. Unauthorized copying, distribution, or commercial exploitation is strictly prohibited.
