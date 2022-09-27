const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
        mono: ['"DM Mono"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        h1: "72px",
        h2: "54px",
        h3: "28px",
        p1: "20px",
        p2: "16px",
        caption: "14px",
      },
      colors: {
        akuya: {
          1: "#FAFAF9",
          2: "#E7E5E4",
          3: "#D6D3D1",
          4: "#57534E",
          5: "#44403C",
          6: "#1C1917",
        },
        accent: "#F97316",
      },
    },
  },
  plugins: [],
};
