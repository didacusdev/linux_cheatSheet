---
name: formato_ddev
description: "A skill to allow copilot to write code using the Didacausdev´s code style"
---

# Formato DDEV
La skill está diseñada para ayudar a Copilot a escribir código siguiendo el estilo de código utilizado por didacusdev, estos estilos de código están definidos en los archivos eslint.config.js y tsconfig.app.json del proyecto linux_cheatSheet.
Apoyate en la estructura de proyectos del mismo tipo de didacusdev: 
- https://docker.diegorodriguez.dev/
- https://didacusdev.github.io/Angular_CLI_Cheatsheets/

y en el estilo y paleta de colores del portfolio de didacusdev:
- https://diegorodriguez.dev/

## Estructura del proyecto
La estructura inicial del proyecto es la siguiente:

```plaintext
linux_cheatSheet/
├── .github/
│   └── skills/
│       └── formato_ddev/
│           └── SKILL.md
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── views/
|   |    └── Home.tsx|
|   |    └── Error404.tsx|
│   ├── assets/
│   ├── styles.ts 
│   ├── index.css
│   ├── Home.tsx
│   └── main.tsx
├── eslint.config.js
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
├── tsconfig.json
├── tsconfig.node.json
└── tsconfig.app.json
```

## Guidelines
- El estilo de codigo debe respetar las reglas de eslint en el archivo eslint.config.js
- Se deben usar importaciones con los alias definidos en el tsconfig.json
- Los estilos deben ser escritos usando tailwindcss en el objeto styles en styles.js
- Si necesitas alguna multimedia pidela describiendola, indicando el nombre deseado y el formato, por ejemplo: "Necesito una imagen del icono de ubuntu en formato png llamada ubuntu_icon.png"
- El código debe ser escrito en TypeScript y React
- El código debe ser escrito usando funciones flecha y componentes funcionales de React
- El código debe ser escrito usando hooks de React (cuando sea necesario) y siguiendo las reglas de los hooks
- El código debe ser escrito usando la sintaxis moderna de JavaScript (ES2024)
- El código debe ser escrito siguiendo las mejores prácticas de React y TypeScript
- El código debe ser escrito siguiendo las mejores prácticas de accesibilidad y usabilidad
- Se debe añadir docstrings a las funciones y componentes para explicar su propósito y uso
- Se deben dejar comentarios descriptivos breves en el código para explicar partes complejas o importantes
- El código debe ser escrito de manera clara y legible, evitando complejidad innecesaria
- El código debe ser escrito de manera modular y reutilizable, evitando la duplicación de código