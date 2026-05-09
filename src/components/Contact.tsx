import React from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 bg-off-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-emerald-primary font-bold uppercase tracking-widest text-sm mb-4">
              Nous Contacter
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-emerald-dark">
              Préparez l'avenir de votre enfant <span className="text-emerald-primary">dès aujourd'hui</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Vous souhaitez inscrire votre enfant ou simplement en savoir plus sur notre projet pédagogique ? Notre équipe est à votre écoute pour vous accompagner dans cette démarche.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Phone, text: "+33 (0)1 23 45 67 89", label: "Téléphone" },
                { icon: Mail, text: "admission@graindeseneve.edu", label: "Email" },
                { icon: MessageSquare, text: "Réponse sous 24h ouvrées", label: "Disponibilité" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-emerald-primary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-semibold text-emerald-dark">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-12 rounded-[48px] shadow-2xl shadow-emerald-900/5 border border-gray-100"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-emerald-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
                <p className="text-gray-500">Nous vous recontacterons très prochainement.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-emerald-primary font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Nom Complet</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        required
                        type="text" 
                        placeholder="Jean Dupont"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-primary/20 transition-all outline-none" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        required
                        type="email" 
                        placeholder="jean@exemple.com"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-primary/20 transition-all outline-none" 
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Sujet de la demande</label>
                  <select className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-primary/20 transition-all outline-none appearance-none">
                    <option>Inscriptions 2024</option>
                    <option>Visite de l'école</option>
                    <option>Informations pédagogiques</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Votre Message</label>
                  <textarea 
                    required
                    rows={4} 
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full px-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-primary/20 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending'}
                  className="w-full bg-emerald-primary text-white py-5 rounded-2xl font-bold shadow-xl shadow-emerald-primary/20 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'sending' ? "Envoi en cours..." : (
                    <>
                      Envoyer ma demande
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
