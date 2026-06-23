import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {Menu, X, ArrowUpRight} from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    {path: '/', label: 'Home'},
    {path: '/chi-siamo', label: 'Su di noi'},
    {path: '/servizi', label: 'Servizi'},
    {path: '/widiu', label: 'WIDIU'},
  ];

  const secondaryNavItems = [
    {path: '/bandi', label: 'Bandi'},
    {path: '/daily-safety-lab', label: 'Daily Safety Lab'},
    {path: '/faqs', label: 'FAQs'},
    {path: '/brevetto', label: 'Brevetto'},
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300" style={{background: 'rgba(254,252,249,0.85)', borderColor: 'rgba(0,0,0,0.06)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/src/assets/images/logo_full.png"
              alt="Daily 22"
              className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {mainNavItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                    active ? 'text-yellow-600 font-semibold' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-yellow-500 rounded-full"
                      transition={{type: 'spring', stiffness: 350, damping: 28}}
                    />
                  )}
                </Link>
              );
            })}

            {secondaryNavItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                  isActive(item.path) ? 'text-yellow-600 font-semibold' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contatti"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]"
            >
              Contattaci
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.25, ease: 'easeInOut'}}
            className="lg:hidden border-t bg-white"
            style={{borderColor: 'rgba(0,0,0,0.06)', background: '#fefcf9'}}
          >
            <div className="px-4 py-6 space-y-2.5 max-h-[80vh] overflow-y-auto">
              {[...mainNavItems, ...secondaryNavItems].map((item) => {
                const active = isActive(item.path);
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'bg-yellow-50 text-yellow-700 border-l-4 border-yellow-500'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavClick('/contatti')}
                  className="flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs shadow-lg"
                >
                  Contattaci
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
