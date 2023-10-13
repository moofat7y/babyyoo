/** @type {import('tailwindcss').Config} */
import { colors } from "tailwindcss/defaultTheme";

const defaultThemeColors = {
  ...colors,
  ...{
    primary: {
      100: "#86E690",
      200: "#6DE179",
      300: "#5EDE6C",
      400: "#3CD74D",
      500: "#13CF27",
      600: "#0FAB20",
      700: "#0D8D1A",
      800: "#0B7416",
      900: "#095F12",
    },
    list1: "#68B7E6",
    list2: "#fdcb1b",
    list3: "#08da4e",
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: defaultThemeColors,
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
