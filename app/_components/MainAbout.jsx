'use client';
import { motion } from 'framer-motion';

function MainAbout() {
  return (
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
            <span className="text-accent font-bold">Prefna Vagheni</span> — a
            frontend specialist evolving into a full-stack engineer.
          </p>

          <p>
            I believe great engineering is invisible to users but evident in
            every interaction. My journey started with crafting pixel-perfect
            interfaces, but I&apos;ve grown obsessed with the entire stack —
            from database optimization to cloud architecture.
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
            design patterns, experimenting with new frameworks, or contributing
            to open-source. I&apos;m a firm believer in learning in public and
            shipping often.
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
  );
}

export default MainAbout;
