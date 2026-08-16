/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-slide-in": {
          from: {
            opacity: "0",
            filter: "blur(12px)",
            transform: "translateY(-1.25rem)",
          },
          to: {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
        "hero-blur-fade": {
          from: {
            opacity: "0",
            filter: "blur(28px)",
            transform: "scale(1.06)",
          },
          to: {
            opacity: "1",
            filter: "blur(0)",
            transform: "scale(1)",
          },
        },
        "menu-item-in": {
          from: {
            opacity: "0",
            transform: "translateY(1.25rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "hero-blur-fade":
          "hero-blur-fade 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-slide-in":
          "fade-slide-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards",
        "menu-item-in":
          "menu-item-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      zIndex: {
        chrome: "10",
        overlay: "20",
        toggle: "30",
        cursor: "9999",
      },
    },
  },
  plugins: [],
};
