import React, { useState } from 'react';
import { VEGETABLES } from '../data/content';
import { Language, VegetableInfo } from '../types';
import { Grid3X3, ArrowUpDown, Check, Sun, Droplet, Clock } from 'lucide-react';

interface VegetableDensityTableProps {
  language: Language;
}

export const VegetableDensityTable: React.FC<VegetableDensityTableProps> = ({ language }) => {
  const [filterDensity, setFilterDensity] = useState<number | 'all'>('all');

  const filtered = filterDensity === 'all'
    ? VEGETABLES
    : VEGETABLES.filter(v => v.perSquare === filterDensity);

  return (
    <div id="densite-legumes" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 my-10 shadow-xs">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-1">
            <Grid3X3 className="w-4 h-4" />
            <span>{language === 'fr' ? 'Tableau des Densités par Carré (30×30 cm)' : 'Vegetables Density Matrix (30×30 cm square)'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display">
            {language === 'fr' ? 'Combien de Légumes par Carré de 30 cm ?' : 'How Many Plants per 30 cm Square?'}
          </h3>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setFilterDensity('all')}
            className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
              filterDensity === 'all'
                ? 'bg-stone-900 text-white'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {language === 'fr' ? 'Tous' : 'All'}
          </button>
          {[1, 4, 9, 16].map((density) => (
            <button
              key={density}
              onClick={() => setFilterDensity(density)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filterDensity === density
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {density} / {language === 'fr' ? 'case' : 'box'}
            </button>
          ))}
        </div>
      </div>

      {/* Table responsive */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-50 text-stone-600 font-semibold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-3">{language === 'fr' ? 'Légume' : 'Vegetable'}</th>
              <th className="py-3 px-3 text-center">{language === 'fr' ? 'Plants / Carré' : 'Plants / Square'}</th>
              <th className="py-3 px-3">{language === 'fr' ? 'Espacement' : 'Spacing'}</th>
              <th className="py-3 px-3">{language === 'fr' ? 'Exposition & Eau' : 'Sun & Water'}</th>
              <th className="py-3 px-3">{language === 'fr' ? 'Cycle' : 'Cycle'}</th>
              <th className="py-3 px-3">{language === 'fr' ? 'Associations Clés' : 'Best Companions'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {filtered.map((veg) => (
              <tr key={veg.id} className="hover:bg-stone-50/70 transition-colors">
                <td className="py-3 px-3 font-medium text-stone-900 flex items-center gap-2">
                  <span className="text-lg">{veg.icon}</span>
                  <div>
                    <p className="font-semibold text-stone-900">{language === 'fr' ? veg.nameFr : veg.nameEn}</p>
                    <span className="text-[10px] text-stone-500">{veg.family}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-900 font-mono font-bold text-xs">
                    {veg.perSquare}
                  </span>
                </td>
                <td className="py-3 px-3 font-mono text-stone-600">
                  {veg.perSquare === 1 && '30 cm'}
                  {veg.perSquare === 4 && '15 cm'}
                  {veg.perSquare === 9 && '10 cm'}
                  {veg.perSquare === 16 && '7,5 cm'}
                </td>
                <td className="py-3 px-3 text-stone-600">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <Sun className="w-3 h-3 text-amber-500" /> {veg.sunRequirement}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <Droplet className="w-3 h-3 text-sky-500" /> {veg.waterNeed}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-3 text-stone-600 font-mono">
                  {veg.growthDays} {language === 'fr' ? 'jours' : 'days'}
                </td>
                <td className="py-3 px-3 text-emerald-800">
                  <span className="line-clamp-1">{veg.goodCompanions.slice(0, 3).join(', ')}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
