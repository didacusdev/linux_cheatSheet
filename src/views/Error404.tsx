import { Link } from 'react-router-dom';
import { styles } from '@/styles';

/**
 * @file Error404.tsx
 * @description Página de error 404 con enlace de vuelta al inicio.
 * Se muestra cuando la ruta no coincide con ninguna ruta definida.
 * @example
 *   <Route path="*" element={<Error404 />} />
 */
const Error404 = () => {
  return (
    <div className={styles.error.container}>
      <h1 className={styles.error.title}>404</h1>
      <p className={styles.error.subtitle}>Página no encontrada</p>
      <Link to="/" className={styles.error.link}>
        ← Volver al Cheat Sheet
      </Link>
    </div>
  );
};

export default Error404;