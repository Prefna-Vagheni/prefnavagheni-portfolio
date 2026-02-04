import { motion } from 'framer-motion';

function TerminalFooter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="mt-16 font-mono text-sm text-foreground/60"
    >
      <span className="text-accent">prefna@portfolio</span>
      <span className="text-foreground/40">:</span>
      <span className="text-foreground/60">~</span>
      <span className="text-foreground/40">$</span>
      <span className="ml-2 animate-pulse">_</span>
    </motion.div>
  );
}

export default TerminalFooter;
