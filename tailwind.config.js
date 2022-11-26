/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
      themes: [
        {
          doctortheme: {
          
            primary: "#4c3277",
            secondary: "#ff4674",
            accent: "#3A4256",
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
