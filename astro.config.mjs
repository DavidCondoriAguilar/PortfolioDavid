import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  base: '/PortfolioDavid/', // Ajusta este valor al nombre de tu repositorio
  site: 'https://DavidCondoriAguilar.github.io/PortfolioDavid/', // Ajusta a tu URL de GitHub Pages
});
