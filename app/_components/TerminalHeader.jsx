'use client';
import { motion } from 'framer-motion';

function TerminalHeader({ title = '', text = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="font-mono text-sm text-foreground/60 mb-4">
        <span className="text-accent">prefna@portfolio</span>
        <span className="text-foreground/40">:</span>
        <span className="text-foreground/60">~</span>
        <span className="text-foreground/40">$</span> {text}
      </div>
      <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
        {title}
      </h2>
      <div className="w-24 h-1 bg-accent" />
    </motion.div>
  );
}

export default TerminalHeader;
