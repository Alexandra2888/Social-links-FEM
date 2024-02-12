/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: "Figtree",
      },
      fontSize: {
        fs: "16px",
      },
      fontWeight: {
        "fw-400":400,
        "fw-600": 600,
        "fw-700": 700,
      },
    },
  },
  plugins: [require("tailwindcss")],
};
