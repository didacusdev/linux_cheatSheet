import { useState, useMemo, useCallback, useEffect } from 'react';
import { styles } from '@/styles';
import { linuxCommands } from '@/data/linuxCommands';
import Sidebar from '@components/Sidebar';
import SearchBar from '@components/SearchBar';
import CategorySection from '@components/CategorySection';
import Toast from '@components/Toast';
import BackToTop from '@components/BackToTop';

/** Hook para detectar si estamos en desktop (lg: 1024px+) */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 1024
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    setIsDesktop(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

/**
 * @file Home.tsx
 * @description Vista principal del Linux Cheat Sheet.
 */
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [activeCategory, setActiveCategory] = useState('');
  const isDesktop = useIsDesktop();

  // ── Scrollspy ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveCategory(visible[0].target.id);
        }
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: '-80px 0px -40% 0px' }
    );
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [searchTerm]);

  // ── Scroll-reveal ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            const cards = entry.target.querySelectorAll('.card-reveal:not(.revealed)');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('revealed'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [searchTerm]);

  // Set initial active category
  useEffect(() => {
    if (linuxCommands.length > 0 && !activeCategory) {
      setActiveCategory(linuxCommands[0].id);
    }
  }, []);

  const totalCommands = useMemo(
    () => linuxCommands.reduce((acc, cat) => acc + cat.commands.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return linuxCommands;
    const term = searchTerm.toLowerCase();
    return linuxCommands
      .map((cat) => ({
        ...cat,
        commands: cat.commands.filter(
          (cmd) =>
            cmd.command.toLowerCase().includes(term) ||
            cmd.description.toLowerCase().includes(term) ||
            (cmd.example && cmd.example.toLowerCase().includes(term))
        ),
      }))
      .filter((cat) => cat.commands.length > 0);
  }, [searchTerm]);

  const filteredTotal = useMemo(
    () => filteredCategories.reduce((acc, cat) => acc + cat.commands.length, 0),
    [filteredCategories]
  );

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setToast({ visible: true, message: '¡Copiado al portapapeles!' });
    setTimeout(() => setToast({ visible: false, message: '' }), 2000);
  }, []);

  // Calcula el margen izquierdo del contenido
  const contentMarginLeft = isDesktop ? (sidebarCollapsed ? 0 : 272) : 0;

  return (
    <main className={styles.home.main}>
      {/* Sidebar */}
      <Sidebar
        categories={linuxCommands}
        isMobileOpen={sidebarOpen}
        onMobileToggle={() => setSidebarOpen(!sidebarOpen)}
        activeCategory={activeCategory}
        isCollapsed={sidebarCollapsed}
        onCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Contenido principal */}
      <div
        className={styles.home.content}
        style={{
          marginLeft: contentMarginLeft,
          transition: 'margin-left 0.3s ease-in-out',
        }}
      >
        {/* Header */}
        <header className={styles.home.header}>
          <h1 className={styles.home.title}>
            Linux 🐧 <span className={styles.home.titleAccent}>Cheat Sheet</span>
          </h1>
          <p className={styles.home.subtitle}>
            Top 100+ comandos de Linux para administración de sistemas y configuración del entorno
          </p>
          <div className={styles.home.tipBox}>
            <span className={styles.home.tipLabel}>💡 Tips:</span>
            <ul className='text-left'>
              <li className={styles.home.tipItem}>
                - Usa{' '}
                <kbd className="px-1.5 py-0.5 mx-1 rounded bg-gray-700 border border-gray-600 text-green-400 font-mono text-xs">
                  Ctrl+K
                </kbd>{' '}
                para seleccionar la barra de búsqueda rápidamente y empezar a escribir.
              </li>
              <li className={styles.home.tipItem}>- Selecciona un comando para copiarlo al portapapeles.</li>
            </ul>
          </div>
        </header>

        {/* Barra de búsqueda */}
        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          totalCommands={totalCommands}
          filteredCommands={filteredTotal}
        />

        {/* Secciones de categorías */}
        <div className={styles.home.sections}>
          {filteredCategories.map((cat) => (
            <CategorySection
              key={cat.id}
              id={cat.id}
              icon={cat.icon}
              name={cat.name}
              commands={cat.commands}
              onCopy={handleCopy}
            />
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-4xl mb-4">🔍</p>
              <p className="text-lg">
                No se encontraron comandos para "<strong>{searchTerm}</strong>"
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className={styles.home.footer}>
          <div className={styles.home.footerInner}>
            <a href="https://diegorodriguez.dev/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://diegorodriguez.dev/src/img/logo.webp"
                alt="Logo Diego Rodriguez"
                className={styles.home.footerLogo}
              />
            </a>
            <p className={styles.home.footerText}>
              Copyright © {new Date().getFullYear()} –{' '}
              <a
                href="https://diegorodriguez.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.home.footerLink}
              >
                Diego Rodriguez
              </a>
            </p>
          </div>
        </footer>
      </div>

      {/* Back to Top */}
      <BackToTop />

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </main>
  );
};

export default Home;