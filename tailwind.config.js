/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
      themes: [
        {
          doctortheme: {
          
            primary: "#00008b",
            secondary: "#FF5733",
            accent: "#FFFDD0",
            neutral: "#3D4451",
            "base-100": "#FFFFFF",
          },
        },
      ],
    },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
