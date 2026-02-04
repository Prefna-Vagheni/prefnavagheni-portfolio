'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Users, Zap } from 'lucide-react';

function StatsGrid() {
  const stats = [
    { label: 'Lines of Code', value: '100K+', icon: Code2 },
    { label: 'Projects Shipped', value: '15+', icon: Zap },
    { label: 'Technologies', value: '20+', icon: Cpu },
    { label: 'Happy Clients', value: '8+', icon: Users },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-card border border-border rounded-lg p-6 text-center group hover:border-accent/50 transition-all duration-300"
          >
            <Icon className="w-8 h-8 mx-auto mb-3 text-accent transition-colors" />
            <div className="text-3xl font-bold text-foreground mb-1 font-mono">
              {stat.value}
            </div>
            <div className="text-sm text-foreground/60">{stat.label}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default StatsGrid;
