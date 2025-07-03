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
        'britannia-blue': '#1e3a8a',
        'britannia-blue-light': '#3b82f6',
        'britannia-blue-dark': '#1e40af',
        'britannia-red': '#dc2626',
        'britannia-red-dark': '#b91c1c',
        'britannia-white': '#ffffff',
        'britannia-off-white': '#fefef9',
        'accent-gold': '#d97706',
        'accent-gold-dark': '#b45309',
        'neutral-charcoal': '#374151',
        'neutral-slate': '#64748b',
        'neutral-silver': '#9ca3af',
        'neutral-light': '#f8fafc',
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