// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fransgpasse.github.io",
  base: "/erlands-portfolio",
  trailingSlash: "always",
  integrations: [tailwind({ applyBaseStyles: false })],
});
