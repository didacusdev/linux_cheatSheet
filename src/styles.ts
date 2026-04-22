/**
 * @file styles.ts
 * @description Estilos globales centralizados con clases de Tailwind CSS.
 */
export const styles = {
  // ── Layout principal ──
  home: {
    main: 'flex min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 overflow-x-hidden',
    content: 'flex-1 min-w-0 overflow-x-hidden transition-all duration-300 ease-in-out',
    header: 'text-center py-14 px-8 lg:px-12 animate-fade-in-down',
    title: 'text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-5',
    titleAccent: 'text-green-400',
    subtitle: 'text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-2',
    sections: 'px-8 lg:px-12 pb-24 pt-6',
    footer: 'border-t border-gray-700/50 bg-gray-900/80 mt-12',
    footerInner: 'px-8 lg:px-12 py-12 flex flex-col items-center gap-5',
    footerLogo: 'w-14 h-14 rounded-full object-cover filter drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform duration-300',
    footerText: 'text-gray-500 text-sm',
    footerLink: 'text-green-400 hover:text-green-300 transition-colors duration-200',
    tipBox: 'max-w-3xl mx-auto mt-8 bg-gray-800/60 border border-gray-700 rounded-xl px-6 py-5 text-sm text-left text-gray-300 leading-relaxed',
    tipLabel: 'text-yellow-400 font-semibold mr-1',
    tipItem: 'my-2',
  },

  // ── Barra de búsqueda ──
  searchBar: {
    container: 'sticky top-0 z-30 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/40 py-4 px-8 lg:px-12',
    inner: 'flex items-center gap-4',
    menuBtn: 'lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800/80 border border-gray-600/50 text-gray-300 hover:text-green-400 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all duration-300 cursor-pointer text-lg shrink-0',
    inputWrapper: 'flex-1 relative group',
    searchIcon: 'absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors duration-300 pointer-events-none',
    input: 'w-full bg-gray-800/60 border border-gray-600/50 rounded-xl pl-12 pr-12 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500/70 focus:shadow-[0_0_20px_rgba(34,197,94,0.12)] focus:bg-gray-800/80 transition-all duration-300',
    clearBtn: 'absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full text-gray-500 hover:text-white hover:bg-gray-600/60 cursor-pointer transition-all duration-200',
    counter: 'text-sm text-gray-500 whitespace-nowrap font-mono shrink-0',
    kbdHint: 'hidden sm:flex items-center gap-1 text-xs text-gray-600 shrink-0',
    kbd: 'px-1.5 py-0.5 rounded bg-gray-800 border border-gray-700 text-gray-500 font-mono text-[10px]',
  },

  // ── Sidebar ──
  sidebar: {
    // Desktop wrapper
    wrapper: 'hidden lg:flex fixed top-0 left-0 h-screen z-40 transition-all duration-300 ease-in-out overflow-visible',
    container: 'h-full bg-gray-900 border-r border-gray-700/50 flex flex-col overflow-hidden transition-all duration-300 ease-in-out',
    // Collapse toggle button (desktop)
    collapseBtn: 'absolute -right-3.5 top-7 z-50 w-7 h-7 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700/80 text-gray-400 hover:text-green-400 hover:border-green-500/50 cursor-pointer transition-all duration-200 shadow-lg',
    // Header
    header: 'flex items-center gap-3 px-5 py-5 border-b border-gray-700/50 shrink-0',
    headerIcon: 'w-9 h-9 flex items-center justify-center rounded-lg bg-green-500/15 text-green-400 text-lg shrink-0',
    title: 'text-lg font-bold text-gray-100 tracking-tight whitespace-nowrap overflow-hidden',
    closeBtn: 'ml-auto w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/60 transition-all duration-200 cursor-pointer shrink-0',
    // Search inside sidebar
    searchWrapper: 'px-4 py-3 border-b border-gray-700/30 shrink-0',
    searchInput: 'w-full bg-gray-800/60 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition-all duration-200',
    // Navigation list
    nav: 'flex-1 overflow-y-auto sidebar-scrollbar py-2',
    list: 'space-y-0.5 px-2',
    // Category link
    link: 'group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:bg-gray-800/70 hover:text-gray-200 transition-all duration-200 cursor-pointer text-left',
    linkActive: 'group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-green-500/10 text-green-400 font-medium cursor-pointer text-left sidebar-link-active',
    linkIcon: 'w-8 h-8 flex items-center justify-center rounded-md bg-gray-800/60 group-hover:bg-gray-700/80 text-sm transition-all duration-200 shrink-0',
    linkIconActive: 'w-8 h-8 flex items-center justify-center rounded-md bg-green-500/15 text-sm shrink-0',
    linkText: 'flex-1 truncate whitespace-nowrap overflow-hidden',
    badge: 'ml-auto text-[11px] bg-gray-800/80 text-gray-500 px-2 py-0.5 rounded-full font-mono shrink-0 group-hover:bg-gray-700/80 group-hover:text-gray-300 transition-all duration-200',
    badgeActive: 'ml-auto text-[11px] bg-green-500/15 text-green-400 px-2 py-0.5 rounded-full font-mono shrink-0',
    // Footer
    sidebarFooter: 'px-4 py-3 border-t border-gray-700/30 shrink-0',
    sidebarFooterText: 'text-xs text-gray-600 text-center whitespace-nowrap overflow-hidden',
  },

  // ── Categoría ──
  category: {
    section: 'mb-16 animate-on-scroll',
    title: 'text-2xl md:text-3xl font-bold text-gray-100 mb-8 pb-4 border-b-2 border-green-500/60 flex items-center gap-3',
    icon: 'text-2xl md:text-3xl',
    grid: 'grid grid-cols-1 xl:grid-cols-2 gap-6',
  },

  // ── Tarjeta de comando ──
  card: {
    container: 'card-reveal bg-gray-800/70 rounded-xl p-6 border border-gray-700/50 hover:border-green-500/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-4',
    title: 'text-lg font-bold text-green-400 font-mono',
    description: 'text-gray-300 text-sm leading-relaxed',
    codeBlock: 'flex items-center justify-between bg-gray-900/80 rounded-lg px-4 py-3 gap-3',
    code: 'text-green-400 text-sm font-mono break-all',
    copyBtn: 'shrink-0 text-xs bg-green-600/90 hover:bg-green-500 hover:shadow-[0_0_12px_rgba(34,197,94,0.3)] text-white px-3.5 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95',
    exampleBlock: 'flex flex-col gap-2',
    exampleLabel: 'text-xs text-gray-500 font-semibold uppercase tracking-wider',
    exampleCode: 'flex items-center justify-between bg-gray-900/50 rounded-lg px-4 py-3 gap-3',
    exampleText: 'text-blue-400 text-sm font-mono break-all',
    exampleCopyBtn: 'shrink-0 text-xs bg-blue-600/90 hover:bg-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] text-white px-3.5 py-2 rounded-lg cursor-pointer transition-all duration-200 active:scale-95',
  },

  // ── Mini Terminal interactiva ──
  miniTerminal: {
    wrapper: 'flex flex-col gap-1.5',
    label: 'text-xs text-gray-500 font-semibold uppercase tracking-wider',
    window: 'rounded-lg overflow-hidden border border-gray-700/60 bg-gray-950',
    titleBar: 'flex items-center gap-1.5 px-3 py-2 bg-gray-900 border-b border-gray-800/70',
    dotRed: 'w-3 h-3 rounded-full bg-[#ff5f57] shrink-0',
    dotYellow: 'w-3 h-3 rounded-full bg-[#febc2e] shrink-0',
    dotGreen: 'w-3 h-3 rounded-full bg-[#28c840] shrink-0',
    body: 'px-4 py-3 font-mono text-sm flex flex-col gap-2 min-h-[48px]',
    prompt: 'text-green-500 select-none',
    command: 'text-gray-200 text-sm font-mono break-all',
    output: 'flex flex-col gap-0.5 border-t border-gray-800/60 pt-2 mt-0.5',
    outputLine: 'text-green-300 text-xs font-mono leading-relaxed',
    running: 'text-green-400 text-sm font-mono animate-pulse',
    footer: 'flex justify-end px-3 py-2 bg-gray-900/40 border-t border-gray-800/40',
    runBtn: 'text-xs border border-gray-600 text-gray-300 hover:border-gray-300 hover:text-white px-4 py-1.5 rounded cursor-pointer transition-all duration-200 font-mono font-semibold tracking-wide',
    runBtnDone: 'border-green-700/50 text-green-500 cursor-default hover:border-green-700/50 hover:text-green-500',
    runBtnRunning: 'border-yellow-700/50 text-yellow-400 cursor-wait hover:border-yellow-700/50 hover:text-yellow-400',
  },

  // ── Toast ──
  toast: {
    container: 'fixed bottom-8 right-8 z-50 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-toast-slide',
    icon: 'text-lg',
  },

  // ── Back to Top ──
  backToTop: {
    button: 'fixed bottom-8 left-8 lg:bottom-8 lg:left-auto lg:right-24 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700/80 text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] cursor-pointer transition-all duration-300 shadow-lg',
  },

  // ── Error 404 ──
  error: {
    container: 'flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 gap-4',
    title: 'text-6xl font-bold text-green-400',
    subtitle: 'text-xl text-gray-400',
    link: 'mt-4 text-green-400 hover:text-green-300 underline transition-colors',
  },
};