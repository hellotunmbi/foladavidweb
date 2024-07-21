import colors from "tailwindcss/colors";
import { createThemes } from "tw-colors";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  darkMode: ["class"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    fontFamily: {
      body: ["REM", "sans-serif"],
    },

    extend: {
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: colors.blue["950"],
        },
        warning: {
          ...colors.yellow,
          DEFAULT: colors.yellow["500"],
        },
        primaryy: "#111927",
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

      zIndex: {
        60: "60",
        70: "70",
      },
    },
  },

  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    createThemes(
      {
        light: {
          default: colors.zinc,
        },

        dark: {
          default: {
            50: "#09090b",
            100: "#18181b",
            200: "#27272a",
            300: "#3f3f46",
            400: "#52525b",
            500: "#71717a",
            600: "#a1a1aa",
            700: "#d4d4d8",
            800: "#e4e4e7",
            900: "#f4f4f5",
            950: "#fafafa",
          },
        },
      },
      {
        defaultTheme: "dark",
      }
    ),
  ],
};
export default config;
