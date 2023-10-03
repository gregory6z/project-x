/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {},
      // fontFamily: {
      //   montserrat: "Montserrat",
      //   genos: "Genos",
      // },
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
