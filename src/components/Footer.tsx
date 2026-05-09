import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-off-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-emerald-primary rounded-xl">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">
                Le Grain De <span className="text-emerald-primary">Sénevé</span>
              </span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Cultiver aujourd'hui les talents de demain. Une école d'excellence pour un avenir serein.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#10b981' }}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-600">
              {['Le Collège', 'Pédagogie', 'Vie Scolaire', 'Admission', 'Actualités'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liens Utiles</h4>
            <ul className="space-y-4 text-gray-600">
              {['Portail Parents', 'Calendrier Scolaire', 'Cantine', 'Activités Périscolaires', 'Espace Élèves'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-primary" />
                </div>
                <p className="text-gray-600 text-sm">
                  123 Avenue de l'Éducation,<br />75000 Paris, France
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-primary" />
                </div>
                <p className="text-gray-600 text-sm">
                  +33 (0)1 23 45 67 89
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-primary" />
                </div>
                <p className="text-gray-600 text-sm">
                  contact@graindeseneve.edu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            © 2024 Collège Le Grain de Sénevé. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-emerald-primary">Mentions Légales</a>
            <a href="#" className="hover:text-emerald-primary">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
