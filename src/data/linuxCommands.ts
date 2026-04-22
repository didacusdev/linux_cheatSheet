
/** Interfaz para un ejemplo de mini terminal interactivo */
export interface TerminalExample {
  /** Etiqueta descriptiva del ejemplo (ej: "Búsqueda básica") */
  label?: string;
  /** El comando exacto a mostrar en la mini terminal */
  command: string;
  /** La salida simulada que aparece al pulsar RUN */
  output: string;
}

/** Interfaz para un comando individual */
export interface LinuxCommand {
  command: string;
  description: string;
  /** @deprecated Usa `examples` para mostrar mini terminales interactivas */
  example?: string;
  /** Lista de ejemplos con mini terminal interactiva */
  examples?: TerminalExample[];
}

/** Interfaz para una categoría de comandos */
export interface CommandCategory {
  id: string;
  icon: string;
  name: string;
  commands: LinuxCommand[];
}

/** Top 100+ comandos de Linux organizados por categoría */
/**
 * @file linuxCommands.ts
 * @description Definición de los comandos de Linux organizados por categorías.
 * Cada categoría tiene un icono, nombre y lista de comandos con su descripción y ejemplos.
 * @example
 *   import { linuxCommands } from '@/data/linuxCommands';
 *   linuxCommands.map((cat) => console.log(cat.name, cat.commands.length));
 */
