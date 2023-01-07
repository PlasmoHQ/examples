/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,html}"],
  darkMode: "media",
  plugins: [
    require("windy-radix-palette")({
      colors: require("./radix")
    })
  ]
}
