import { useState } from 'react';
import { styles } from '@/styles';

interface MiniTerminalProps {
  /** El comando a mostrar en la mini terminal */
  command: string;
  /** La salida simulada al ejecutar el comando */
  output: string;
  /** Etiqueta descriptiva opcional del ejemplo */
  label?: string;
}

/**
 * @file MiniTerminal.tsx
 * @description Componente de mini terminal Linux interactiva.
 * Muestra una ventana de terminal estilo macOS/Linux con semáforo de colores,
 * el comando a ejecutar y un botón RUN que revela la salida simulada.
 * Solo puede ejecutarse una vez por montaje del componente.
 * @param command - El comando a mostrar en la terminal.
 * @param output - La salida simulada (acepta saltos de línea con \n).
 * @param label - Etiqueta descriptiva opcional mostrada encima de la ventana.
 * @example
 *   <MiniTerminal
 *     label="Búsqueda básica"
 *     command="grep 'fox' sample.txt"
 *     output="The quick brown fox jumps over the lazy dog."
 *   />
 */
const MiniTerminal = ({ command, output, label }: MiniTerminalProps) => {
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  /** Simula la ejecución del comando con un breve delay */
  const handleRun = () => {
    if (hasRun || isRunning) return;
    setIsRunning(true);
    // Simula el tiempo de ejecución del comando
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 700);
  };

  /** Calcula las clases CSS del botón RUN según el estado */
  const getRunBtnClass = () => {
    if (hasRun) return `${styles.miniTerminal.runBtn} ${styles.miniTerminal.runBtnDone}`;
    if (isRunning) return `${styles.miniTerminal.runBtn} ${styles.miniTerminal.runBtnRunning}`;
    return styles.miniTerminal.runBtn;
  };

  return (
    <div className={styles.miniTerminal.wrapper}>
      {/* Etiqueta del ejemplo */}
      {label && <span className={styles.miniTerminal.label}>{label}</span>}

      {/* Ventana de terminal */}
      <div className={styles.miniTerminal.window}>

        {/* Barra superior con semáforo de colores */}
        <div className={styles.miniTerminal.titleBar}>
          <span className={styles.miniTerminal.dotRed} />
          <span className={styles.miniTerminal.dotYellow} />
          <span className={styles.miniTerminal.dotGreen} />
        </div>

        {/* Área del cuerpo: comando y output */}
        <div className={styles.miniTerminal.body}>
          {/* Línea de comando con prompt */}
          <code className={styles.miniTerminal.command}>
            <span className={styles.miniTerminal.prompt}>$ </span>
            {command}
          </code>

          {/* Cursor parpadeante mientras ejecuta */}
          {isRunning && (
            <span className={styles.miniTerminal.running}>▌</span>
          )}

          {/* Output simulado, línea a línea */}
          {hasRun && (
            <div className={styles.miniTerminal.output}>
              {output.split('\n').map((line, i) => (
                <div key={i} className={styles.miniTerminal.outputLine}>
                  {line}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer con botón RUN */}
        <div className={styles.miniTerminal.footer}>
          <button
            className={getRunBtnClass()}
            onClick={handleRun}
            disabled={hasRun || isRunning}
            aria-label={hasRun ? 'Comando ejecutado' : `Ejecutar: ${command}`}
          >
            {isRunning ? 'Ejecutando...' : hasRun ? 'DONE ✓' : 'RUN ▶'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default MiniTerminal;
