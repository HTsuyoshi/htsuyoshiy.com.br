import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5173,
		host: '0.0.0.0',
		allowedHosts: ['4f23-179-215-185-57.ngrok-free.app']
	},
})
