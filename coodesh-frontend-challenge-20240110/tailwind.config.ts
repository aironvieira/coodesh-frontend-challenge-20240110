import type { Config } from "tailwindcss";

export default {
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
        'custom-purple': '#652D91',
        'custom-grey': '#555555',
        'custom-dark-grey': '#393B3D',
        'custom-light-grey': '#EDF1F4',
        'custom-orange': '#F36C21',
        'custom-dark-orange': '#E95808',
        'custom-light-grey-text': '#808587',
        'custom-medium-grey-text': '#4E5254',


      },
    },
    container: {
      center: true, 
      padding: '2rem', 
    }
  },
  plugins: [],
} satisfies Config;
