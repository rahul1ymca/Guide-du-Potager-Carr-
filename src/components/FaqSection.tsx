import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { Language } from '../types';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="my-12">
      <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
        <HelpCircle className="w-4 h-4" />
        <span>{language === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display mb-6">
        {language === 'fr'
          ? 'Tout ce que vous devez savoir sur le potager carré'
          : 'Everything You Need to Know About Square Foot Gardening'}
      </h2>

      <div className="space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden transition-colors shadow-2xs"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-emerald-800 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base pr-2">
                  {language === 'fr' ? faq.questionFr : faq.questionEn}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 text-stone-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-stone-600 text-sm leading-relaxed border-t border-stone-100 bg-stone-50/50">
                  <p>{language === 'fr' ? faq.answerFr : faq.answerEn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
