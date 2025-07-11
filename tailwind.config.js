/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        pink: "#E34F8F",
        "light-pink": "#FDEEF4",
        "dark-pink": "#B92E6A",
        yellow: "#FFD451",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        shadows: ["Shadows Into Light", "cursive"],
        unna: ["Unna", "serif"],
      },
      lineHeight: {
        big: "1.4em",
      },
      animation: {
        inf: "ticker 18s linear infinite",
        infLeft: "tickerLeft 18s linear infinie",
        "f-up-l": "fade-up-left 1s ease-out forwards",
        "f-up-r": "fade-up-right 1s 0.3s ease-out forwards",
        but1: "up 9s linear -3s infinite forwards, fade-up 2s cubic-bezier(0.25, 1, 0.5, 1) 0s forwards",
        but2: "up 4s linear -4s infinite forwards, fade-up 2s cubic-bezier(0.25, 1, 0.5, 1) 0s forwards",
        but3: "up 6s linear 0s infinite forwards, fade-up 2s cubic-bezier(0.25, 1, 0.5, 1) 0s forwards",
        but4: "up 8s linear -1s infinite forwards,fade-up 2s cubic-bezier(0.25, 1, 0.5, 1) 0s forwards",
      },
      keyframes: {
        ticker: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },

          "100%": {
            transform: "translate3d(-108rem, 0, 0)",
          },
        },
        tickerLeft: {
          "0%": {
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            transform: "translate3d(108rem, 0, 0)",
          },
        },
        "fade-up-left": {
          from: {
            transform: "translateY(250px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
        "fade-up-right": {
          from: {
            transform: "translateY(320px)",
            opacity: 0,
          },
          to: {
            transform: "translateY(70px)",
            opacity: 1,
          },
        },
        "fade-up": {
          from: {
            transform: "translateY(1000px)",
          },
          to: {
            transform: " translateY(0px)",
          },
        },
        up: {
          "0%": {
            top: "100%",
            opacity: 0,
          },
          "5%": {
            opacity: 1,
          },
          "95%": {
            opacity: 1,
          },
          "100%": {
            top: "-10px",
            opacity: 0,
          },
        },
      },
      scale: {
        995: "0.9999",
      },
    },
    borderRadius: {
      sm: "16px",
    },
  },
  plugins: [],
};

