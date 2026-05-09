import React from 'react';
import { BookOpen, Palette, Globe, Shield } from 'lucide-react';

export default function Infobar() {
  return (
    <div className="bg-white border-t border-gray-100 px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-primary shadow-inner">
          <BookOpen className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium">Classes à <span className="text-emerald-primary font-bold">effectifs réduits</span></p>
      </div>
      
      <div className="hidden md:block w-px h-10 bg-gray-200" />
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-primary shadow-inner">
          <Palette className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium">Ateliers <span className="text-amber-primary font-bold">artistiques & sportifs</span></p>
      </div>
      
      <div className="hidden md:block w-px h-10 bg-gray-200" />
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-primary shadow-inner">
          <Globe className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium">Ouverture <span className="text-emerald-primary font-bold">internationale</span></p>
      </div>
      
      <div className="hidden md:block w-px h-10 bg-gray-200" />
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-primary shadow-inner">
          <Shield className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium">Environnement <span className="text-amber-primary font-bold">sécurisé & serein</span></p>
      </div>
    </div>
  );
}
