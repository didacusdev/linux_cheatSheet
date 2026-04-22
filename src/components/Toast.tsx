import { styles } from '@/styles';

interface ToastProps {
  message: string;
  visible: boolean;
}

/**
 * @file Toast.tsx
 * @description Notificación toast que se muestra brevemente al copiar un comando.
 * Aparece en la esquina inferior derecha con animación fade-in.
 * @param| {string} message - El mensaje a mostrar en el toast.
 * @param| {boolean} visible - Si el toast es visible o no.
 * @example
 *   <Toast
 *     message="¡Copiado al portapapeles!"
 *     visible={true}
 *   />
 */
const Toast = ({ message, visible }: ToastProps) => {
  if (!visible) return null;

  return (
    <div className={styles.toast.container}>
      <span className={styles.toast.icon}>✅</span>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
