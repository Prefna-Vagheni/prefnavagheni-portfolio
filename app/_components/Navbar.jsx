'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon, Terminal, Command } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []); //ESL

  const navItems = [
    { name: 'Engine', href: '#hero' },
    { name: 'Stack', href: '#stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Logs', href: '#logs' },
  ];

  return (
    <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 bg-background/60 backdrop-blur-xl border border-border rounded-full shadow-2xl"
      >
        {/* Logo/Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background">
          <Command size={20} />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-xs font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-accent transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="h-6 w-px bg-border mx-2 hidden md:block" />

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors relative"
        >
          {mounted && (
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              key={theme}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          )}
        </button>

        {/* Mobile Menu Trigger (Conceptual) */}
        <div className="md:hidden flex items-center pr-2">
          <Terminal size={18} className="opacity-60" />
        </div>
      </motion.div>
    </nav>
  );
}
