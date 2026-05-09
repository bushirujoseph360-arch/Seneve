import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-emerald-primary rounded-full flex items-center justify-center shadow-lg shadow-emerald-primary/20">
              <span className="text-white font-bold text-xl font-serif">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-emerald-primary">
              Le Grain De Sénevé
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-10">
            {['Le Collège', 'Pédagogie', 'Vie Scolaire', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-').replace('é', 'e')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs font-bold uppercase tracking-widest text-emerald-dark/80 hover:text-emerald-primary transition-colors cursor-pointer"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-xl shadow-amber-primary/20 transition-transform cursor-pointer"
            >
              Inscriptions 2024
            </motion.a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Le Collège', 'Pédagogie', 'Vie Scolaire', 'Admission', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-emerald-primary hover:bg-emerald-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-amber-primary text-white px-6 py-3 rounded-xl font-semibold">
              Inscriptions 2024
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
