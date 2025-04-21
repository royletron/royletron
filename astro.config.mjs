import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://royletron.dev",
  base: "/",
  integrations: [mdx(), react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["6e31-194-120-133-8.ngrok-free.app"],
    },
  },
});
