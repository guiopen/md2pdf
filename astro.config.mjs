// @ts-check
import { defineConfig } from "astro/config"

import solidJs from "@astrojs/solid-js"

import playformCompress from "@playform/compress"

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs(), playformCompress()],
})
