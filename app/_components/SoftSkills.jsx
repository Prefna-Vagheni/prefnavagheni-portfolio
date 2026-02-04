'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  MessageSquare,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import IconContent from './IconContent';

const softSkills = [
  {
    icon: MessageSquare,
    name: 'Communication',
    level: 90,
    description: 'Clear technical documentation and stakeholder updates',
  },
  {
    icon: Users,
    name: 'Team Collaboration',
    level: 85,
    description: 'Agile methodologies, pair programming, code reviews',
  },
  {
    icon: Target,
    name: 'Problem Solving',
    level: 90,
    description: 'Analytical thinking and debugging complex issues',
  },
  {
    icon: TrendingUp,
    name: 'Continuous Learning',
    level: 95,
    description: 'Quick adaptation to new technologies and frameworks',
  },
  {
    icon: Layers,
    name: 'System Design',
    level: 75,
    description: 'Architecture planning and scalability considerations',
  },
  {
    icon: Zap,
    name: 'Project Management',
    level: 80,
    description: 'Task prioritization, time management, deadline delivery',
  },
];

function SoftSkills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-20"
    >
      <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
        <span className="text-accent">$</span> Soft Skills & Methodologies
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <IconContent divClass="w-12 h-12">
                <Icon className="w-6 h-6 " />
              </IconContent>

              <h4 className="text-lg font-bold text-foreground mb-2">
                {skill.name}
              </h4>

              <p className="text-sm text-foreground/70 mb-4">
                {skill.description}
              </p>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-foreground/60">Proficiency</span>
                  <span className="font-mono text-accent">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gray-300 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SoftSkills;
