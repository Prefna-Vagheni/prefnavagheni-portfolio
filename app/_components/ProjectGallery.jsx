'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: '01',
    hash: 'sha256:7f8e9a',
    title: 'Freelancer Analytics Dashboard',
    description:
      'A full-stack business intelligence platform designed for software freelancers to centralize project management and financial health. This project replaces fragmented spreadsheets with a unified, data-driven dashboard that offers real-time insights into earnings, expenses, and client performance.',
    // description:
    //   'A real-time data visualization platform focusing on fluid animations and high-throughput data streams.',
    backendNote:
      'Built a custom WebSocket provider to handle live data updates with a 40ms latency target.',
    stack: ['React 19', 'Tailwind', 'Tailwind CSS', 'TanStack Query'],
    // stack: ['Next.js', 'Redis', 'Framer Motion', 'Socket.io'],
    link: 'https://freelancer-analytics.vercel.app',
    github: 'https://github.com/Prefna-Vagheni/Freelancer-Analytics',
    image: '/images/freelancer-bg.png',
    // image:
    // 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', // Placeholder
  },
  {
    id: '02',
    hash: 'sha256:3d2c1b',
    title: 'Lockin Salon Appointment',
    description:
      'A full-stack salon booking platform built with Next.js 15, featuring Google OAuth authentication, Stripe payment integration, and real-time availability management. The application provides separate interfaces for clients to book appointments and administrators to manage services, staff, and bookings.',
    backendNote:
      'OAuth authentication, payment processing, email notifications, role-based access control, dynamic availability checking, responsive design',
    stack: [
      'Next.js',
      ' React',
      'Supabase',
      'NextAuth.js',
      'Stripe',
      'Tailwind CSS',
    ],
    link: ' https://lockin-sigma.vercel.app ',
    github: 'https://github.com/Prefna-Vagheni/lockin',
    image: '/images/lockin-bg.png',
    // image:
    //   'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2564&auto=format&fit=crop', // Placeholder
  },
];

export default function ProjectGallery() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 border-t border-border">
      <div className="flex justify-between items-end mb-20">
        <div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-2 block">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter">
            Production Deployments
          </h2>
        </div>
        <div className="hidden md:block text-right opacity-40 font-mono text-xs">
          [v1.0.4] <br />
          STABLE_RELEASE
        </div>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            <div className="lg:col-span-3 flex flex-col justify-between py-4 order-2 lg:order-1">
              <div>
                <div className="font-mono text-xs opacity-40 mb-1">
                  {project.hash}
                </div>
                <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="p-3 bg-card border border-border rounded-lg">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accent mb-1 uppercase tracking-tighter">
                      <Layers size={12} /> System Architecture
                    </div>
                    <p className="text-xs italic opacity-80">
                      {project.backendNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono border border-border px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href={project.link}
                  className="hover:text-accent transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.github}
                  className="hover:text-accent transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="group relative aspect-video overflow-hidden rounded-2xl bg-card border border-border">
                <Link href={project.link}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105 cursor-pointer"
                    width={500}
                    height={500}
                  />
                </Link>
                <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
