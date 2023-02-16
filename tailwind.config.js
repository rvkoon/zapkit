/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#3B4768",
        "primary-blue-light": "#606D92",
        "primary-blue-extra-light": "#EAEDF3",
        "text-primary": "#384055",
        "text-secondary": "#FFF",
        "text-light": "#9C9FAA",
        purple: "#1C102C",
        "pink-light": "#F1CFF4",
      },
      spacing: {
        05: "4px",
        1: "8px",
        15: "12px",
        2: "16px",
        25: "20px",
        3: "24px",
        35: "28px",
        4: "32px",
        45: "36px",
        5: "40px",
        55: "44px",
        6: "48px",
        65: "52px",
        7: "56px",
        75: "60px",
        8: "64px",
        85: "68px",
        9: "72px",
        95: "76px",
        10: "80px",
      },
      padding: {
        base: "14px",
      },
      borderRadius: {
        base: "14px",
      },
      width: {
        shortBox: "300px",
        container: "320px",
        containerWide: "660px",
      },
      boxShadow: {
        innerCustom: "0 0 0 1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
