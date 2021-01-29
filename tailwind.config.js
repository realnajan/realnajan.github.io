const colors = require('tailwindcss/colors')
colors.dracula = {
  dark: "#20212b",
  light: "#2c2f3d",
  lighter: "#44475a",
  fg: "#f8f8f2",
  cyan: "#8be9fd",
  green: "#50fa7b",
  orange: "#ffb86c",
  pink: "#ff79c6",
  red: "#ff5555",
  yellow: "#f1fa8c",
  purple: "#bd93f9"
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      lime: colors.lime,
      emerald: colors.emerald,
      cyan: colors.cyan,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: 'black',
      white: 'white',
      transparent: 'transparent',
      dracula: colors.dracula
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
