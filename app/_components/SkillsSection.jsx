'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Layers,
  Database,
  Wrench,
  Users,
  TrendingUp,
  MessageSquare,
  GitBranch,
  Cloud,
  TestTube,
  Zap,
  Target,
} from 'lucide-react';
import TerminalHeader from './TerminalHeader';
import TerminalFooter from './TerminalFooter';
import SoftSkills from './SoftSkills';
import TechnicalSkills from './TechnicalSkills';

export default function SkillsSection() {
  // Technical Skills with Proficiency Levels

  // Currently Learning
  const learning = [
    { name: 'System Design Patterns', progress: 60 },
    { name: 'AWS Cloud Services', progress: 40 },
    { name: 'Redis Caching', progress: 50 },
    { name: 'Microservices Architecture', progress: 45 },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,88,12,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <TerminalHeader
          text="./list-skills.sh
            --verbose"
          title="Skills & Competencies"
        />

        <TechnicalSkills />

        <SoftSkills />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
            <span className="text-accent">→</span> Currently Learning
          </h3>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {learning.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      {item.name}
                    </span>
                    <span className="text-sm font-mono text-accent">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className="h-full bg-linear-to-r from-gray-100/60 to-gray-100 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-foreground/60 font-mono">
                <span className="text-accent">→</span> Always expanding my skill
                set through hands-on projects and continuous practice
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skill Legend */}
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

        <TerminalFooter text="Skills loaded successfully ✓" />
      </div>
    </section>
  );
}
