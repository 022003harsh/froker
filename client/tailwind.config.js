/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      "edu-sa": ["Edu SA Beginner", "cursive"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "#ffffff00",
      richblack: {
        100: "#3D3D3D", //
        200: "#667085", //
        300: "#1A1A1A", //
        400: "#9CA3AF", //searchbar
      },
      orange: {
        100: "#F76F32", //
        200: "#FD7A33", // readmore
      },
      perlwhite: {
        100: "#F0F8FF", //@
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};
