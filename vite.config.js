import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Prova2_WEB1/', // Defina o nome do seu repositório aqui
  root: 'public', // Define que a pasta raiz será "public"
  build: {
    outDir: '../dist'} // Define onde será gerada a build final
});