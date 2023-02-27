const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    fontFamily: {
      sans: ["Merriweather Sans", "Montserrat", "system-ui", "sans-serif"],
      serif: ["Libre Baskerville", "system-ui", "serif"],
    },
    colors: {
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      white: colors.white,
      yellow: colors.yellow,
      turbo: "#E7E704",
      fire: "#F70504",
      azure: "#0482ED",
      martinique: "#2A2A4F",
      deepBlue: "#072b63",
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    display: ["responsive", "hover", "focus", "last"],
  },
}
