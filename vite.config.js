import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
	// base: '/mubook/', // can just use vite build --base=/my/public/path/., dus yarn build
	// --base=/mubook/ voor gh
	plugins: [vue()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
