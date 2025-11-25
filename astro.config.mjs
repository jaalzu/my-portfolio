import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from 'astro-icon'; // <-- IMPORTA LA LIBRERÍA
export default defineConfig({
  integrations: [react(),icon({
      // ¡Añade esta opción!
      include: {
        devicon: ['*'], // Carga TODOS los iconos de la colección 'devicon'
        // Puedes añadir otras colecciones si las necesitas, por ejemplo:
        // 'simple-icons': ['*'],
      }
    }),],
});
