'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, ArrowUpRight, Cpu } from 'lucide-react';

const logs = [
  {
    date: '2024.05',
    topic: 'Authentication Patterns',
    description:
      'Deep dive into JWT vs. Session-based auth. Implemented a custom refresh token rotation strategy.',
    status: 'Mastered',
    tags: ['Security', 'Node.js'],
  },
  {
    date: '2024.04',
    topic: 'Relational Modeling',
    description:
      'Architecting one-to-many and many-to-many relationships using Prisma. Understanding ACID compliance.',
    status: 'In Progress',
    tags: ['PostgreSQL', 'Prisma'],
  },
  {
    date: '2024.04',
    topic: 'Containerization',
    description:
      'Dockerizing a Next.js frontend with a Node/Express backend. Optimizing multi-stage builds for performance.',
    status: 'Exploring',
    tags: ['Docker', 'DevOps'],
  },
  {
    date: '2024.03',
    topic: 'Middleware Architecture',
    description:
      'Building custom error-handling and logging middleware to intercept system-level events.',
    status: 'Stable',
    tags: ['Backend', 'Express'],
  },
];

export default function LearningLog() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-foreground/[0.02]">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-accent/10 rounded-full text-accent">
            <Terminal size={20} />
          </div>
          <h2 className="text-2xl font-mono tracking-tighter uppercase italic opacity-80">
            System_Learning_Log.log
          </h2>
        </div>

        <div className="space-y-1">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-border hover:bg-foreground/[0.01] transition-colors cursor-default"
            >
              {/* Date/Status */}
              <div className="md:col-span-2 flex flex-col gap-1">
                <span className="font-mono text-xs opacity-40">{log.date}</span>
                <span
                  className={`text-[10px] uppercase font-bold tracking-widest ${
                    log.status === 'Mastered'
                      ? 'text-emerald-500'
                      : log.status === 'In Progress'
                      ? 'text-accent'
                      : 'text-blue-500'
                  }`}
                >
                  {log.status}
                </span>
              </div>

              {/* Conte */}
              <div className="md:col-span-7">
                <h3 className="text-xl font-medium mb-2 flex items-center gap-2 group-hover:text-accent transition-colors">
                  {log.topic}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1"
                  />
                </h3>
                <p className="text-sm opacity-60 leading-relaxed max-w-md">
                  {log.description}
                </p>
              </div>

              {/* Tags */}
              <div className="md:col-span-3 flex flex-wrap gap-2 items-start justify-end md:justify-end">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 rounded bg-background border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex items-center gap-4 text-xs font-mono opacity-40"
        >
          <div className="h-px w-12 bg-current" />
          <span>END OF LOG / CONTINUOUS GROWTH DETECTED</span>
        </motion.div>
      </div>
    </section>
  );
}
