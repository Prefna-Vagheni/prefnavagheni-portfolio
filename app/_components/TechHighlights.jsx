'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database, Repeat, Sparkles, CreditCard } from 'lucide-react';

const highlights = [
  {
    id: 'FEAT_01',
    title: 'Full-Stack Orchestration',
    description:
      'Architecting end-to-end applications using Next.js and TypeScript, ensuring type-safety from the database to the DOM.',
    icon: <Zap size={20} />,
    tags: ['Next.js', 'TypeScript', 'App Router'],
  },
  {
    id: 'FEAT_02',
    title: 'Relational Data Modeling',
    description:
      'Designing robust, normalized database schemas with PostgreSQL and managing complex relations via Prisma ORM.',
    icon: <Database size={20} />,
    tags: ['PostgreSQL', 'Prisma', 'ACID'],
  },
  {
    id: 'FEAT_03',
    title: 'Asynchronous Processing',
    description:
      'Offloading heavy tasks to background workers using Redis and BullMQ to maintain high-performance UI responsiveness.',
    icon: <Repeat size={20} />,
    tags: ['Redis', 'Background Jobs', 'Queue'],
  },
  {
    id: 'FEAT_04',
    title: 'AI & LLM Integration',
    description:
      'Deep integration of Gemini API into production workflows, including RAG (Retrieval-Augmented Generation) and prompt engineering.',
    icon: <Sparkles size={20} />,
    tags: ['Gemini AI', 'Prompt Engineering', 'LLM'],
  },
  {
    id: 'FEAT_05',
    title: 'SaaS Billing Systems',
    description:
      'Implementing secure, scalable payment infrastructures with Stripe, including subscription lifecycle management and webhooks.',
    icon: <CreditCard size={20} />,
    tags: ['Stripe', 'SaaS', 'Financial Logic'],
  },
];

export default function TechHighlight() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
            Core Engineering <br />{' '}
            <span className="text-accent italic">Capabilities</span>
          </h2>
          <p className="text-sm md:text-base opacity-60 font-mono leading-relaxed uppercase tracking-tighter">
            / Specialized in building scalable systems and highly performant
            digital products.
          </p>
        </div>
        <div className="hidden md:block text-[10px] font-mono opacity-30 text-right leading-loose">
          SPEC_VERSION: 2026.4 <br />
          STATUS: PRODUCTION_READY
        </div>
      </div>

      <div className="flex flex-col border-t border-border">
        {highlights.map((feat, index) => (
          <motion.div
            key={feat.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-12 px-3 border-b border-border hover:bg-foreground/2 transition-colors relative overflow-hidden"
          >
            {/* The "Accent" Glow on Hover */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="md:col-span-2 flex flex-col justify-between">
              <span className="font-mono text-xs text-accent font-bold tracking-widest">
                {feat.id}
              </span>
              <div className="p-3 w-fit rounded-full border border-border bg-background mt-4 md:mt-0 group-hover:border-accent/50 transition-colors">
                {feat.icon}
              </div>
            </div>

            <div className="md:col-span-6">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {feat.title}
              </h3>
              <p className="text-sm md:text-base opacity-70 leading-relaxed max-w-lg">
                {feat.description}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-wrap gap-2 items-start md:justify-end">
              {feat.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-3 py-1 rounded-full border border-border bg-card"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
