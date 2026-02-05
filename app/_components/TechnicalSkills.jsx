'use client';

import { motion } from 'framer-motion';
import { Code2, Database, TestTube, Wrench } from 'lucide-react';
import IconContent from './IconContent';

function TechnicalSkills() {
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

  // Helper function to get proficiency color
  const getProficiencyColor = (level) => {
    if (level >= 90) return 'bg-gray-500';
    if (level >= 75) return 'bg-gray-500/80';
    if (level >= 60) return 'bg-gray-500/60';
    return 'bg-gray-500/40';
  };

  const getProficiencyLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Learning';
  };

  return (
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
        {Object.entries(technicalSkills).map(([category, data], catIndex) => {
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
                <IconContent divClass="w-10 h-10">
                  <Icon className="w-5 h-5 " />
                </IconContent>
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
        })}
      </div>
    </motion.div>
  );
}

export default TechnicalSkills;
