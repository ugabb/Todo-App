/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BrightBlue: "hsl(220, 98%, 61%)",
        StartGradient: "hsl(192, 100%, 67%)",
        EndGradient: "hsl(280, 87%, 65%)",
        VeryDarkBlue: "hsl(235, 21%, 11%)",
        VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        LightGrayishBlue: "hsl(234, 39%, 85%)",
        LightGrayishBlueH: "hsl(236, 33%, 92%)",
        DarkGrayishBlue: "hsl(234, 11%, 52%)",
        VeryDarkGrayishBlue: "hsl(233, 14%, 35%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
        LightGrayishBlueLight: "hsl(233, 11%, 84%)",
        DarkGrayishBlueLight: "hsl(236, 9%, 61%)",
        VeryDarkGrayishBlueLight: "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
