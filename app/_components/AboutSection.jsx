'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, Globe, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { label: 'Lines of Code', value: '100K+', icon: Code2 },
    { label: 'Projects Shipped', value: '15+', icon: Zap },
    { label: 'Technologies', value: '20+', icon: Cpu },
    { label: 'Happy Clients', value: '8+', icon: Users },
  ];

  const journey = [
    {
      year: '2024',
      title: 'Full-Stack Transition',
      description:
        'Expanding from frontend expertise into backend systems, databases, and cloud infrastructure.',
    },
    {
      year: '2023',
      title: 'Frontend Mastery',
      description:
        'Built production-grade applications with React, Next.js, and modern animation libraries.',
    },
    {
      year: '2022',
      title: 'Engineering Foundation',
      description:
        'Started journey in web development, focusing on clean code and user experience.',
    },
  ];

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
    <section
      id="about"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background Grid Effect - subtle overlay on existing body grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,88,12,0.05),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="font-mono text-sm text-foreground/60 mb-4">
            <span className="text-accent">guest@portfolio</span>
            <span className="text-foreground/40">:</span>
            <span className="text-foreground/60">~</span>
            <span className="text-foreground/40">$</span> cat about.md
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent" />
        </motion.div>

        {/* Main Bio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-card border border-border rounded-lg p-8 sm:p-12 relative overflow-hidden group">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />

            <div className="relative z-10 space-y-6 text-foreground/80 leading-relaxed text-lg">
              <p className="text-xl text-foreground font-medium">
                Hey, I&apos;m{' '}
                <span className="text-accent font-bold">Prefna Vagheni</span> —
                a frontend specialist evolving into a full-stack engineer.
              </p>

              <p>
                I believe great engineering is invisible to users but evident in
                every interaction. My journey started with crafting
                pixel-perfect interfaces, but I&apos;ve grown obsessed with the
                entire stack — from database optimization to cloud architecture.
              </p>

              <p>
                What drives me?{' '}
                <span className="text-foreground font-medium">
                  Building systems that scale
                </span>
                . Whether it&apos;s a real-time analytics dashboard or a booking
                platform handling thousands of appointments, I focus on writing
                clean, maintainable code that solves real problems.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me diving into system
                design patterns, experimenting with new frameworks, or
                contributing to open-source. I&apos;m a firm believer in
                learning in public and shipping often.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-mono">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-mono">
                  Detail Oriented
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-mono">
                  Fast Learner
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
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

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
            <span className="text-accent">${'//'}</span> Core Values
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
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">
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

        {/* Journey Timeline */}
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
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-accent">
                        {item.year}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
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

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 font-mono text-sm text-foreground/60"
        >
          <span className="text-accent">guest@portfolio</span>
          <span className="text-foreground/40">:</span>
          <span className="text-foreground/60">~</span>
          <span className="text-foreground/40">$</span>
          <span className="ml-2 animate-pulse">_</span>
        </motion.div>
      </div>
    </section>
  );
}
