const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(
        {
          ".text-14": { "font-size": "0.875rem", "line-height": "1.125rem" },
          ".text-16": { "font-size": "1rem", "line-height": "1.25rem" },
          ".text-24": { "font-size": "1.5rem", "line-height": "1.75rem" },
          ".text-40": { "font-size": "2.5rem", "line-height": "2.75rem" },
        },
        {
          variants: ["responsive"],
        }
      );
    }),
  ],
  theme: {
    extend: {
      screens: {
        desktop: {
          min: "64rem", // 1024px
        },
        mobile: {
          max: "63.9375rem", // 1023px
        },
      },
    },
    colors: {
      gradient: {
        blue: "#55ACEE",
        pink: "#EA596E",
      },
      gray: "#F0F0F0",
      primary: "#202020",
      secondary: "#606060",
      tertiary: "#A0A0A0",
      transparent: "transparent",
    },
    spacing: {
      0: "0",
      2: "0.125rem",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      32: "2rem",
      48: "3rem",
    },
  },
};
