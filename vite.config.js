import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        tech: resolve(__dirname, 'tech.html'),
        work: resolve(__dirname, 'work.html'),
        // Add other HTML files here as needed
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'vercel.json',
          dest: '.'
        }
      ]
    })
  ],
  server: {
    open: true
  }
}); 

