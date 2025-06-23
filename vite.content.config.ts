import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// import solidPlugin from 'vite-plugin-solid';
import { resolve } from 'path';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/lib')
		}
	},
	plugins: [tailwindcss(), svelte()],
	build: {
		rollupOptions: {
			input: {
				content: resolve(__dirname, 'src/content.ts')
			},
			output: {
				format: 'iife', // Формат IIFE для Chrome Extensions
				entryFileNames: '[name].js', // content.js, background.js
				chunkFileNames: 'assets-content/[name]-[hash].js',
				assetFileNames: 'assets-content/[name]-[hash][extname]'
			}
		},
		outDir: 'cabal-extension-dist', // Вывод в ту же папку dist
		emptyOutDir: false, // Не очищаем dist, чтобы сохранить HTML-файлы
		target: 'esnext',
		minify: false, // Отключаем минификацию для отладки (опционально)
		sourcemap: true // Включаем sourcemaps для отладки
	}
});

// import { svelte } from '@sveltejs/vite-plugin-svelte';
// import tailwindcss from '@tailwindcss/vite';
// import path from 'path';

// https://vite.dev/config/
// export default defineConfig({
//     resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src/lib'),
//     },
//   },
//   plugins: [
//     tailwindcss(),
//     svelte()
//   ],
// })
