const { BsTypeStrikethrough } = require("react-icons/bs");
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        25: "100px",
        150: "150px",
        170: "170px",
        190: "190px",
        225: "225px",
        250: "250px",
        280: "280px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        460: "460px",
        500: "500px",
        656: "656px",
        880: "880px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        280: "280px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        textColor: "#bdd96b",
        bgColor: "#272e32",
        overLay: "rgba(39,46,50,0.4)",
      },
      backgroundImage: {
        bgAbout: "url('./assets/image/about-bg.jpg')",
        bgPrices: "url('./assets/image/prices-bg.jpg')",
        bgFeedback: "url('./assets/image/testmonials-bg.jpg')",
      },
      boxShadow: {
        boxShadow: "0 0 15px rgb(0 0 0 / 15%)",
      },
    },
  },
  plugins: [Myclass],
};
