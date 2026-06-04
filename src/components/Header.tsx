/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: 'home' | 'prodotto' | 'progetti' | 'contatti';
  onTabChange: (tab: 'home' | 'prodotto' | 'progetti' | 'contatti') => void;
}

export default function Header({ currentTab, onTabChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'prodotto', label: 'Prodotto' },
    { id: 'progetti', label: 'Progetti' },
    { id: 'contatti', label: 'Contatti' },
  ] as const;

  const handleNavClick = (tabId: 'home' | 'prodotto' | 'progetti' | 'contatti') => {
    onTabChange(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/80 border-b border-white/[0.06] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Apple Luxury-tech variant in black & gold */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onTabChange('home')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 shadow-md shadow-yellow-500/10 group-hover:scale-105 transition-transform duration-300">
              <ShieldCheck className="w-6 h-6 text-black" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                daily<span className="text-yellow-400">22</span>
              </span>
              <p className="text-[9px] uppercase tracking-widest text-gray-400 font-mono font-medium">
                Impegno Etico Daily
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Ultra Clean & Minimal */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-yellow-400 font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-yellow-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button with subtle Gold highlight */}
          <div className="hidden md:block">
            <button
              id="cta-req-consult"
              onClick={() => handleNavClick('contatti')}
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-black bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:shadow-[0_0_25px_rgba(250,204,21,0.4)] cursor-pointer"
            >
              Richiedi Consulenza
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/[0.06] bg-[#090909]"
          >
            <div className="px-4 py-6 space-y-2.5">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-yellow-400/10 text-yellow-300 border-l-4 border-yellow-400'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/[0.06]">
                <button
                  id="mobile-cta"
                  onClick={() => handleNavClick('contatti')}
                  className="flex items-center justify-center w-full gap-2 px-5 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs shadow-lg shadow-yellow-500/10"
                >
                  Richiedi Consulenza
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
