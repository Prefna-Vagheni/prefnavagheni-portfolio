'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <div className="px-6 md:px-12 lg:px-24 w-full">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-border"
      />
    </div>
  );
}
