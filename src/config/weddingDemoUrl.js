const configured = import.meta.env.VITE_WEDDING_DEMO_URL?.trim();

/** Public URL of the standalone wedding demo (Vercel or local dev server). */
export const WEDDING_DEMO_URL =
  configured || (import.meta.env.DEV ? 'http://localhost:5174' : '');
