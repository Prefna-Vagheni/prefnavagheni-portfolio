'use client';
import { containerVariants } from '@/_utils/animations';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Layout, Code2, Terminal } from 'lucide-react';
import IconContent from './IconContent';

const tech = [
  {
    name: 'Frontend',
    tools: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    icon: <Layout className="w-5 h-5" />,
    size: 'md:col-span-2',
  },
  {
    name: 'Backend',
    tools: ['PostgreSQL', 'Prisma'],
    icon: <Database className="w-5 h-5" />,
    size: 'md:col-span-1',
  },
  {
    name: 'Languages',
    tools: ['TypeScript', 'JavaScript', ''],
    icon: <Code2 className="w-5 h-5" />,
    size: 'md:col-span-1',
  },
  {
    name: 'Currently Learning',
    tools: ['System Design', 'Node Js', 'Docker'],
    icon: <Cpu className="w-5 h-5" />,
    size: 'md:col-span-2',
    highlight: true,
  },
  {
    name: 'Environment',
    tools: ['Neovim', 'TMUX', 'Zsh'],
    icon: <Terminal className="w-5 h-5" />,
    size: 'md:col-span-2',
  },
];

export default function TechStack() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div className="flex flex-col mb-12">
        <h2 className="text-3xl font-medium tracking-tighter">
          Technical Arsenal
        </h2>
        <div className="h-1 w-12 bg-accent mt-2" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]"
      >
        {tech.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 flex flex-col justify-between transition-colors hover:border-accent/50 ${item.size}`}
          >
            <div className="flex justify-between items-start">
              <IconContent divClass="p-2">{item.icon}</IconContent>
              
              {item.highlight && (
                <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 animate-pulse">
                  IN_PROGRESS
                </span>
              )}
            </div>

            <div>
              <h3 className="text-sm font-mono uppercase tracking-widest opacity-50 mb-2">
                {item.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool) => (
                  <span key={tool} className="text-sm font-medium">
                    {tool}
                    {idx === item.tools.length - 1 ? '' : ' /'}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
