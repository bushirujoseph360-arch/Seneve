import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Années d'excellence", value: "25+" },
  { label: "Élèves épanouis", value: "450" },
  { label: "Projets pédagogiques", value: "30+" },
  { label: "Taux de réussite", value: "100%" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-emerald-dark text-white overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-6xl font-bold mb-2 text-amber-primary">
                {stat.value}
              </h3>
              <p className="text-emerald-100 font-medium uppercase tracking-widest text-xs lg:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
