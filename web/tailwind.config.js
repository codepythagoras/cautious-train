module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        us: "rgb(9, 2, 33)",
        ourDark: "rgb(9,2,33)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
