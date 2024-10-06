/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        "slide-logos": {
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
      },
      animation: {
        "slide-logos": "slide-logos 5s linear infinite",
      },

      plugins: [],
    },
  },
};
