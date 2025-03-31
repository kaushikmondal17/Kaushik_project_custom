/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ms: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      ls: '1920px',
    },
    extend: {
      fontFamily: {
        'Mofugu': ['Mofugu'], 
      },
      fontWeight: {
        hairline: 100,
       thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
       semibold: 600,
        bold: 700,  
       extrabold: 800,
        black: 900,
      },
      animation: {
        shake: "shake 0.2s ease-in-out",
        rotate: 'rotate 5s linear infinite',
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        rotate: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}