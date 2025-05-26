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
      fontFamily: {
        lt: ["var(--font-lt-saeada)", "sans-serif"],
        lexend: ["var(--font-lexend)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        verseBlue: "var(--verse-blue)",
        verseDisabled: "var(--verse-disabled)",
        maskImage: {
          gradient: "linear-gradient(black calc(100% - 1px), transparent 100%)",
        },
        color0: "var(--color0)",
        color200: "var(--color200)",
        color400: "var(--color400)",
        color600: "var(--color600)",
        color800: "var(--color800)",
        color1000: "var(--color1000)",
        success25: "var(--success25)",
        success100: "var(--success100)",
        warning25: "var(--warning25)",
        warning100: "var(--warning100)",
        failed25: "var(--failed25)",
        failed100: "var(--failed100)",
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
      boxShadow: {
        "inner-custom": "0px 1px 1px 0px #0000001A",
        small: "0px 2px 60px 0px #2FA9EE33",
      },
    },
  },
  plugins: [tailwindCssAnimate],
};
export default config;
