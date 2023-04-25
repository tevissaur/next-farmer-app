import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        'outline': '1px 1px 0 0px black',
        'outline-profile': '1px 1px 0 0px black',
      },
      borderWidth: {
        '1': '1px',
      },
      translate:{
        'reverse-0.5': '-0.15rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
