/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Define here your animations
        shimmer: {
          // New defined animation called shimmer
          "100%": { transform: "translateX(100%)" }, // Move it from left to right (100% right till the end)
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite", // for the animation called shimmer, run it for 1.5s infinitely
      },
    },
  },
  plugins: [],
};
