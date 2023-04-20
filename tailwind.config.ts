import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'outline': '3px 3px 0 0px black',
      },
      borderWidth: {
        '1': '1px',
      },
      translate:{
        'reverse-1': '-0.25rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
