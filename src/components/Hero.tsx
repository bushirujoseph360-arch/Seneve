import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 text-emerald-primary animate-pulse">
          <path d="M450.5 150.5C510.5 210.5 560.5 300.5 540.5 380.5C520.5 460.5 430.5 530.5 350.5 550.5C270.5 570.5 200.5 540.5 130.5 490.5C60.5 440.5 0.5 370.5 0.5 300.5C0.5 230.5 60.5 160.5 130.5 110.5C200.5 60.5 280.5 30.5 350.5 50.5C420.5 70.5 390.5 90.5 450.5 150.5Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/4 translate-y-1/4">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10 text-amber-primary">
          <path d="M300.5 100.5C340.5 140.5 370.5 200.5 360.5 250.5C350.5 300.5 290.5 340.5 230.5 360.5C170.5 380.5 110.5 370.5 70.5 330.5C30.5 290.5 10.5 230.5 10.5 180.5C10.5 130.5 30.5 90.5 70.5 50.5C110.5 10.5 170.5 0.5 220.5 10.5C270.5 20.5 260.5 60.5 300.5 100.5Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-primary rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Éducation d'Excellence
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-8">
              Cultiver chaque <br />
              <span className="text-emerald-primary relative">
                potentiel
              </span> <br />
              avec bienveillance.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              Une école élémentaire où l'épanouissement personnel rencontre la rigueur académique dans un cadre naturel et stimulant.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-emerald-primary/20 transition-transform cursor-pointer"
              >
                Inscriptions 2024
              </motion.a>
              <motion.a
                href="#pedagogie"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-dark px-10 py-5 rounded-full font-bold text-lg border-2 border-emerald-primary/10 hover:border-emerald-primary transition-all shadow-lg shadow-black/5 cursor-pointer"
              >
                Découvrir l'école
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Organic Background Shape */}
            <div className="absolute -z-10 w-[500px] h-[500px] bg-amber-primary/10 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse" />

            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white relative z-10 transition-transform hover:rotate-1 duration-700">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Children learning happily" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 -left-12 bg-white p-5 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-gray-50"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl shadow-inner">
                🌱
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase text-gray-400 tracking-wider">Label Qualité</div>
                <div className="text-sm font-bold text-emerald-primary text-nowrap">Éducation Verte 2024</div>
              </div>
            </motion.div>

            {/* Success Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-amber-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20"
            >
              <span className="text-white font-bold text-center leading-none text-sm">
                100%<br/><small className="text-[9px] tracking-tighterUppercase">RÉUSSITE</small>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
