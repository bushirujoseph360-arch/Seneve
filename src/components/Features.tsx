import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Heart, Shield, Sparkles, Sun, Users } from 'lucide-react';

const features = [
  {
    title: "Épanouissement",
    description: "Un cadre bienveillant où chaque enfant progresse à son rythme, soutenu par une équipe passionnée.",
    icon: Heart,
    color: "bg-pink-50 text-pink-500",
    delay: 0.1
  },
  {
    title: "Excellence Académique",
    description: "Un programme rigoureux alliant fondamentaux et méthodes innovantes pour préparer l'avenir.",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-500",
    delay: 0.2
  },
  {
    title: "Environnement Sûr",
    description: "Une école moderne, sécurisée et pensée pour le confort et la sécurité des plus jeunes.",
    icon: Shield,
    color: "bg-emerald-50 text-emerald-500",
    delay: 0.3
  },
  {
    title: "Valeurs & Civisme",
    description: "Transmettre le respect, la solidarité et le sens des responsabilités dès le plus jeune âge.",
    icon: Users,
    color: "bg-amber-50 text-amber-500",
    delay: 0.4
  },
  {
    title: "Curiosité Éveillée",
    description: "Des ateliers artistiques, sportifs et technologiques pour stimuler tous les talents.",
    icon: Sparkles,
    color: "bg-purple-50 text-purple-500",
    delay: 0.5
  },
  {
    title: "Innovation Durable",
    description: "Sensibilisation à l'environnement et utilisation intelligente des nouveaux outils numériques.",
    icon: Sun,
    color: "bg-orange-50 text-orange-500",
    delay: 0.6
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pedagogie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Pourquoi nous choisir ?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Une éducation centrée sur le <span className="text-emerald-primary">potentiel unique</span> de votre enfant
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Le Grain de Sénevé n'est pas seulement une école, c'est une communauté où l'on cultive l'excellence et le bonheur.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[48px] bg-white border border-gray-100 hover:border-emerald-primary/10 hover:shadow-[0_20px_50px_rgba(4,120,87,0.05)] transition-all duration-500 group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-[20px] flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-sm`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-dark">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
