import React from 'react';
import { CALENDAR_SEASONS } from '../data/content';
import { Language } from '../types';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface SeasonalCalendarProps {
  language: Language;
}

export const SeasonalCalendar: React.FC<SeasonalCalendarProps> = ({ language }) => {
  return (
    <section id="calendrier" className="my-12">
      <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2">
        <Calendar className="w-4 h-4" />
        <span>{language === 'fr' ? 'Calendrier de Culture' : 'Gardening Calendar'}</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display mb-3">
        {language === 'fr'
          ? 'Que Faire au Potager Carré au Fil des Saisons ?'
          : 'Square Foot Garden Task Calendar by Season'}
      </h2>
      <p className="text-stone-600 text-sm mb-8 max-w-2xl">
        {language === 'fr'
          ? 'Grâce à la rotation rapide des 16 cases, votre potager carré reste productif toute l\'année sans temps mort.'
          : 'Thanks to rapid succession planting across 16 squares, keep your raised bed productive year-round.'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CALENDAR_SEASONS.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border ${item.color} transition-all hover:shadow-xs`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-bold text-base text-stone-900 font-serif-display">
                {language === 'fr' ? item.seasonFr : item.seasonEn}
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
              {(language === 'fr' ? item.actionsFr : item.actionsEn).map((action, aIdx) => (
                <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
