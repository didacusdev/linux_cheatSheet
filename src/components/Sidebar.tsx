import { useState, useRef, useEffect, useCallback } from 'react';
import { styles } from '@/styles';
import type { CommandCategory } from '@/data/linuxCommands';

interface SidebarProps {
  categories: CommandCategory[];
  isMobileOpen: boolean;
  onMobileToggle: () => void;
  activeCategory: string;
  isCollapsed: boolean;
  onCollapse: () => void;
}

const SIDEBAR_WIDTH = 272;
const SIDEBAR_COLLAPSED_WIDTH = 0;

/**
 * @file Sidebar.tsx
 * @description Barra lateral de navegación.
 * - Desktop (lg+): sidebar fijo persistente, colapsable con botón.
 * - Mobile (<lg): drawer overlay con animación de slide.
 */
const Sidebar = ({
  categories,
  isMobileOpen,
  onMobileToggle,
  activeCategory,
  isCollapsed,
  onCollapse,
}: SidebarProps) => {
  const [filterText, setFilterText] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const activeRef = useRef<HTMLLIElement>(null);

  // Auto-scroll to active item in sidebar nav
  useEffect(() => {
    if (activeRef.current && !isCollapsed) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeCategory, isCollapsed]);

  const filteredCategories = filterText.trim()
    ? categories.filter((cat) =>
        cat.name.toLowerCase().includes(filterText.toLowerCase())
      )
    : categories;

  /** Navega a la sección con scroll suave */
  const handleClick = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      // Solo cerrar en mobile
      if (window.innerWidth < 1024) {
        handleClose();
      }
    },
    []
  );

  /** Cierra el sidebar mobile con animación de salida */
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onMobileToggle();
    }, 250);
  }, [onMobileToggle]);

  /** Contenido de navegación del sidebar */
  const navContent = (
    <>
      {/* Filtro de categorías */}
      <div className={styles.sidebar.searchWrapper}>
        <input
          type="text"
          className={styles.sidebar.searchInput}
          placeholder="Filtrar categorías..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Lista de navegación */}
      <nav className={styles.sidebar.nav}>
        <ul className={styles.sidebar.list}>
          {filteredCategories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <li key={cat.id} ref={isActive ? activeRef : undefined}>
                <button
                  className={isActive ? styles.sidebar.linkActive : styles.sidebar.link}
                  onClick={() => handleClick(cat.id)}
                >
                  <span
                    className={
                      isActive ? styles.sidebar.linkIconActive : styles.sidebar.linkIcon
                    }
                  >
                    {cat.icon}
                  </span>
                  <span className={styles.sidebar.linkText}>{cat.name}</span>
                  <span
                    className={isActive ? styles.sidebar.badgeActive : styles.sidebar.badge}
                  >
                    {cat.commands.length}
                  </span>
                </button>
              </li>
            );
          })}
          {filteredCategories.length === 0 && (
            <li className="px-4 py-6 text-center text-gray-500 text-sm">
              No se encontraron categorías
            </li>
          )}
        </ul>
      </nav>

      {/* Footer del sidebar */}
      <div className={styles.sidebar.sidebarFooter}>
        <p className={styles.sidebar.sidebarFooterText}>
          {categories.length} categorías · {categories.reduce((a, c) => a + c.commands.length, 0)}{' '}
          comandos
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* ═══ Desktop: Sidebar persistente con collapse ═══ */}
      <div
        className={styles.sidebar.wrapper}
        style={{ width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH }}
      >
        <div
          className={styles.sidebar.container}
          style={{
            width: SIDEBAR_WIDTH,
            transform: isCollapsed ? `translateX(-${SIDEBAR_WIDTH}px)` : 'translateX(0)',
          }}
        >
          {/* Header */}
          <div className={styles.sidebar.header}>
            <div className={styles.sidebar.headerIcon}>🐧</div>
            <h2 className={styles.sidebar.title}>Categorías</h2>
          </div>

          {navContent}
        </div>

        {/* Botón de colapsar/expandir */}
        <button
          className={styles.sidebar.collapseBtn}
          onClick={onCollapse}
          aria-label={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
          style={{
            right: isCollapsed ? '-28px' : '-14px',
            transition: 'right 0.3s ease, transform 0.3s ease',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ═══ Mobile: Overlay drawer ═══ */}
      {(isMobileOpen || isClosing) && (
        <>
          <div
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden ${
              isClosing ? 'sidebar-overlay-exit' : 'sidebar-overlay-enter'
            }`}
            onClick={handleClose}
          />
          <aside
            className={`fixed top-0 left-0 h-full z-50 flex flex-col overflow-hidden lg:hidden bg-gray-900 border-r border-gray-700/50 ${
              isClosing ? 'sidebar-slide-exit' : 'sidebar-slide-enter'
            }`}
            style={{ width: 300 }}
          >
            {/* Header mobile */}
            <div className={styles.sidebar.header}>
              <div className={styles.sidebar.headerIcon}>🐧</div>
              <h2 className={styles.sidebar.title}>Categorías</h2>
              <button
                className={styles.sidebar.closeBtn}
                onClick={handleClose}
                aria-label="Cerrar sidebar"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            {navContent}
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;