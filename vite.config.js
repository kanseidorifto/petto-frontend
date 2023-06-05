import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return {
		server: {
			proxy: {
				'/api': {
					target: process.VITE_APP_API_URL,
					changeOrigin: true,
					secure: false,
					ws: true,
					rewrite: (path) => path.replace(/^\/api/, ''),
				},
			},
		},
		plugins: [react()],
	};
});
