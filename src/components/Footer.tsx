import React from 'react';
import { Sprout, Heart, Leaf, ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800 text-sm">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg font-serif-display">Le Potager Carré</span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md leading-relaxed">
              {language === 'fr'
                ? 'Le portail de référence francophone dédié à la culture en potager carré, au jardinage bio, à la permaculture urbaine et aux récoltes abondantes sur petites surfaces.'
                : 'The premier reference guide dedicated to square foot gardening, permaculture practices, and abundant organic harvests in compact spaces.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>{language === 'fr' ? 'Contenu rédigé par des agronomes passionnés' : 'Reviewed by passionate agronomists'}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              {language === 'fr' ? 'Chapitres Clés' : 'Key Chapters'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#etape-1" className="hover:text-white transition-colors">{language === 'fr' ? 'Étape 1 : Emplacement' : 'Step 1: Location'}</a></li>
              <li><a href="#etape-2" className="hover:text-white transition-colors">{language === 'fr' ? 'Étape 2 : Bois & Dimensions' : 'Step 2: Wood & Sizes'}</a></li>
              <li><a href="#etape-4" className="hover:text-white transition-colors">{language === 'fr' ? 'Étape 4 : Terreau & Mélange' : 'Step 4: Soil Mix'}</a></li>
              <li><a href="#etape-6" className="hover:text-white transition-colors">{language === 'fr' ? 'Étape 6 : Règle des densités' : 'Step 6: Plant Density'}</a></li>
              <li><a href="#simulateur" className="hover:text-white transition-colors">{language === 'fr' ? 'Simulateur 16 cases' : '16-Square Simulator'}</a></li>
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              {language === 'fr' ? 'Jardinage Responsable' : 'Eco Gardening'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-1.5"><Leaf className="w-3.5 h-3.5 text-emerald-400" /> {language === 'fr' ? '100% Biologique & Zéro Pesticide' : '100% Organic & Chemical-Free'}</li>
              <li>{language === 'fr' ? 'Économie d\'eau jusqu\'à -70%' : 'Save up to 70% Water'}</li>
              <li>{language === 'fr' ? 'Matériaux recyclables & durables' : 'Recyclable & Sustainable Materials'}</li>
              <li>{language === 'fr' ? 'Accessibilité petits balcons' : 'Balcony & Patio Friendly'}</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Le Potager Carré. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{language === 'fr' ? 'Haut de page' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
