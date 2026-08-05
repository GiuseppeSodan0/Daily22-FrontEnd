import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {Menu, X, ArrowUpRight, ChevronDown} from 'lucide-react';
import logoFull from '../assets/images/LOGO_DAILY_POSITIVO_ORIZZONTALE-png.png';
import {useLanguage} from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const {t, lang} = useLanguage();
  const isEn = lang === 'en';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < 90) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/chi-siamo') return location.pathname === '/chi-siamo' || location.pathname === '/about';
    if (path === '/servizi') return location.pathname === '/servizi' || location.pathname === '/services' || servicesSubItems.some((sub) => sub.path === location.pathname);
    if (path === '/bandi') return location.pathname === '/bandi' || location.pathname === '/grants';
    if (path === '/contatti') return location.pathname === '/contatti' || location.pathname === '/contact';
    return location.pathname === path;
  };

  const servicesSubItems = [
    {path: isEn ? '/services' : '/servizi', label: t('header.allServices'), isAll: true},
    {path: '/dailyplatform', label: 'dailyplatform'},
  ];

  const isServicesActive =
    location.pathname === '/servizi' ||
    location.pathname === '/services' ||
    servicesSubItems.some((sub) => sub.path === location.pathname);

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <motion.header
      initial={{y: 0}}
      animate={{y: isVisible ? 0 : -110}}
      transition={{duration: 0.28, ease: 'easeInOut'}}
      className="site-header fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-[#F0EFEB]/85"
      style={{borderColor: 'rgba(44, 44, 46, 0.08)'}}
    >
      <div className="max-w-7xl mx-auto">
        <div className="navbar flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="site-logo flex items-center gap-3 group shrink-0">
            <img
              src={logoFull}
              alt="Daily 22"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu hidden xl:flex items-center gap-2">
            {/* Home */}
            <Link
              to="/"
              className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono whitespace-nowrap ${
                isActive('/') ? 'text-[#f6c73b]' : 'text-[#2C2C2E] hover:text-[#f6c73b]'
              }`}
            >
              {t('header.home')}
              {isActive('/') && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                  transition={{type: 'spring', stiffness: 350, damping: 28}}
                />
              )}
            </Link>

            {/* Su di noi / About Us */}
            <Link
              to="/chi-siamo"
              className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono whitespace-nowrap ${
                isActive('/chi-siamo') ? 'text-[#f6c73b]' : 'text-[#2C2C2E] hover:text-[#f6c73b]'
              }`}
            >
              {t('header.about')}
              {isActive('/chi-siamo') && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                  transition={{type: 'spring', stiffness: 350, damping: 28}}
                />
              )}
            </Link>

            {/* Servizi / Services (Dropdown trigger) */}
            <div
              ref={servicesDropdownRef}
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterServices}
              onMouseLeave={handleMouseLeaveServices}
            >
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono flex items-center gap-1.5 cursor-pointer ${
                  isServicesActive ? 'text-[#f6c73b]' : 'text-[#2C2C2E] hover:text-[#f6c73b]'
                }`}
                aria-expanded={isServicesDropdownOpen}
                aria-label={t('header.services')}
              >
                <span>{t('header.services')}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-[#f6c73b]' : 'text-[#2C2C2E]/60'
                  }`}
                />
                {isServicesActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                    transition={{type: 'spring', stiffness: 350, damping: 28}}
                  />
                )}
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{opacity: 0, y: 8, scale: 0.96}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    exit={{opacity: 0, y: 6, scale: 0.96}}
                    transition={{duration: 0.18, ease: 'easeOut'}}
                    className="absolute top-full left-0 pt-2 w-60 z-50 font-mono text-[#2C2C2E]"
                  >
                    <div className="p-2.5 rounded-2xl bg-[#F0EFEB] border border-[#2C2C2E]/12 shadow-2xl">
                      <div className="space-y-1">
                        {servicesSubItems.map((sub) => {
                          const isSubActive = location.pathname === sub.path;
                          if (sub.isAll) {
                            return (
                              <React.Fragment key={sub.path}>
                                <Link
                                  to={sub.path}
                                  onClick={() => {
                                    setIsServicesDropdownOpen(false);
                                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                  }}
                                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                                    isSubActive
                                      ? 'bg-[#f6c73b]/30 text-[#2C2C2E]'
                                      : 'text-[#2C2C2E] hover:bg-[#f6c73b]/20'
                                  }`}
                                >
                                  <span className="flex items-center gap-1.5">
                                    <span>{sub.label}</span>
                                  </span>
                                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                                </Link>
                                <div className="my-1.5 border-b border-[#2C2C2E]/10" />
                              </React.Fragment>
                            );
                          }
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                              }}
                              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                                isSubActive
                                  ? 'bg-[#f6c73b]/25 text-[#2C2C2E] font-extrabold border-l-2 border-[#f6c73b]'
                                  : 'text-[#2C2C2E] hover:bg-[#f6c73b]/20'
                              }`}
                            >
                              <span>{sub.label}</span>
                              {isSubActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#f6c73b]" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Daily Safety Lab */}
            <Link
              to="/daily-safety-lab"
              className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono whitespace-nowrap ${
                isActive('/daily-safety-lab') ? 'text-[#f6c73b]' : 'text-[#2C2C2E]/75 hover:text-[#f6c73b]'
              }`}
            >
              {t('header.dailySafetyLab')}
              {isActive('/daily-safety-lab') && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                  transition={{type: 'spring', stiffness: 350, damping: 28}}
                />
              )}
            </Link>

            {/* Bandi / Grants */}
            <Link
              to="/bandi"
              className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono whitespace-nowrap ${
                isActive('/bandi') ? 'text-[#f6c73b]' : 'text-[#2C2C2E]/75 hover:text-[#f6c73b]'
              }`}
            >
              {t('header.bandi')}
              {isActive('/bandi') && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                  transition={{type: 'spring', stiffness: 350, damping: 28}}
                />
              )}
            </Link>

            {/* Contatti / Contact */}
            <Link
              to="/contatti"
              className={`relative px-3 py-2 rounded-lg text-[13px] font-semibold uppercase tracking-tight transition-colors duration-300 font-mono whitespace-nowrap ${
                isActive('/contatti') ? 'text-[#f6c73b]' : 'text-[#2C2C2E]/75 hover:text-[#f6c73b]'
              }`}
            >
              {t('header.contact')}
              {isActive('/contatti') && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#f6c73b] rounded-full"
                  transition={{type: 'spring', stiffness: 350, damping: 28}}
                />
              )}
            </Link>
          </nav>

          {/* Desktop Right Actions: Language Switcher & CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <a
              href="https://crm.dailyplatform.it/register"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group relative inline-flex items-center gap-2 px-4 py-2 text-[13px] font-bold uppercase font-mono whitespace-nowrap"
            >
              {t('header.accessPlatform')}
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile/Tablet Controls */}
          <div className="flex xl:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl border border-[#2C2C2E]/10 text-[#2C2C2E] hover:text-[#f6c73b] hover:bg-[#2C2C2E]/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.25, ease: 'easeInOut'}}
            className="xl:hidden border-t bg-[#F0EFEB]/98 backdrop-blur-lg shadow-xl relative z-50"
            style={{borderColor: 'rgba(44, 44, 46, 0.1)'}}
          >
            <div className="px-5 py-6 space-y-2 max-h-[82vh] overflow-y-auto">
              {/* Home */}
              <button
                onClick={() => handleNavClick('/')}
                className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                    : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                }`}
              >
                {t('header.home')}
              </button>

              {/* Su di noi / About Us */}
              <button
                onClick={() => handleNavClick('/chi-siamo')}
                className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                  isActive('/chi-siamo')
                    ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                    : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                }`}
              >
                {t('header.about')}
              </button>

              {/* Servizi / Services Expandable Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                    isServicesActive
                      ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                      : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                  }`}
                >
                  <span>{t('header.services')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180 text-[#f6c73b]' : 'text-[#2C2C2E]/60'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: 'auto'}}
                      exit={{opacity: 0, height: 0}}
                      transition={{duration: 0.2, ease: 'easeInOut'}}
                      className="pl-4 border-l-2 border-[#f6c73b]/30 ml-3 my-1 space-y-1 overflow-hidden"
                    >
                      {servicesSubItems.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <button
                            key={sub.path}
                            onClick={() => handleNavClick(sub.path)}
                            className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-bold font-mono transition-all duration-200 ${
                              sub.isAll
                                ? 'text-[#2C2C2E] font-extrabold border-b border-[#2C2C2E]/10 mb-1 pb-2'
                                : isSubActive
                                ? 'bg-[#f6c73b]/25 text-[#2C2C2E] font-extrabold'
                                : 'text-[#2C2C2E]/80 hover:text-[#2C2C2E] hover:bg-[#f6c73b]/15'
                            }`}
                          >
                            <span>{sub.label}</span>
                            {sub.isAll && <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Daily Safety Lab */}
              <button
                onClick={() => handleNavClick('/daily-safety-lab')}
                className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                  isActive('/daily-safety-lab')
                    ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                    : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                }`}
              >
                {t('header.dailySafetyLab')}
              </button>

              {/* Bandi / Grants */}
              <button
                onClick={() => handleNavClick('/bandi')}
                className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                  isActive('/bandi')
                    ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                    : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                }`}
              >
                {t('header.bandi')}
              </button>

              {/* Contatti / Contact */}
              <button
                onClick={() => handleNavClick('/contatti')}
                className={`block w-full text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider font-mono transition-all duration-200 ${
                  isActive('/contatti')
                    ? 'bg-[#f6c73b]/20 text-[#2C2C2E] border-l-4 border-[#f6c73b] pl-4 font-extrabold'
                    : 'text-[#2C2C2E] hover:bg-[#f6c73b]/18'
                }`}
              >
                {t('header.contact')}
              </button>

              {/* Accedi a dailyplatform CTA */}
              <div className="pt-4 border-t border-[#2C2C2E]/10 mt-3 space-y-3">
                <a
                  href="https://crm.dailyplatform.it/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button flex items-center justify-center w-full gap-2 px-5 py-3 font-mono text-xs font-bold tracking-wider uppercase shadow-sm"
                >
                  {t('header.accessPlatform')}
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
