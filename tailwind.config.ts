import type { Config } from "tailwindcss";
import tailwindCssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verseColor: "var(--verse-color)",
        verseDisabled: "var(--verse-disabled)",
        maskImage: {
          gradient: "linear-gradient(black calc(100% - 1px), transparent 100%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "change-logo-bg": {
          "0%, 100%": { backgroundImage: "url('/logo/frame1.png')" },
          "25%": { backgroundImage: "url('/logo/frame2.png')" },
          "50%": { backgroundImage: "url('/logo/frame3.png')" },
          "75%": { backgroundImage: "url('/logo/frame4.png')" },
        },
        "change-logo-bg-dark": {
          "0%, 100%": { backgroundImage: "url('/logo/frame1-dark.png')" },
          "25%": { backgroundImage: "url('/logo/frame2-dark.png')" },
          "50%": { backgroundImage: "url('/logo/frame3-dark.png')" },
          "75%": { backgroundImage: "url('/logo/frame4-dark.png')" },
        },
      },
      animation: {
        "logo-bg": "change-logo-bg 6s linear infinite",
        "logo-bg-dark": "change-logo-bg-dark 6s linear infinite",
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default config;
