const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    extend: {
      colors: {
        brandColor: colors.red,
        brand: {
          lighter: "var(--brand-lighter)",
          light: "var(--brand-light)",
          DEFAULT: "var(--brand-base)",
          dark: "var(--brand-dark)",
          darker: "var(--brand-darker)",
        },
        // text-colors
        neutral: {
          yang: "var(--neutral-yang)",
          DEFAULT: "var(--neutral-base)",
          1: "var(--neutral-1)",
          2: "var(--neutral-2)",
          3: "var(--neutral-3)",
          4: "var(--neutral-4)",
          5: "var(--neutral-5)",
          6: "var(--neutral-6)",
          7: "var(--neutral-7)",
          8: "var(--neutral-8)",
          9: "var(--neutral-9)",
          shadow: "var(--neutral-shadow)",
          secondary: "var(--neutral-secondary)",
          secondaryDark: "var(--neutral-secondary-dark)",
          marketingGray: "var(--neutral-marketing-gray)",
          secondaryLight: "var(--neutral-secondary-light)",
          secondaryLighter: "var(--neutral-secondary-lighter)",
        },
      },
      backgroundColor: {
        base: "var(--background)",
        secondary: "var(--background-secondary)",
        inverted: "var(--neutral-9)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ],
        headline: ["Special Font Name", "Inter", "sans-serif"],
      },
      borderRadius: {
        brand: "9px",
        brandSecondary: "4px",
      },
    },
  },
  plugins: [
    //require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
}
