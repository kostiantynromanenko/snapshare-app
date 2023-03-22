import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    global: {},
  },
  resolve: {
    // fix the issue with @aws-amplify
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
});
