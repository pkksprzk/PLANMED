/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      colors: {
        primary: "#0199ad",
        bgMain: "#cfdde6",
        glass: "rgba(255,255,255,0.2)"
      },

      blur: {
        hero: "200px",
      },

      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        jam: ["Bai Jamjuree", "sans-serif"],
        kokoro: ["Kokoro", "cursive"],
      }

    }
  },
  plugins: [],
}
