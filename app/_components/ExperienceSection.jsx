'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Code,
  Award,
} from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Tech Startup Inc.',
      role: 'Frontend Engineer',
      type: 'Full-time',
      location: 'Remote',
      period: 'Jan 2024 - Present',
      duration: '1+ years',
      description:
        'Leading frontend development for a SaaS platform serving 10K+ users. Architected component library and implemented design system.',
      achievements: [
        'Reduced bundle size by 40% through code-splitting and lazy loading',
        'Improved Lighthouse performance score from 65 to 95',
        'Built real-time collaboration features using WebSockets',
        'Mentored 2 junior developers on React best practices',
      ],
      technologies: [
        'React',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'WebSockets',
      ],
      impact: {
        metric: '40%',
        description: 'Performance Improvement',
      },
    },
    {
      company: 'Digital Agency',
      role: 'Frontend Developer',
      type: 'Contract',
      location: 'Hybrid',
      period: 'Jun 2023 - Dec 2023',
      duration: '7 months',
      description:
        'Developed custom websites and web applications for clients in e-commerce, healthcare, and finance sectors.',
      achievements: [
        'Delivered 8 client projects on time and within budget',
        'Increased mobile conversion rates by 25% through responsive design',
        'Implemented accessibility standards (WCAG 2.1 AA)',
        'Established CI/CD pipeline reducing deployment time by 60%',
      ],
      technologies: [
        'React',
        'Vue.js',
        'SCSS',
        'Node.js',
        'PostgreSQL',
        'Docker',
      ],
      impact: {
        metric: '8',
        description: 'Projects Delivered',
      },
    },
    {
      company: 'Freelance',
      role: 'Full-Stack Developer',
      type: 'Self-employed',
      location: 'Remote',
      period: 'Jan 2022 - May 2023',
      duration: '1.5 years',
      description:
        'Provided end-to-end development services for small businesses and startups, specializing in MVPs and prototypes.',
      achievements: [
        'Built and launched 5 production applications',
        'Achieved 100% client satisfaction rate',
        'Reduced client hosting costs by migrating to serverless architecture',
        'Established long-term retainer relationships with 3 clients',
      ],
      technologies: [
        'React',
        'Next.js',
        'Firebase',
        'Stripe API',
        'Vercel',
        'Supabase',
      ],
      impact: {
        metric: '5',
        description: 'Apps Launched',
      },
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background"
    >
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(234,88,12,0.05),transparent)]" />

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
            <span className="text-foreground/40">$</span> cat experience.log
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-accent" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical line */}
          <div className="absolute left-2.75 sm:left-3.75 top-8 bottom-8 w-0.5 bg-linear-to-b from-accent via-border to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform" />

              {/* Content Card */}
              <div className="bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 group">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-5 h-5 text-accent" />
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-xl text-accent font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-accent font-mono text-xs">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric */}
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center min-w-30">
                    <div className="text-3xl font-bold text-accent font-mono mb-1">
                      {exp.impact.metric}
                    </div>
                    <div className="text-xs text-foreground/60 leading-tight">
                      {exp.impact.description}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    <h4 className="font-mono text-sm text-foreground/80">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/70 text-sm"
                      >
                        <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4 text-accent" />
                    <h4 className="font-mono text-sm text-foreground/80">
                      Technologies Used
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-accent/5 border border-accent/20 rounded-md text-accent text-xs font-mono hover:bg-accent/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-card border border-border rounded-lg p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 font-mono flex items-center gap-2">
            <span className="text-accent">${'//'} </span> Career Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2+', label: 'Years Experience', icon: Calendar },
              { value: '15+', label: 'Projects Completed', icon: Briefcase },
              { value: '20+', label: 'Technologies', icon: Code },
              { value: '95%', label: 'Performance Score', icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="text-center"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="text-3xl font-bold text-foreground font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </motion.div>
              );
            })}
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
          <span className="ml-2">EOF — End of Experience Log</span>
        </motion.div>
      </div>
    </section>
  );
}
