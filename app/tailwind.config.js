/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0F1A",
        neonPink: "#FF4DFF",
        neonPurple: "#7A5CFF",
        neonBlue: "#4DE0FF",
        neonGreen: "#6BFFB8"
      },
      fontFamily: {
        inter: ["Inter_400Regular", "Inter_600SemiBold", "Inter_700Bold", "sans-serif"]
      }
    }
  },
  plugins: []
};
