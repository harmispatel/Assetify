/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-image": "url('/src/assets/Group 14.png')",
      },
      boxShadow: {
        "custom-inset": "6px 6px 24px 0px #9747FFB2 inset",
      },
      boxShadow: {
        "white-30":
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 4px 20px 1px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
