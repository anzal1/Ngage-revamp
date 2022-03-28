module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arimo"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
