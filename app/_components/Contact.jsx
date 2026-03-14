'use client';
import React, { useState } from 'react';
import { Terminal, Send, Github, Linkedin, Twitter } from 'lucide-react';

import { sendEmail } from '@/actions/email';
import { toast } from 'react-hot-toast';
import SubmitButton from './SubmitButton';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleAction = async (formData) => {
    const result = await sendEmail(formData);
    if (result.success) {
      toast.success('Command executed: Message sent successfully! 🚀', {
        duration: 4000,
        style: {
          background: '#0A0A0A',
          color: '#FAFAFA',
          border: '1px solid #EA580C',
        },
        iconTheme: {
          primary: '#EA580C',
          secondary: '#FAFAFA',
        },
      });
      setEmail('');
      setMessage('');
    } else {
      toast.error(
        result.error || 'Error: Connection failed. Please try again.',
        {
          duration: 4000,
          style: {
            background: '#0A0A0A',
            color: '#FAFAFA',
            border: '1px solid #DC2626',
          },
        },
      );
    }
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-24 py-32 border-t border-border bg-card/20"
    >
      <div className="max-w-4xl mx-auto">
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

        <form
          action={handleAction}
          className="w-full bg-background border border-border rounded-b-xl p-8 md:p-12 shadow-2xl"
        >
          <div className="font-mono text-sm md:text-base space-y-6">
            <div>
              <span className="text-accent">guest@portfolio:~$</span>
              <span className="ml-2">initiate --contact</span>
            </div>

            <div className="text-foreground/60 leading-relaxed">
              &gt; Searching for available communication channels...
              <br />
              &gt; Found: Email, GitHub, LinkedIn. <br />
              &gt; Status:{' '}
              <span className="text-emerald-500">Ready to collaborate.</span>
            </div>

            <div className="pt-4 space-y-6">
              {/* Email Field */}
              <label className="block">
                <span className="text-accent font-bold">?</span> What is your
                email address?
                <input
                  name="senderEmail"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="block w-full bg-transparent border-b-2 border-border focus:border-accent outline-none py-2 mt-2 transition-colors font-mono"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              {/* Message Field */}
              <label className="block">
                <span className="text-accent font-bold">?</span> What would you
                like to say? (Optional)
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  className="block w-full bg-transparent border-2 border-border focus:border-accent outline-none py-2 px-3 mt-2 rounded transition-colors font-mono resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              {/* Submit Button */}
              <div className="pt-2">
                <SubmitButton />
              </div>
            </div>
          </div>
        </form>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] opacity-40 mb-6">
              Connect_Social
            </h4>
            <div className="flex gap-8">
              <a
                href="https://github.com/Prefna-Vagheni"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/prefna-vagheni-051115266/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/PrefnaV"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Twitter/X Profile"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div className="text-left md:text-right font-mono text-[10px] opacity-40 leading-loose">
            DESIGNED & ENGINEERED BY PREFNA VAGHENI
            <br />
            BUILT WITH NEXT.JS 16 / TAILWIND / FRAMER MOTION <br />©{' '}
            {new Date().getFullYear()} ALL RIGHTS RESERVED_
          </div>
        </div>
      </div>
    </section>
  );
}
