'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function ResumeDownload() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-8 sm:p-12 relative overflow-hidden group"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />

          <div className="relative z-10">
            {/* Terminal style header */}
            <div className="font-mono text-sm text-foreground/60 mb-6">
              <span className="text-accent">guest@portfolio</span>
              <span className="text-foreground/40">:</span>
              <span className="text-foreground/60">~</span>
              <span className="text-foreground/40">$</span> cat resume.txt
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Left side - Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Resume / CV
                  </h3>
                </div>
                <p className="text-foreground/70 mb-4">
                  Download my full resume with detailed work experience,
                  education, and technical skills.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-foreground/60">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Updated February 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    PDF Format
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    ATS-Friendly
                  </span>
                </div>
              </div>

              {/* Right side - Download Buttons */}
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                {/* Primary Download Button */}
                <a
                  href="/resume.pdf"
                  download="Prefna_Vagheni_Resume.pdf"
                  className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  Download PDF
                </a>

                {/* Secondary View Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-card border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Online
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-foreground/60 font-mono">
                <span className="text-accent">→</span> Looking for something
                specific? Feel free to{' '}
                <a href="#contact" className="text-accent hover:underline">
                  reach out
                </a>{' '}
                directly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
