'use client';

import { motion } from 'framer-motion';
import CoreValue from './CoreValue';
import StatsGrid from './StatsGrid';
import TerminalFooter from './TerminalFooter';
import JourneyTimeline from './JourneyTimeline';

export default function AboutSection() {
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
                <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500 text-sm font-mono">
                  Detail Oriented
                </span>
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500 text-sm font-mono">
                  Fast Learner
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <StatsGrid />

        <CoreValue />

        <JourneyTimeline />

        <TerminalFooter />
      </div>
    </section>
  );
}
