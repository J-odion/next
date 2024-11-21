/** @type {import('tailwindcss').Config} */
module.exports = {
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
      maxWidth: {
        'screen-2xl': '1536px', // Standard large screen size
        '3xl': '1920px', // Custom for larger monitors
      },
      screens: {
        '3xl': '1920px', // Custom breakpoint for 24-inch screens
      },
    },
  },
  plugins: [],
};
