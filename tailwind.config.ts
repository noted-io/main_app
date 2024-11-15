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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'soft-glow': {
          '0%, 100%': { boxShadow: '0 0 5px 2px rgba(0, 119, 255, 0.5)' },
          '50%': { boxShadow: '0 0 5px 2px rgba(0, 119, 255, 0.7)' },
        },
      },
      animation: {
        'soft-glow': 'soft-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
