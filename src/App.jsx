// Author: mauvehack
// File: src/App.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MalvaAxiom from './components/MalvaAxiom';
import GlitchGarden from './components/GlitchGarden';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-900 text-pink-50 font-mono selection:bg-pink-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-neutral-900/90 backdrop-blur-md border-b border-pink-900/30">
        <h1 
          className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          MALVA TRACE
        </h1>
        <div className="space-x-6 text-sm hidden md:block">
          <button onClick={() => setActiveSection('axiom')} className="hover:text-pink-400 transition-colors uppercase tracking-widest">The Axiom</button>
          <button onClick={() => setActiveSection('garden')} className="hover:text-pink-400 transition-colors uppercase tracking-widest">Glitch Garden</button>
          <button 
            onClick={() => window.open('https://github.com/MalvaTrace', '_blank')} 
            className="hover:text-pink-400 transition-colors uppercase tracking-widest border-l border-pink-900/50 pl-6"
          >
            GitHub (ORG)
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 px-6 md:px-20 container mx-auto pb-20">
        <AnimatePresence mode="wait">
          
          {/* HOME SECTION */}
          {activeSection === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
              {/* VEO VIDEO INTEGRATION - OVAL VIEWPORT, NO LOOP, UNMUTED */}
              <div className="w-[95vw] h-[60vw] md:w-[800px] md:h-[450px] rounded-[50%] bg-black mb-10 border border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.15)] overflow-hidden relative group flex-shrink-0">
                <video 
                  autoPlay 
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <source src="/malva-origin.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-pink-900/10 pointer-events-none"></div>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
                ADONIS ESTRELLA
              </h2>
              
              <div className="flex items-center space-x-4 mb-8">
                 <span className="h-[1px] w-12 bg-pink-500/50"></span>
                 <p className="text-xl text-pink-200/80 tracking-[0.2em] uppercase">Offensive Security Engineer</p>
                 <span className="h-[1px] w-12 bg-pink-500/50"></span>
              </div>
              
              <div className="bg-neutral-800/50 px-6 py-2 rounded-full border border-pink-500/20 mb-8">
                 <span className="text-xs text-neutral-400 font-mono tracking-widest mr-2">HANDLE:</span>
                 <span className="text-sm text-pink-500 font-bold font-mono uppercase">mauvehack</span>
              </div>
              
              <p className="max-w-xl text-neutral-400 leading-relaxed italic">
                Authorized professional conducting security simulations in a controlled, legal environment.
              </p>
            </motion.div>
          )}

          {activeSection === 'axiom' && <MalvaAxiom key="axiom" />}
          {activeSection === 'garden' && <GlitchGarden key="garden" />}

        </AnimatePresence>
      </main>
      
      {/* TELEMETRY FOOTER - REPOSITIONED TO RIGHT */}
      <footer className="fixed bottom-4 right-6 text-[10px] text-neutral-600 font-mono">
        <p>SYSTEM: ONLINE // <span className="text-pink-900">MALVA BLACK: RESTRICTED</span></p>
      </footer>
    </div>
  );
};

export default App;