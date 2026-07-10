/**
 * vite.config.js — Build config for the Wedding Demo (standalone sub-project).
 *
 * Build flow:
 *  1. Run `npm run build` here → outputs to ./dist/
 *  2. Copy dist/ to parent's /public/demo/ (or run `node scripts/build-demo.mjs` from parent root)
 *  3. Parent site serves it at /demo/index.html inside an <iframe>
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Enables Tailwind + DaisyUI in index.css

export default defineConfig({
  base: '/demo/',   // Prefix all asset URLs with /demo/ so they load correctly from the parent site
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0', // Expose on local network (useful for mobile testing)
    port: 3000,       // Demo dev server — parent site runs on 5173
  },
});
