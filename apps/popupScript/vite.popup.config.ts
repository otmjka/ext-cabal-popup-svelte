import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../contentScript/src/lib/'),
      '@src': path.resolve(__dirname, '../contentScript/src/'),
		}
	},
	plugins: [tailwindcss(), svelte()],
	build: {
		rollupOptions: {
			input: {
				popup: path.resolve(__dirname, 'popup.html'),
			},
			output: {
				format: 'iife', // Формат IIFE для Chrome Extensions
				entryFileNames: '[name].js', // content.js, background.js
				chunkFileNames: 'assets-content/[name]-[hash].js',
				assetFileNames: 'assets-content/[name]-[hash][extname]'
			}
		},
		outDir: '../../dist', // Вывод в ту же папку dist
		emptyOutDir: false, // Не очищаем dist, чтобы сохранить HTML-файлы
		target: 'esnext',
		minify: false, // Отключаем минификацию для отладки (опционально)
		sourcemap: true // Включаем sourcemaps для отладки
	}
});

// import { defineConfig } from 'vite';
// import solidPlugin from 'vite-plugin-solid';
// import { resolve } from 'path';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [tailwindcss(), solidPlugin()],
//   build: {
//     rollupOptions: {
//       input: {
//         popup: resolve(__dirname, 'popup.html'),
//       },
//       output: {
//         format: 'iife', // Формат IIFE для Chrome Extensions
//         entryFileNames: '[name].js', // content.js, background.js
//         chunkFileNames: 'assets-content/[name]-[hash].js',
//         assetFileNames: 'assets-content/[name]-[hash][extname]',
//       },
//     },
//     outDir: 'dist', // Вывод в ту же папку dist
//     emptyOutDir: false, // Не очищаем dist, чтобы сохранить HTML-файлы
//     target: 'esnext',
//     minify: false, // Отключаем минификацию для отладки (опционально)
//     sourcemap: true, // Включаем sourcemaps для отладки
//   },
// });

