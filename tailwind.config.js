/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111927",
        accent: {
          shades: "#d9d9d9",
          DEFAULT: "#B79685", //
          tint: "#F1F1F1",
          light: "#f1f1f1be",
        },

        grey: {
          shades: "#AEB3CD",
          DEFAULT: "#535875", //
          tint: "#f6f7fb",
        },
        white: {
          shades: "#FAFAFA",
          DEFAULT: "#FFFFFF", //
          tint: "#f6f7fb",
        },
      },
    },
  },
  plugins: [],
};
