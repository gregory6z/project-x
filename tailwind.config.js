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

      backgroundImage: {
        "radial-gradient":
          "radial-gradient(32.59% 21.06% at 25.98% 13.43%, white 0%, rgba(255, 255, 255, 0) 100%)",
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

        "background-dark-900": "#0D0D0F",
        "background-dark-800": "#121214",
        "background-dark-700": "#1E1E20",
        "background-dark-500": "#343434",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      keyframes: {
        skelleton: {
          "0%": {
            backgroundPosition: "-200px 0",
          },
          "100%": {
            backgroundPosition: "calc(200px + 100%) 0",
          },
        },

        slideDownAc: {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        slideUpAc: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },

        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-100%)" },

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
        fadeInFromTop: {
          from: {
            opacity: 0,
            transform: "translateY(-30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        overlayShow: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        overlayFade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        openScale: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
      },
      animation: {
        scaleAnimation: "openScale 2s  cubic-bezier(0.61, 1, 0.88, 1)  ",
        skeletonAnimation: "shimmer 1300ms ease-in-out infinite",
        animateOnOpen: "fadeInFromTop 500ms ease-in-out",
        slideIn: "slideIn 500ms cubic-bezier(0.4, 0, 0.6, 1)",
        slideOut: "slideOut 400ms cubic-bezier(0.4, 0, 0.6, 1)",
        overlayShow: "overlayShow 800ms cubic-bezier(0.61, 1, 0.88, 1)",
        overlayFade: "overlayFade 200ms cubic-bezier(0.4, 0, 0.6, 1)",
        overlayFad2: "overlayFade 500ms cubic-bezier(0.4, 0, 0.6, 1)",
        animateFade: "overlayShow 1200ms cubic-bezier(0.61, 1, 0.88, 1)",

        slideDownAc: "slideDownAc 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAc: "slideUpAc 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },

      customStyles: {
        "border-theme": "border-b  border-solid border-gray-800",
        "responsive-container":
          "flex mx-[1.25rem] md:mx-10 mx-auto lg:max-w-[1120px] xl:mx-auto lg:mx-16 xl:mx-0",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
}
