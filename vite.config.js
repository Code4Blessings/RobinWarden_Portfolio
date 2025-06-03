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
        todo: resolve(__dirname, 'todo.html'),
        spotify: resolve(__dirname, 'spotify.html'),
        farmFresh: resolve(__dirname, 'farmFresh.html'),
        catFacts: resolve(__dirname, 'catFacts.html'),
        rta: resolve(__dirname, 'rta.html'),
        cozyAnimals: resolve(__dirname, 'cozyAnimals.html'),
        code4serenity: resolve(__dirname, 'code4serenity.html'),
        logo: resolve(__dirname, 'logo.html'),
        landingPage: resolve(__dirname, 'landingPage.html')
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

