import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="fixed bottom-6 right-6 z-50">
      <a
        href="https://gamma.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-x-2 rounded-full border border-white/10 bg-[#1a3333] px-3.5 py-1.5 text-sm text-text-secondary opacity-70 transition-opacity hover:opacity-100"
      >
        <span>
          Made with <span className="font-semibold text-text-primary">GAMMA</span>
        </span>
        <Sparkles className="h-3.5 w-3.5" />
      </a>
    </footer>
  );
};

export default Footer;