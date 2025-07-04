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
        // 🎯 Britannia Coaches Brand Colors
        'britannia-primary': '#102263',      // Deep Navy (headers, CTAs, branding)
        'britannia-primary-dark': '#0E1A4F', // Darker navy for gradients
        'britannia-red': '#E30613',          // Britannia Red (accents, highlights)
        'britannia-red-dark': '#C4050F',     // Darker red for hover states
        'britannia-light': '#F2F4FB',        // Light Blue-Grey (backgrounds, cards)
        'britannia-text': '#333333',         // Dark Grey (body text, content)
        
        // Additional utility colors
        'britannia-white': '#FFFFFF',
        'britannia-gray': '#F8F9FA',
        'britannia-border': '#E5E7EB',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'britannia': '0 4px 6px -1px rgba(16, 34, 99, 0.1), 0 2px 4px -1px rgba(16, 34, 99, 0.06)',
        'britannia-lg': '0 10px 15px -3px rgba(16, 34, 99, 0.1), 0 4px 6px -2px rgba(16, 34, 99, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;