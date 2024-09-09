import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#CC1587",
        secondary: "#26538C",
        tertiary: "#00AFF0",
        textlight:"#6B7280",
      },
      transitionDuration: {
        '6000': '6000ms',
      },
    },
  },
  plugins: [],
};
export default config;
