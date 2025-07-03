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
        // 🎯 Primary Colour (Main Branding / CTAs)
        'britannia-primary': '#102263',
        'britannia-primary-dark': '#0E1A4F', // For gradients
        
        // 🎯 Secondary Colour (Accent & Highlights)  
        'britannia-red': '#E30613',
        'britannia-red-dark': '#C4050F',
        
        // 🎯 Tertiary Colour (Backgrounds & Light Areas)
        'britannia-light': '#F2F4FB',
        
        // 🎯 Fourth/Support Colour (Body Text & Muted Elements)
        'britannia-text': '#333333',
        
        // Additional support colors
        'britannia-white': '#ffffff',
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