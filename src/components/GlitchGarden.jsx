// Author: mauvehack
// File: src/components/GlitchGarden.jsx

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AWS S3 Ransomware Simulation",
    tech: "Python // AWS // IAM",
    desc: "Simulated ransomware lifecycle in cloud environments to evaluate detection and response capabilities."
  },
  {
    title: "Lateral Movement & Credential Theft",
    tech: "Active Directory // PowerShell",
    desc: "Execution of advanced post-exploitation tactics to identify Active Directory misconfigurations."
  },
  {
    title: "Adversarial AI Jailbreaking",
    tech: "LLM // Prompt Engineering",
    desc: "Bypassing safety guardrails in commercial LLMs to expose cognitive vulnerabilities and logic flaws."
  }
];

const GlitchGarden = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="max-w-4xl mx-auto py-12"
    >
      <div className="mb-12 border-l-2 border-pink-500 pl-6">
        <h3 className="text-pink-500 text-xs font-bold tracking-[0.2em] mb-2">CLASSIFICATION: BLACK // ARCHIVE</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-white">THE GLITCH GARDEN</h2>
        <p className="text-neutral-400 mt-4 leading-relaxed">
          A curated collection of adversarial simulations and offensive tooling. Review the attack paths. Understand the root cause.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {projects.map((item, index) => (
          <motion.div 
            key={index} 
            whileHover={{ 
              x: [0, -3, 3, -2, 0],
              opacity: [1, 0.8, 1, 0.9, 1],
              skewX: [0, -2, 2, 0],
              transition: { duration: 0.3, repeat: Infinity }
            }}
            className="bg-neutral-800/40 border border-pink-900/30 p-6 hover:border-pink-500/50 transition-colors group cursor-crosshair relative overflow-hidden"
          >
            <h4 className="text-pink-400 font-mono text-sm mb-2 opacity-80 group-hover:opacity-100">{item.tech}</h4>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors relative z-10">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={() => window.open('https://github.com/mauvehack', '_blank')}
          className="px-8 py-3 bg-pink-900/20 border border-pink-500 text-pink-400 font-mono uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          Access PoC Archives
        </button>
      </div>
    </motion.div>
  );
};

export default GlitchGarden;