export const linuxCommands: CommandCategory[] = [
  // ──────────────────────────────────────────────────────
  // 🛠️ Comandos Maestros de Personalización de Terminal
  // ──────────────────────────────────────────────────────
  {
    id: 'maestros',
    icon: '🛠️',
    name: 'Comandos Maestros de Terminal',
    commands: [
      {
        command: 'sudo nano ~/.bashrc',
        description: 'Abre el archivo de configuración de tu sesión de usuario. Se edita para añadir alias, variables de entorno (como el PATH) o cambiar el comportamiento de la terminal de forma permanente.',
      },
      {
        command: 'source ~/.bashrc',
        description: '"Recarga" el archivo de configuración en la sesión actual. Sin esto, los cambios no funcionarán hasta que cierres y abras la terminal.',
      },
      {
        command: 'sudo nano /etc/environment',
        description: 'Archivo global de variables de entorno para todos los usuarios del sistema. Ideal para definir PATH o JAVA_HOME de forma permanente.',
      },
      {
        command: 'sudo nano ~/.profile',
        description: 'Archivo de configuración que se ejecuta al iniciar sesión. Alternativa a .bashrc para configuración de login.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 📂 Configuración del Entorno y Shell
  // ──────────────────────────────────────────────────────
  {
    id: 'entorno',
    icon: '📂',
    name: 'Configuración del Entorno y Shell',
    commands: [
      {
        command: 'alias',
        description: 'Crea un atajo para un comando largo.',
        examples: [
          {
            label: 'Crear alias para listar con detalle',
            command: "alias ll='ls -la'",
            output: '(sin salida - alias creado)\n$ ll\ntotal 48\ndrwxr-xr-x 4 user user 4096 abr 20 09:00 src\n-rw-r--r-- 1 user user  220 abr 20 09:00 .bashrc\n-rw-r--r-- 1 user user 3526 abr 20 09:00 .profile',
          },
          {
            label: 'Ver todos los alias activos',
            command: 'alias',
            output: "alias ll='ls -la'\nalias grep='grep --color=auto'\nalias python='python3'\nalias update='sudo apt update && sudo apt upgrade'",
          },
        ],
      },
      {
        command: 'unalias',
        description: 'Elimina un alias temporalmente.',
        example: 'unalias ll',
      },
      {
        command: 'export',
        description: 'Define una variable para procesos hijos. Se usa mucho para configurar tokens o entornos.',
        example: 'export ENV=prod',
      },
      {
        command: 'env',
        description: 'Lista todas las variables de entorno activas.',
      },
      {
        command: 'which',
        description: 'Te dice la ruta exacta del ejecutable que estás usando.',
        example: 'which python3',
      },
      {
        command: 'type -a',
        description: 'Indica si un comando es un alias, una función o un archivo.',
        example: 'type -a ls',
      },
      {
        command: 'whereis',
        description: 'Busca el binario, las fuentes y el manual de un comando.',
        example: 'whereis php',
      },
      {
        command: 'echo $PATH',
        description: 'Muestra las rutas donde el sistema busca ejecutables. Vital para saber por qué un comando "no se encuentra".',
      },
      {
        command: 'history -c',
        description: 'Borra el historial de comandos de la sesión actual.',
      },
      {
        command: '!!',
        description: 'Ejecuta el último comando otra vez (muy útil con sudo).',
        example: 'sudo !!',
      },
      {
        command: 'history | grep',
        description: 'Busca un comando específico que escribiste antes.',
        examples: [
          {
            label: 'Encontrar comandos SSH usados',
            command: 'history | grep "ssh"',
            output: '  234  ssh user@192.168.1.10\n  301  ssh-keygen -t ed25519 -C "mi@email.com"\n  445  ssh-copy-id user@servidor.com\n  512  ssh -i ~/.ssh/id_rsa user@prod-server',
          },
        ],
      },
      {
        command: 'chsh -s',
        description: 'Cambia tu shell por defecto (ej. de bash a zsh).',
        example: 'chsh -s /bin/zsh',
      },
      {
        command: 'clear',
        description: 'Limpia la pantalla (atajo: Ctrl + L).',
      },
      {
        command: 'exit',
        description: 'Cierra la sesión de terminal actual.',
      },
      {
        command: 'set -o vi',
        description: 'Permite usar comandos de Vim para moverte por la línea de comandos.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 📁 Gestión de Archivos y Navegación
  // ──────────────────────────────────────────────────────
  {
    id: 'archivos',
    icon: '📁',
    name: 'Gestión de Archivos y Navegación',
    commands: [
      {
        command: 'ls -lh',
        description: 'Lista archivos con tamaño en formato "humano" (KB, MB).',
        examples: [
          {
            label: 'Listar archivos del directorio actual',
            command: 'ls -lh',
            output: 'total 48K\ndrwxr-xr-x 4 user user 4.0K abr 20 09:00 src\ndrwxr-xr-x 2 user user 4.0K abr 20 09:00 public\n-rw-r--r-- 1 user user  12K abr 20 09:00 README.md\n-rw-r--r-- 1 user user 2.1K abr 20 09:00 package.json\n-rw-r--r-- 1 user user 1.3K abr 20 09:00 vite.config.ts',
          },
          {
            label: 'Listar archivos ocultos también',
            command: 'ls -lha',
            output: 'total 56K\ndrwxr-xr-x  6 user user 4.0K abr 20 09:00 .\ndrwxr-xr-x 12 user user 4.0K abr 18 10:30 ..\n-rw-r--r--  1 user user  220 abr 18 10:30 .gitignore\n-rw-r--r--  1 user user  87K abr 19 14:00 .env\ndrwxr-xr-x  4 user user 4.0K abr 20 09:00 src',
          },
        ],
      },
      {
        command: 'cd -',
        description: 'Vuelve a la última carpeta donde estuviste.',
      },
      {
        command: 'mkdir -p',
        description: 'Crea una estructura de carpetas anidadas de un golpe.',
        example: 'mkdir -p proyecto/src/assets',
      },
      {
        command: 'rm -rf',
        description: 'Borra todo sin preguntar. Úsalo con miedo.',
        example: 'rm -rf ./tmp',
      },
      {
        command: 'cp -rp',
        description: 'Copia preservando permisos y fechas originales.',
        example: 'cp -rp carpeta_v1 carpeta_v2',
      },
      {
        command: 'mv -u',
        description: 'Mueve archivos solo si el origen es más nuevo que el destino.',
        example: 'mv -u file.txt backup/',
      },
      {
        command: 'touch -t',
        description: 'Crea un archivo o cambia su fecha a una específica.',
        example: 'touch -t 202603190900 file.txt',
      },
      {
        command: 'find . -type d',
        description: 'Busca solo directorios.',
        example: 'find . -type d -name "node*"',
      },
      {
        command: 'find . -size +100M',
        description: 'Busca archivos de más de 100MB.',
        examples: [
          {
            label: 'Buscar archivos grandes en el sistema',
            command: 'find . -size +100M',
            output: './node_modules/.cache/webpack/bundle.pack\n./backups/db_backup_2024.sql\n./dist/assets/vendor.chunk.js\n./videos/demo_recording.mp4',
          },
          {
            label: 'Buscar y mostrar tamaño',
            command: 'find . -size +100M -exec du -sh {} +',
            output: '312M  ./node_modules/.cache/webpack/bundle.pack\n245M  ./backups/db_backup_2024.sql\n128M  ./videos/demo_recording.mp4',
          },
        ],
      },
      {
        command: 'locate -i',
        description: 'Busca archivos en todo el sistema (ignora mayúsculas).',
        example: 'locate -i config.xml',
      },
      {
        command: 'basename',
        description: 'Extrae el nombre del archivo de una ruta larga.',
        example: 'basename /etc/nginx/nginx.conf → nginx.conf',
      },
      {
        command: 'dirname',
        description: 'Extrae solo la ruta de la carpeta.',
        example: 'dirname /etc/nginx/nginx.conf → /etc/nginx',
      },
      {
        command: 'stat',
        description: 'Muestra información detallada de un archivo (creación, acceso, inodo).',
        examples: [
          {
            label: 'Ver metadatos completos de un archivo',
            command: 'stat package.json',
            output: '  File: package.json\n  Size: 2148\t\tBlocks: 8\t IO Block: 4096\nregular file\nDevice: 8,1\tInode: 524329\tLinks: 1\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/   user)   Gid: ( 1000/   user)\nAccess: 2024-04-20 09:00:12.000000000 +0200\nModify: 2024-04-19 14:35:07.000000000 +0200\nChange: 2024-04-19 14:35:07.000000000 +0200',
          },
        ],
      },
      {
        command: 'ln -sf',
        description: 'Crea un enlace simbólico forzando el reemplazo si ya existe.',
        example: 'ln -sf /ruta/real link',
      },
      {
        command: 'shred -u',
        description: 'Borra un archivo de forma segura sobrescribiéndolo antes.',
        example: 'shred -u secreto.txt',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 🔍 Lectura y Procesamiento de Texto
  // ──────────────────────────────────────────────────────
  {
    id: 'texto',
    icon: '🔍',
    name: 'Lectura y Procesamiento de Texto',
    commands: [
      {
        command: 'cat -n',
        description: 'Muestra el contenido con números de línea.',
        examples: [
          {
            label: 'Ver script con números de línea',
            command: 'cat -n script.sh',
            output: '     1\t#!/bin/bash\n     2\t\n     3\t# Instalar dependencias\n     4\techo "Instalando..."\n     5\tnpm install\n     6\t\n     7\techo "Listo!"',
          },
        ],
      },
      {
        command: 'grep -r',
        description: 'Busca un texto dentro de todos los archivos de una carpeta.',
        examples: [
          {
            label: 'Buscar TODOs en el código fuente',
            command: 'grep -r "TODO" ./src',
            output: './src/utils/helpers.ts:// TODO: refactorizar esta función\n./src/api/client.ts:// TODO: manejar errores de red\n./src/components/Card.tsx:// TODO: añadir animación de entrada\n./src/views/Home.tsx:// TODO: lazy loading de imágenes',
          },
          {
            label: 'Buscar con número de línea',
            command: 'grep -rn "TODO" ./src',
            output: './src/utils/helpers.ts:12:// TODO: refactorizar esta función\n./src/api/client.ts:45:// TODO: manejar errores de red\n./src/components/Card.tsx:87:// TODO: añadir animación de entrada',
          },
        ],
      },
      {
        command: 'grep -v',
        description: 'Muestra todo lo que no coincide con la búsqueda.',
        examples: [
          {
            label: 'Filtrar líneas de info en logs',
            command: 'grep -v "info" logs.txt',
            output: '[2024-04-20 09:01:33] ERROR  - Conexión rechazada al puerto 5432\n[2024-04-20 09:03:15] WARN   - Tiempo de respuesta alto: 3200ms\n[2024-04-20 09:07:58] ERROR  - Token expirado, requiere autenticación',
          },
          {
            label: 'Excluir líneas vacías y comentarios',
            command: 'grep -v "^#\|^$" config.conf',
            output: 'host=localhost\nport=5432\ndbname=myapp\nuser=admin\npassword=secret123',
          },
        ],
      },
      {
        command: 'less +G',
        description: 'Abre un archivo y va directo al final.',
        example: 'less +G syslog',
      },
      {
        command: 'tail -n 20',
        description: 'Muestra las últimas 20 líneas.',
        examples: [
          {
            label: 'Ver las últimas entradas del log de app',
            command: 'tail -n 20 app.log',
            output: '[09:14:52] INFO  - Servidor iniciado en puerto 3000\n[09:14:53] INFO  - Conectado a PostgreSQL\n[09:15:01] INFO  - GET /api/users 200 (45ms)\n[09:15:01] INFO  - GET /api/products 200 (32ms)\n[09:15:03] WARN  - Rate limit alcanzado para IP 192.168.1.5\n[09:15:04] INFO  - GET /api/orders 200 (78ms)',
          },
          {
            label: 'Seguir el log en tiempo real',
            command: 'tail -f app.log',
            output: '[09:15:10] INFO  - POST /api/login 200 (124ms)\n[09:15:11] INFO  - Sesión iniciada: user@example.com\n[09:15:12] INFO  - GET /api/dashboard 200 (56ms)\n(Siguiendo... Ctrl+C para salir)',
          },
        ],
      },
      {
        command: 'head -n 5',
        description: 'Muestra las primeras 5 líneas.',
        example: 'head -n 5 README.md',
      },
      {
        command: "sed 's/old/new/g'",
        description: 'Cambia texto en el flujo de salida.',
        example: "cat f.txt | sed 's/http/https/g'",
      },
      {
        command: "awk '{print $1}'",
        description: 'Imprime solo la primera columna de una salida.',
        example: "ls -l | awk '{print $1}'",
      },
      {
        command: 'cut -c 1-10',
        description: 'Corta los primeros 10 caracteres de cada línea.',
        example: 'cut -c 1-10 archivo.txt',
      },
      {
        command: 'sort -u',
        description: 'Ordena y elimina duplicados.',
        examples: [
          {
            label: 'Ordenar y deduplicar una lista',
            command: 'sort -u lista.txt',
            output: 'angular\ndocker\ngolang\njava\nkubernetes\nnode\npython\nreact\ntypescript',
          },
          {
            label: 'Ordenar IPs únicas de un log',
            command: 'grep -o "[0-9.]\\+" access.log | sort -u',
            output: '10.0.0.1\n192.168.1.5\n192.168.1.22\n192.168.1.100\n203.0.113.42',
          },
        ],
      },
      {
        command: 'uniq -d',
        description: 'Muestra solo las líneas que están duplicadas.',
        example: 'uniq -d error.log',
      },
      {
        command: 'wc -w',
        description: 'Cuenta las palabras de un archivo.',
        example: 'wc -w ensayo.md',
      },
      {
        command: 'diff -u',
        description: 'Compara archivos mostrando las diferencias de forma legible.',
        example: 'diff -u config.old config.new',
      },
      {
        command: "tr -d '\\r'",
        description: 'Borra los saltos de línea de Windows (CR) para que funcionen en Linux.',
        example: "tr -d '\\r' < script_win.sh > script_linux.sh",
      },
      {
        command: 'tee',
        description: 'Envía la salida a un archivo y a la pantalla a la vez.',
        example: 'ls | tee archivos.txt',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 🛡️ Permisos y Usuarios (Admin)
  // ──────────────────────────────────────────────────────
  {
    id: 'permisos',
    icon: '🛡️',
    name: 'Permisos y Usuarios (Admin)',
    commands: [
      {
        command: 'sudo -i',
        description: 'Te convierte en root con el entorno de root.',
      },
      {
        command: 'sudo -u usuario',
        description: 'Ejecuta un comando como si fueras otro usuario.',
        example: 'sudo -u www-data php script.php',
      },
      {
        command: 'chmod 755',
        description: 'Permisos estándar: tú todo, el resto solo lee/ejecuta.',
        examples: [
          {
            label: 'Hacer un script ejecutable',
            command: 'chmod 755 deploy.sh',
            output: '(sin salida - operación exitosa)\n$ ls -l deploy.sh\n-rwxr-xr-x 1 user user 1243 abr 20 09:00 deploy.sh',
          },
        ],
      },
      {
        command: 'chmod 600',
        description: 'Solo tú puedes leer y escribir (ideal para llaves SSH).',
        example: 'chmod 600 id_rsa',
      },
      {
        command: 'chown user:group',
        description: 'Cambia dueño y grupo a la vez.',
        example: 'sudo chown diego:diego index.html',
      },
      {
        command: 'getfacl',
        description: 'Muestra los permisos detallados (Listas de Control de Acceso).',
      },
      {
        command: 'groups',
        description: 'Muestra todos los grupos a los que pertenece tu usuario.',
      },
      {
        command: 'id -u',
        description: 'Muestra tu ID de usuario numérico.',
      },
      {
        command: 'visudo -c',
        description: 'Comprueba si el archivo /etc/sudoers tiene errores de sintaxis antes de guardar.',
      },
      {
        command: 'who',
        description: 'Muestra quién está conectado al sistema.',
        examples: [
          {
            label: 'Ver usuarios activos en el servidor',
            command: 'who',
            output: 'diego    pts/0        2024-04-20 09:00 (192.168.1.10)\nanaAdmin pts/1        2024-04-20 09:12 (10.0.0.50)\nroot     tty1         2024-04-20 08:55',
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 🖥️ Procesos y Sistema
  // ──────────────────────────────────────────────────────
  {
    id: 'procesos',
    icon: '🖥️',
    name: 'Procesos y Sistema',
    commands: [
      {
        command: 'ps -ef',
        description: 'Lista todos los procesos con jerarquía.',
      },
      {
        command: 'pgrep',
        description: 'Devuelve el ID de un proceso por su nombre.',
        example: 'pgrep nginx',
      },
      {
        command: 'killall',
        description: 'Mata todos los procesos que tengan el mismo nombre.',
        example: 'killall node',
      },
      {
        command: 'top -u usuario',
        description: 'Monitoriza procesos solo de un usuario.',
      },
      {
        command: 'df -Th',
        description: 'Muestra discos, tamaños y el tipo de sistema de archivos (ext4, etc).',
      },
      {
        command: 'du -hc --max-depth=1',
        description: 'Muestra cuánto ocupa cada carpeta en el primer nivel.',
      },
      {
        command: 'free -h',
        description: 'Estado de la RAM en GB/MB.',
        examples: [
          {
            label: 'Ver uso de memoria RAM y swap',
            command: 'free -h',
            output: '               total        used        free      shared  buff/cache   available\nMem:            15Gi       8.2Gi       2.1Gi       512Mi       5.0Gi       6.8Gi\nSwap:          2.0Gi       256Mi       1.7Gi',
          },
        ],
      },
      {
        command: 'uptime -p',
        description: 'Muestra cuánto lleva el sistema encendido de forma bonita.',
      },
      {
        command: 'lsof -i :8080',
        description: 'Te dice qué programa está usando el puerto 8080. Imprescindible.',
        examples: [
          {
            label: 'Ver qué proceso ocupa el puerto 8080',
            command: 'lsof -i :8080',
            output: 'COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnode     1234   user   22u  IPv6  45678      0t0  TCP *:8080 (LISTEN)',
          },
          {
            label: 'Ver todos los puertos en escucha',
            command: 'lsof -i -P -n | grep LISTEN',
            output: 'node      1234 user   22u  IPv6 45678  TCP *:3000 (LISTEN)\nnginx     5678 root   6u   IPv4 56789  TCP *:80 (LISTEN)\nnginx     5678 root   7u   IPv4 56790  TCP *:443 (LISTEN)\npostgres  9012 user   5u   IPv6 67891  TCP *:5432 (LISTEN)',
          },
        ],
      },
      {
        command: 'fuser -k 3000/tcp',
        description: 'Mata el proceso que esté bloqueando el puerto 3000.',
      },
      {
        command: 'systemctl status',
        description: 'Estado de un servicio.',
        example: 'systemctl status ssh',
      },
      {
        command: 'systemctl restart',
        description: 'Reinicia un servicio.',
      },
      {
        command: 'journalctl -xe',
        description: 'Muestra los últimos errores del sistema detallados.',
      },
      {
        command: 'dmesg | tail',
        description: 'Ver los últimos mensajes del hardware/kernel.',
      },
      {
        command: 'lsb_release -a',
        description: 'Muestra exactamente qué versión de Ubuntu tienes.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 🌐 Redes y Transferencia
  // ──────────────────────────────────────────────────────
  {
    id: 'redes',
    icon: '🌐',
    name: 'Redes y Transferencia',
    commands: [
      {
        command: 'curl -X POST',
        description: 'Envía una petición POST a una API.',
        example: 'curl -X POST -d "id=1" url.com',
      },
      {
        command: 'curl -O',
        description: 'Descarga un archivo manteniendo su nombre original.',
      },
      {
        command: 'wget -q',
        description: 'Descarga algo en modo "silencioso" (sin barras de progreso).',
      },
      {
        command: 'ping -i 0.5',
        description: 'Lanza pings cada medio segundo (más rápido).',
      },
      {
        command: 'ssh-keygen -t ed25519',
        description: 'Crea una llave SSH moderna y segura.',
      },
      {
        command: 'ssh-copy-id',
        description: 'Copia tu llave pública a un servidor para entrar sin clave.',
        example: 'ssh-copy-id user@ip',
      },
      {
        command: 'ip route',
        description: 'Muestra la puerta de enlace y tablas de enrutamiento.',
      },
      {
        command: 'nmcli',
        description: 'Herramienta potente para gestionar conexiones de red desde consola.',
      },
      {
        command: 'dig +short',
        description: 'Obtiene solo la IP de un dominio, sin texto extra.',
        example: 'dig +short google.com',
      },
      {
        command: 'mtr',
        description: 'Combina ping y traceroute en vivo.',
        example: 'mtr google.com',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // 📦 Gestión de Paquetes (APT)
  // ──────────────────────────────────────────────────────
  {
    id: 'paquetes',
    icon: '📦',
    name: 'Gestión de Paquetes (APT)',
    commands: [
      {
        command: 'apt list --installed',
        description: 'Lista todo lo que tienes instalado.',
      },
      {
        command: 'apt autoremove',
        description: 'Borra paquetes y dependencias que ya no sirven.',
      },
      {
        command: 'apt clean',
        description: 'Borra los archivos temporales de instalaciones descargadas para ganar espacio.',
      },
      {
        command: 'apt-cache policy',
        description: 'Te dice de qué repositorio viene un programa y qué versiones hay.',
      },
      {
        command: 'add-apt-repository --remove',
        description: 'Elimina un repositorio PPA que ya no quieres.',
      },
    ],
  },

  // ──────────────────────────────────────────────────────
  // ⚡ Automatización y Productividad
  // ──────────────────────────────────────────────────────
  {
    id: 'automatizacion',
    icon: '⚡',
    name: 'Automatización y Productividad',
    commands: [
      {
        command: 'crontab -e',
        description: 'Programa tareas recurrentes (ej. un backup cada noche).',
      },
      {
        command: 'watch -d',
        description: 'Ejecuta un comando repetidamente resaltando los cambios.',
        example: 'watch -d ls -l',
      },
      {
        command: 'xargs',
        description: 'Convierte la salida de un comando en argumentos para el siguiente.',
        example: 'find . -name "*.log" | xargs rm',
      },
      {
        command: 'nohup',
        description: 'Ejecuta un comando que sigue vivo aunque cierres la terminal.',
        example: 'nohup ./backup.sh &',
      },
      {
        command: 'disown',
        description: 'Quita un proceso de la lista de tareas de la shell para que no se cierre al salir.',
      },
      {
        command: 'jobs',
        description: 'Lista los procesos que tienes pausados o en segundo plano en la sesión.',
      },
      {
        command: 'fg %1',
        description: 'Trae al frente el proceso número 1 que estaba en segundo plano.',
      },
      {
        command: 'bg %1',
        description: 'Manda al segundo plano un proceso pausado.',
      },
      {
        command: 'timeout 10s comando',
        description: 'Ejecuta algo pero lo mata si tarda más de 10 segundos.',
      },
      {
        command: 'sleep 5 && comando',
        description: 'Espera 5 segundos y luego ejecuta.',
      },
      {
        command: 'tar -tvf',
        description: 'Lista el contenido de un archivo comprimido sin extraerlo.',
      },
      {
        command: 'grep -oP',
        description: 'Usa expresiones regulares potentes (Perl) para extraer solo trozos de texto.',
      },
      {
        command: 'screen / tmux',
        description: 'Abre terminales persistentes que no mueren si se cae la conexión.',
      },
      {
        command: 'bc',
        description: 'Una calculadora por línea de comandos.',
        example: 'echo "10+10" | bc',
      },
      {
        command: 'man -k',
        description: 'Busca en los manuales por palabra clave.',
        example: 'man -k "partition"',
      },
    ],
  },
];
