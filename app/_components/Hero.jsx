'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  const sentence =
    'Engineering excellence in every commit, every feature, every product.';

  const words = sentence.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span className="text-sm font-mono tracking-tighter uppercase opacity-60">
            Available for full-stack opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] text-foreground"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-lg md:text-xl max-w-xl opacity-60 font-light"
        >
          Frontend Specialist transitioning into Full-Stack Engineering.
          Focusing on scalable architectures and high-performance interfaces.
        </motion.p>
      </div>
    </section>
  );
}
