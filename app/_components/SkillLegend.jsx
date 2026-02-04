'use client';

import { motion } from 'framer-motion';

function SkillLegend() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="bg-card border border-border rounded-lg p-6"
    >
      <h4 className="text-sm font-mono text-foreground/80 mb-4">
        Proficiency Scale
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-accent rounded-full" />
          <span className="text-foreground/70">Expert (90-100%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-accent/80 rounded-full" />
          <span className="text-foreground/70">Advanced (75-89%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-accent/60 rounded-full" />
          <span className="text-foreground/70">Intermediate (60-74%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-accent/40 rounded-full" />
          <span className="text-foreground/70">Learning (&lt;60%)</span>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillLegend;
