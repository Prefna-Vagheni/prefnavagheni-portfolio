'use client';
import { motion } from 'framer-motion';

const journey = [
  {
    year: '2025',
    title: 'Full-Stack Transition',
    description:
      'Expanding from frontend expertise into backend systems, databases, and cloud infrastructure.',
  },
  {
    year: '2024',
    title: 'Frontend Mastery',
    description:
      'Built production-grade applications with React, Next.js, and modern animation libraries.',
  },
  {
    year: '2023',
    title: 'Engineering Foundation',
    description:
      'Started journey in web development, focusing on clean code and user experience.',
  },
];

function JourneyTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
        <span className="text-accent">$</span> Journey Timeline
      </h3>
      <div className="space-y-6">
        {journey.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            className="flex gap-6 group"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-mono font-bold text-white group-hover:scale-110 transition-transform duration-300">
                {item.year.slice(-2)}
              </div>
              {index !== journey.length - 1 && (
                <div className="w-0.5 flex-1 bg-linear-to-b from-border to-transparent mt-2" />
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-accent">
                    {item.year}
                  </span>
                  <div className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default JourneyTimeline;
