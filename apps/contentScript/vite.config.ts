import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/lib')
		}
	},
	plugins: [tailwindcss(), svelte()],
	build: {
		outDir: './dev-dist' // Вывод в ту же папку dist
	}
});
