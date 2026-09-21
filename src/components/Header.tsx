import React from 'react';
import { Sprout, Share2, Globe, Printer, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenShare: () => void;
  readingProgress: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenShare,
  readingProgress
}) => {
  const handlePrint = () => {
    window.print();
  };

  const scrollToToc = () => {
    const el = document.getElementById('table-of-contents');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      
      {/* Top Reading Progress Bar */}
      <div className="w-full h-1 bg-stone-200/70 overflow-hidden">
        <div
          className="h-full bg-emerald-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <a href="#introduction" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-800 transition-colors">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-stone-900 font-serif-display leading-tight tracking-tight block">
              Le Potager Carré
            </span>
            <span className="text-[10px] uppercase font-semibold text-emerald-700 tracking-wider block">
              {language === 'fr' ? 'Guide Permaculture & Bio' : 'Permaculture & Organic Guide'}
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          
          {/* Jump to TOC button on mobile */}
          <button
            onClick={scrollToToc}
            className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 transition-colors"
            title={language === 'fr' ? 'Aller au sommaire' : 'Jump to contents'}
            aria-label="Sommaire"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Share Button */}
          <button
            id="header-share-btn"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 font-medium text-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
            title={language === 'fr' ? 'Partager cet article' : 'Share this guide'}
          >
            <Share2 className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">{language === 'fr' ? 'Partager' : 'Share'}</span>
          </button>

          {/* Print Button */}
          <button
            id="header-print-btn"
            onClick={handlePrint}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 bg-white hover:bg-stone-100 text-stone-700 font-medium text-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
            title={language === 'fr' ? 'Imprimer ou sauvegarder en PDF' : 'Print or Save as PDF'}
          >
            <Printer className="w-3.5 h-3.5 text-stone-500" />
            <span>{language === 'fr' ? 'Imprimer' : 'Print'}</span>
          </button>

          {/* Language Switch Button (French <-> English) */}
          <button
            id="header-lang-btn"
            onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
            title={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-300" />
            <span>{language === 'fr' ? '🇫🇷 FR → 🇬🇧 EN' : '🇬🇧 EN → 🇫🇷 FR'}</span>
          </button>

        </div>

      </div>
    </header>
  );
};
