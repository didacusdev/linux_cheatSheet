import { styles } from '@/styles';
import CommandCard from '@components/CommandCard';
import type { LinuxCommand } from '@/data/linuxCommands';

interface CategorySectionProps {
  id: string;
  icon: string;
  name: string;
  commands: LinuxCommand[];
  onCopy: (text: string) => void;
}

/**
 * @file CategorySection.tsx
 * @description Sección de categoría que agrupa comandos bajo un encabezado con icono.
 * Renderiza un grid de CommandCard para cada comando de la categoría.
 * @param| {string} id - Identificador único de la categoría (usado como anchor para scroll).
 * @param| {string} icon - Emoji representativo de la categoría.
 * @param| {string} name - Nombre visible de la categoría.
 * @param| {LinuxCommand[]} commands - Lista de comandos pertenecientes a la categoría.
 * @param| {function} onCopy - Función callback para copiar texto al portapapeles.
 * @example
 *   <CategorySection
 *     id="archivos"
 *     icon="📁"
 *     name="Gestión de Archivos"
 *     commands={commands}
 *     onCopy={handleCopy}
 *   />
 */
const CategorySection = ({ id, icon, name, commands, onCopy }: CategorySectionProps) => {
  return (
    <section id={id} className={styles.category.section}>
      {/* Encabezado de categoría */}
      <h2 className={styles.category.title}>
        <span className={styles.category.icon}>{icon}</span>
        {name}
      </h2>

      {/* Grid de tarjetas de comandos */}
      <div className={styles.category.grid}>
        {commands.map((cmd) => (
          <CommandCard
            key={cmd.command}
            command={cmd.command}
            description={cmd.description}
            example={cmd.example}
            examples={cmd.examples}
            onCopy={onCopy}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
