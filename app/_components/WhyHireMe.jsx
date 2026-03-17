'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity, ShieldCheck, Rocket, Zap } from 'lucide-react';

const reasons = [
  {
    title: 'TypeScript Specialist',
    description:
      'Deep expertise in the modern TS ecosystem, ensuring type-safe, maintainable, and self-documenting codebases.',
    icon: <ShieldCheck className="text-accent" size={24} />,
  },
  {
    title: 'SaaS Architecture',
    description:
      'Proven experience building production-ready SaaS products with complex billing, auth, and state management.',
    icon: <Rocket className="text-accent" size={24} />,
  },
  {
    title: 'System Thinker',
    description:
      'Architecting scalable systems from database indexing to API rate-limiting and frontend performance optimization.',
    icon: <Zap className="text-accent" size={24} />,
  },
];

export default function WhyHireMe() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 bg-foreground/2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: The Hero Metric */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
              Why <br /> <span className="text-accent">Hire Me?</span>
            </h2>
            {/* <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none mb-8">
              System <br /> <span className="text-accent">Validation</span>
            </h2> */}
            <p className="text-sm md:text-base opacity-60 max-w-sm mb-12 uppercase font-mono tracking-tighter">
              <span className="text-accent">//</span> Quantitative and
              qualitative evidence of engineering impact.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl border border-border bg-background shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Activity size={80} />
            </div>
            <div className="relative z-10">
              <span className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                2,700+
              </span>
              <p className="text-xs font-mono uppercase tracking-[0.2em] mt-2 text-accent">
                Annual Contributions
              </p>
              <p className="text-sm mt-6 opacity-60 leading-relaxed">
                Consistency is the engine of excellence. My GitHub activity
                reflects a daily commitment to shipping, learning, and refining
                code.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: The Value Props */}
        <div className="lg:col-span-7 space-y-4">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl border border-border hover:border-accent/30 transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="p-3 rounded-xl bg-background border border-border group-hover:bg-accent/5 group-hover:border-accent/20 transition-colors">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="p-8 rounded-2xl border border-dashed border-border flex items-center justify-center opacity-40">
            <p className="text-xs font-mono uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} /> Ready for Deployment to your team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
