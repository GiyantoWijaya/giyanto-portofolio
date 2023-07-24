/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "name-color": "#83CD29",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        graduate: ["var(--font-graduate)"],
        francoise_one: ["var(--font-francoise-one)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
