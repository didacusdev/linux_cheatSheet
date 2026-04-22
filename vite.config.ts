import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: './', // <- Define la URL base para la aplicación (http:localhost:5173/ o en producción http://example.com/)
  
  resolve: { // <- resolve le dice a Vite cómo resolver los módulos importados en el código.
    alias: {
      // Esto permite importar archivos desde:
      // - 'src' o 'src/components' usando '@'
      // - 'src/views' usando '@views'
      // - 'src/assets' usando '@assets'
      // - '@components' respectivamente
      // haciendo las importaciones más limpias y fáciles de leer, puede expandirse según las necesidades del proyecto. 
      '@': '/src',
      '@views': '/src/views',
      '@assets': '/src/assets',
      '@components': '/src/components',
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
});