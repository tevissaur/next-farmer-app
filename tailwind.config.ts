import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      colors: {
        'viridian': "#5B8E7D",
        'highlight-red': '#BC4B51',
        'sandy-brown': '#F4A259',
        'flax': '#F4E285',
        'olivine': '#8CB369',
        'french-gray': '#CFCFDD',
        'cool-gray': '#777792'
      },
      borderColor: {
        'viridian': "#5B8E7D",
        'highlight-red': '#BC4B51',
        'sandy-brown': '#F4A259',
        'flax': '#F4E285',
        'olivine': '#8CB369',
        'french-gray': '#CFCFDD',
        'cool-gray': '#777792'
      },
      textColor: {
        'viridian': "#5B8E7D",
        'highlight-red': '#BC4B51',
        'sandy-brown': '#F4A259',
        'flax': '#F4E285',
        'olivine': '#8CB369',
        'french-gray': '#CFCFDD',
        'cool-gray': '#777792'
      },
      boxShadow: {
        outline: "1px 1px 0 0px black",
        "outline-profile": "1px 1px 0 0px black",
      },
      borderWidth: {
        "1": "1px",
      },
      translate: {
        "reverse-0.5": "-0.15rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
