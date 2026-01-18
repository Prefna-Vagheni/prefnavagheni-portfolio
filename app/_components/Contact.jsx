'use client';
import React, { useState } from 'react';
import { Terminal, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-32 border-t border-border bg-card/20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Termin*/}
        <div className="w-full bg-border/40 rounded-t-xl p-3 flex items-center gap-2 border-x border-t border-border">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40" />
          </div>
          <div className="text-[10px] font-mono opacity-40 ml-4 uppercase tracking-widest">
            bash — contact.sh
          </div>
        </div>

        <div className="w-full bg-background border border-border rounded-b-xl p-8 md:p-12 shadow-2xl">
          <div className="font-mono text-sm md:text-base space-y-6">
            <div>
              <span className="text-accent">guest@portfolio:~$</span>
              <span className="ml-2">initiate --contact</span>
            </div>

            <div className="text-foreground/60 leading-relaxed">
              &gt; Searching for available communication channels... <br />
              &gt; Found: Email, GitHub, LinkedIn. <br />
              &gt; Status:{' '}
              <span className="text-emerald-500">Ready to collaborate.</span>
            </div>

            <div className="pt-4">
              <label className="block mb-4">
                <span className="text-accent font-bold">?</span> What is your
                email address?
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="bg-transparent border-b-2 border-border focus:border-accent outline-none py-2 grow transition-colors font-mono"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all font-sans font-bold uppercase text-xs tracking-widest">
                  Send Command <Send size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] opacity-40 mb-6">
              Connect_Social
            </h4>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="text-left md:text-right font-mono text-[10px] opacity-40 leading-loose">
            DESIGNED & ENGINEERED BY YOUR_NAME <br />
            BUILT WITH NEXT.JS 14 / TAILWIND / FRAMER MOTION <br />© 2024 ALL
            RIGHTS RESERVED_
          </div>
        </div>
      </div>
    </section>
  );
}
