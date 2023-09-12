import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default ({ mode }) => {
  const config = {
    plugins: [react(), eslint({ cache: false })],
    base: '/',
    resolve: {
      alias: { '@': '/src' },
    },
  };
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  if (mode === 'production') {
    Object.assign(
      config,
      {
        base: '/ReactTemplate',
        server: {
          proxy: {
            '/api': { target: process.env.VITE_API_URL, changeOrigin: true },
          },
        },
      },
      {},
    );
  }
  return defineConfig(config);
};
