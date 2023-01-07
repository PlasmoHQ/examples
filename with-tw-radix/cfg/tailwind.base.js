/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  corePlugins: {
    preflight: false
  },
  plugins: [
    require("windy-radix-palette")({
      colors: require("./radix")
    })
  ]
}
