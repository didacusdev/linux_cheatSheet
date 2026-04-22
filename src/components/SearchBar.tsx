import { useEffect, useRef } from 'react';
import { styles } from '@/styles';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
  onToggleSidebar: () => void;
  totalCommands: number;
  filteredCommands: number;
}

/**
 * @file SearchBar.tsx
 * @description Barra de búsqueda sticky con soporte para Ctrl+K.
 */
const SearchBar = ({ searchTerm, onSearch, onToggleSidebar, totalCommands, filteredCommands }: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Ctrl+K para enfocar la búsqueda
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Escape para limpiar
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        onSearch('');
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSearch]);

  return (
    <div className={styles.searchBar.container}>
      <div className={styles.searchBar.inner}>
        {/* Botón toggle sidebar (solo mobile) */}
        <button
          className={styles.searchBar.menuBtn}
          onClick={onToggleSidebar}
          aria-label="Abrir menú de categorías"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Input de búsqueda */}
        <div className={styles.searchBar.inputWrapper}>
          <span className={styles.searchBar.searchIcon}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchBar.input}
            placeholder="Buscar comando..."
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
          />
          {searchTerm && (
            <button
              className={styles.searchBar.clearBtn}
              onClick={() => onSearch('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        {/* Atajo de teclado */}
        <div className={styles.searchBar.kbdHint}>
          <kbd className={styles.searchBar.kbd}>Ctrl</kbd>
          <span className="text-gray-600">+</span>
          <kbd className={styles.searchBar.kbd}>K</kbd>
        </div>

        {/* Contador de resultados */}
        <span className={styles.searchBar.counter}>
          {filteredCommands}/{totalCommands}
        </span>
      </div>
    </div>
  );
};

export default SearchBar;