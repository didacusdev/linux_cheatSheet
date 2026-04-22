import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // <- Reglas básicas de JS (variables no usadas, sintaxis correcta, etc.)
      tseslint.configs.recommended, // <- Reglas específicas de TypeScript (tipos, generics, nullability, etc.)
      reactHooks.configs['recommended-latest'], // <- Reglas para React Hooks (dependencias de useEffect, reglas de hooks, etc.)
      reactRefresh.configs.vite, // <- Evite exports incorrectos que rompen el Hot Module Replacement (Sustitución del módulo caliente) de Vite en React.
    ],
    languageOptions: {
      ecmaVersion: 2024, // <- Permite sintaxis moderna de JavaScript (ES2024)
      globals: globals.browser, // <- Tiene acceso a globales del navegador (window, document, etc.) sin marcarlos como error.
    },
    rules: {
      // Todas las reglas aquí
      'no-unused-vars': 'error', // ← No permitir variables no utilizadas
      'no-undef': 'error', // ← No permitir variables no definidas
      'prefer-const': 'error', // ← Preferir const sobre let
      'no-var': 'error', // ← No permitir var
      'eqeqeq': 'error', // ← Usar siempre === y !==
      'no-console': 'warn', // ← Advertencia para no dejar console.log en producción
      'indent': ['error', 2], // ← Indentación de 2 espacios
      'no-tabs': 'error', // ← No permitir tabulaciones
      'no-mixed-spaces-and-tabs': 'error', // ← No mezclar espacios y tabulaciones
      'no-trailing-spaces': 'error', // ← No permitir espacios al final de la línea

      // Manejo de longitudes de línea
      'max-len': ['error', {
        'code': 160 ,
        'ignoreTemplateLiterals': true, // ← Excepción para template strings
        'ignoreUrls': true, // ← Excepción para URLs largas
        'ignoreRegExpLiterals': true, // ← Excepción para expresiones regulares
        'ignoreStrings': false, // ← No ignorar cadenas de texto normales
        'ignoreComments': true, // ← No ignorar comentarios
      }], // ← Máximo 130 caracteres por línea
      'quotes': ['error', 'single'], // ← Usar comillas simples
      'prefer-template': 'error', // ← Preferir plantillas literales sobre concatenación
      'semi': ['error', 'always'], // ← Siempre usar punto y coma

      // Manejo de líneas vacías
      'no-multiple-empty-lines': ['error', {
        'max': 2,           // ← Máximo 2 líneas vacías consecutivas
        'maxEOF': 1,        // ← Máximo 1 línea vacía al final del archivo
        'maxBOF': 0         // ← 0 líneas vacías al inicio del archivo
      }],
    }  
  },
])
//   {
//     files: ['**/*.{js,mjs,cjs}'],
//     plugins: { js },
//     extends: ['js/recommended'],
//     languageOptions: {
//       ecmaVersion: 2024,
//       sourceType: 'module',
//       globals: { ...globals.node }
//     },
//     rules: {
//       // Todas las reglas aquí
//       'no-unused-vars': 'error', // ← No permitir variables no utilizadas
//       'no-undef': 'error', // ← No permitir variables no definidas
//       'prefer-const': 'error', // ← Preferir const sobre let
//       'no-var': 'error', // ← No permitir var
//       'eqeqeq': 'error', // ← Usar siempre === y !==
//       'no-console': 'warn', // ← Advertencia para no dejar console.log en producción
//       'indent': ['error', 2], // ← Indentación de 2 espacios
//       'no-tabs': 'error', // ← No permitir tabulaciones
//       'no-mixed-spaces-and-tabs': 'error', // ← No mezclar espacios y tabulaciones
//       'no-trailing-spaces': 'error', // ← No permitir espacios al final de la línea

//       // Manejo de longitudes de línea
//       'max-len': ['error', {
//         'code': 160 ,
//         'ignoreTemplateLiterals': true, // ← Excepción para template strings
//         'ignoreUrls': true, // ← Excepción para URLs largas
//         'ignoreRegExpLiterals': true, // ← Excepción para expresiones regulares
//         'ignoreStrings': false, // ← No ignorar cadenas de texto normales
//         'ignoreComments': true, // ← No ignorar comentarios
//       }], // ← Máximo 130 caracteres por línea
//       'quotes': ['error', 'single'], // ← Usar comillas simples
//       'prefer-template': 'error', // ← Preferir plantillas literales sobre concatenación
//       'semi': ['error', 'always'], // ← Siempre usar punto y coma

//       // Manejo de líneas vacías
//       'no-multiple-empty-lines': ['error', {
//         'max': 2,           // ← Máximo 2 líneas vacías consecutivas
//         'maxEOF': 1,        // ← Máximo 1 línea vacía al final del archivo
//         'maxBOF': 0         // ← 0 líneas vacías al inicio del archivo
//       }],
//     }
//   }
// ]);