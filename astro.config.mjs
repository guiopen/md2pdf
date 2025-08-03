// @ts-check
import { defineConfig } from "astro/config"

import playformCompress from "@playform/compress"

// https://astro.build/config
export default defineConfig({
	integrations: [playformCompress()],
	i18n: {
		locales: ["en", "pt-br"],
		defaultLocale: "en",
	}
})
