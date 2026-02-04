'use client';

import { motion } from 'framer-motion';
import IconContent from './IconContent';

function CoreValue() {
  const values = [
    {
      icon: Terminal,
      title: 'Performance First',
      description:
        'Every millisecond matters. I optimize for speed, efficiency, and scalability.',
    },
    {
      icon: Globe,
      title: 'User-Centric',
      description:
        'Beautiful interfaces mean nothing without intuitive, accessible experiences.',
    },
    {
      icon: Cpu,
      title: 'Continuous Learning',
      description:
        'Technology evolves rapidly. I stay ahead through deliberate practice and curiosity.',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-20"
    >
      <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
        <span className="text-accent">{'//'}</span> Core Values
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <IconContent divClass="w-12 h-12">
                <Icon className={`w-6 h-6 `} />
              </IconContent>

              <h4 className={`text-xl font-bold mb-2 text-foreground `}>
                {value.title}
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default CoreValue;
