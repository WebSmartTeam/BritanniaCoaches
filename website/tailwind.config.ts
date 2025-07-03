import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'britannia-blue': '#1e40af', // Better navy blue
        'britannia-blue-light': '#3b82f6',
        'britannia-blue-dark': '#1e3a8a',
        'britannia-red': '#dc2626',
        'britannia-red-dark': '#b91c1c',
        'britannia-white': '#ffffff',
        'britannia-off-white': '#fefefe',
        'accent-gold': '#f59e0b', // Brighter gold
        'accent-gold-dark': '#d97706',
        'neutral-charcoal': '#374151',
        'neutral-slate': '#64748b',
        'neutral-silver': '#9ca3af',
        'neutral-light': '#f8fafc',
        'neutral-gray': '#f3f4f6',
        'success': '#059669',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'britannia': '0 4px 20px rgba(30, 58, 138, 0.15)',
        'britannia-lg': '0 8px 30px rgba(30, 58, 138, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;