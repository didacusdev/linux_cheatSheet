import { styles } from '@/styles';
import MiniTerminal from '@/components/MiniTerminal';
import { type TerminalExample } from '@/data/linuxCommands';

interface CommandCardProps {
  command: string;
  description: string;
  example?: string;
  examples?: TerminalExample[];
  onCopy: (text: string) => void;
}

/**
 * @file CommandCard.tsx
 * @description Tarjeta individual de un comando Linux con botón de copiado y mini terminales interactivas.
 * Si el comando tiene `examples` definidos, muestra una mini terminal por cada uno con botón RUN.
 * Si solo tiene `example` (formato antiguo), muestra el bloque de código clásico.
 * @param command - El nombre del comando Linux a mostrar.
 * @param description - Descripción del funcionamiento del comando.
 * @param example - Ejemplo simple opcional (formato legacy).
 * @param examples - Lista de ejemplos con mini terminal interactiva.
 * @param onCopy - Función callback para copiar texto al portapapeles.
 * @example
 *   <CommandCard
 *     command="grep -r"
 *     description="Busca texto en carpetas"
 *     examples={[{ label: "Buscar TODOs", command: "grep -r 'TODO' ./src", output: "./src/utils.ts: TODO" }]}
 *     onCopy={handleCopy}
 *   />
 */
const CommandCard = ({ command, description, example, examples, onCopy }: CommandCardProps) => {
  return (
    <div className={styles.card.container}>
      {/* Nombre del comando */}
      <h3 className={styles.card.title}>{command}</h3>

      {/* Descripción */}
      <p className={styles.card.description}>{description}</p>

      {/* Mini terminales interactivas (formato nuevo) */}
      {examples && examples.length > 0 && (
        <div className="flex flex-col gap-3">
          {examples.map((ex, i) => (
            <MiniTerminal
              key={i}
              label={ex.label}
              command={ex.command}
              output={ex.output}
            />
          ))}
        </div>
      )}

      {/* Bloque del comando principal (solo si NO hay examples) */}
      {!examples && (
        <div className={styles.card.codeBlock}>
          <code className={styles.card.code}>$ {command}</code>
          <button
            className={styles.card.copyBtn}
            onClick={() => onCopy(command)}
            aria-label={`Copiar comando: ${command}`}
          >
            Copiar
          </button>
        </div>
      )}

      {/* Ejemplo legacy (solo si NO hay examples) */}
      {!examples && example && (
        <div className={styles.card.exampleBlock}>
          <span className={styles.card.exampleLabel}>EJEMPLO:</span>
          <div className={styles.card.exampleCode}>
            <code className={styles.card.exampleText}>{example}</code>
            <button
              className={styles.card.exampleCopyBtn}
              onClick={() => onCopy(example)}
              aria-label={`Copiar ejemplo: ${example}`}
            >
              Copiar
            </button>
          </div>
        </div>
      )}

      {/* Botón copiar cuando hay mini terminales */}
      {examples && examples.length > 0 && (
        <button
          className={`${styles.card.copyBtn} self-end`}
          onClick={() => onCopy(examples[0].command)}
          aria-label={`Copiar comando: ${examples[0].command}`}
        >
          Copiar
        </button>
      )}
    </div>
  );
};

export default CommandCard;

