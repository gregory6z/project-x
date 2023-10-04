/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        sm: "450px",
        // => @media (min-width: 640px) { ... }

        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "gray-50": "#F1F1F1",
        "gray-100": "#EAEAEA",
        "gray-200": "#D4D4D4",
        "gray-300": "#737373",
        "gray-400": "#686868",
        "gray-500": "#5C5C5C",
        "gray-600": "#565656",
        "gray-700": "#454545",
        "gray-800": "#343434",
        "gray-900": "#282828",

        "yellow-normal": "#FED23F",
        "yellow-hover": "#e5bd39",
        "yellow-active": "#cba832",

        "yellow-light": "#fffbec",
        "yellow-light-hover": "#fff8e2",
        "yellow-light-active": "#fff1c3",

        "yellow-dark": "#bf9e2f",
        "yellow-dark-hover": "#987e26",
        "yellow-dark-active": "#725e1c",
        "yellow-darker": "#594a16",

        "background-dark-900": "#181818",
        "background-dark-500": "#343434",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },
          "50%": { opacity: 0 },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "50%": { opacity: 1 },
          "100%": {
            opacity: 0,
            transform: "translate(-100%)",
          },
        },
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        overlayFade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 500ms cubic-bezier(0.4, 0, 0.6, 1)",
        slideOut: "slideOut 400ms cubic-bezier(0.4, 0, 0.6, 1)",
        overlayShow: "overlayShow 250ms cubic-bezier(0.4, 0, 0.6, 1)",
        overlayFade: "overlayFade 200ms cubic-bezier(0.4, 0, 0.6, 1)",
        overlayFad2: "overlayFade 500ms cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
}
