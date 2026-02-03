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

export default function SkillsSection() {
  // Technical Skills with Proficiency Levels
  const technicalSkills = {
    Frontend: {
      icon: Code2,
      skills: [
        { name: 'React', level: 95, years: '3+' },
        { name: 'Next.js', level: 90, years: '2+' },
        { name: 'TypeScript', level: 85, years: '2+' },
        { name: 'JavaScript (ES6+)', level: 95, years: '3+' },
        { name: 'Tailwind CSS', level: 90, years: '2+' },
        { name: 'Framer Motion', level: 80, years: '1+' },
      ],
    },
    Backend: {
      icon: Database,
      skills: [
        { name: 'Node.js', level: 75, years: '1+' },
        { name: 'PostgreSQL', level: 70, years: '1+' },
        { name: 'Prisma ORM', level: 75, years: '1+' },
        { name: 'RESTful APIs', level: 80, years: '2+' },
        { name: 'Express', level: 70, years: '1+' },
        { name: 'Supabase', level: 75, years: '1+' },
      ],
    },
    'DevOps & Tools': {
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 90, years: '3+' },
        { name: 'Docker', level: 65, years: '<1' },
        { name: 'Vercel', level: 85, years: '2+' },
        { name: 'CI/CD Pipelines', level: 70, years: '1+' },
        { name: 'Neovim/VSCode', level: 85, years: '2+' },
        { name: 'TMUX & Zsh', level: 75, years: '1+' },
      ],
    },
    Testing: {
      icon: TestTube,
      skills: [
        { name: 'Jest', level: 75, years: '1+' },
        { name: 'React Testing Library', level: 70, years: '1+' },
        { name: 'Playwright/Cypress', level: 60, years: '<1' },
        { name: 'Unit Testing', level: 75, years: '2+' },
      ],
    },
  };

  // Soft Skills & Competencies
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

  // Currently Learning
  const learning = [
    { name: 'System Design Patterns', progress: 60 },
    { name: 'AWS Cloud Services', progress: 40 },
    { name: 'Redis Caching', progress: 50 },
    { name: 'Microservices Architecture', progress: 45 },
  ];

  // Helper function to get proficiency label
  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Learning';
  };

  // Helper function to get proficiency color
  const getProficiencyColor = (level) => {
    if (level >= 90) return 'bg-gray-500';
    if (level >= 75) return 'bg-gray-500/80';
    if (level >= 60) return 'bg-gray-500/60';
    return 'bg-gray-500/40';
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(234,88,12,0.05),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="text-foreground/40">$</span> ./list-skills.sh
            --verbose
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Skills & Competencies
          </h2>
          <div className="w-24 h-1 bg-accent" />
        </motion.div>

        {/* Technical Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-foreground font-mono flex items-center gap-3">
            <span className="text-accent">{'//'}</span> Technical Skills
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(technicalSkills).map(
              ([category, data], catIndex) => {
                const Icon = data.icon;
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-300"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 " />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">
                        {category}
                      </h4>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {data.skills.map((skill, index) => (
                        <div key={skill.name}>
                          {/* Skill Name and Level */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-foreground font-medium">
                                {skill.name}
                              </span>
                              <span className="text-xs font-mono text-foreground/50">
                                {skill.years}
                              </span>
                            </div>
                            <span className="text-sm font-mono text-foreground">
                              {getProficiencyLabel(skill.level)}
                            </span>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-2 bg-border rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: catIndex * 0.1 + index * 0.05,
                              }}
                              className={`h-full ${getProficiencyColor(skill.level)} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </motion.div>

        {/* Soft Skills */}
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
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 " />
                  </div>

                  {/* Name */}
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {skill.name}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 mb-4">
                    {skill.description}
                  </p>

                  {/* Level Bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-foreground/60">Proficiency</span>
                      <span className="font-mono text-accent">
                        {skill.level}%
                      </span>
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

        {/* Current*/}
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

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 font-mono text-sm text-foreground/60"
        >
          <span className="text-accent">guest@portfolio</span>
          <span className="text-foreground/40">:</span>
          <span className="text-foreground/60">~</span>
          <span className="text-foreground/40">$</span>
          <span className="ml-2">Skills loaded successfully ✓</span>
        </motion.div>
      </div>
    </section>
  );
}
