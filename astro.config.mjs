// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";
import vue from "@astrojs/vue";
import unocss from "@unocss/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: { mdi: ["*"], fa: ["*"] },
    }),
    sitemap(),
    markdoc(),
    vue({ jsx: true }),
    unocss(),
  ],
});
