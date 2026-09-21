import React, { useState } from 'react';
import { VEGETABLES } from '../data/content';
import { VegetableInfo, Language } from '../types';
import { Sparkles, RefreshCw, CheckCircle2, AlertTriangle, Compass, Info } from 'lucide-react';

interface GardenPlannerProps {
  language: Language;
}

export const GardenPlanner: React.FC<GardenPlannerProps> = ({ language }) => {
  // Default balanced 16-square preset
  const defaultLayout: (string | null)[] = [
    'tomate', 'basilic', 'salade', 'radis',
    'haricot', 'epinard', 'carotte', 'radis',
    'salade', 'betterave', 'poireau', 'carotte',
    'courgette', 'salade', 'haricot', 'basilic'
  ];

  const [grid, setGrid] = useState<(string | null)[]>(defaultLayout);
  const [selectedVegId, setSelectedVegId] = useState<string>('tomate');
  const [activeSquareIndex, setActiveSquareIndex] = useState<number | null>(null);

  const selectedVegetable = VEGETABLES.find(v => v.id === selectedVegId);

  const handleSquareClick = (index: number) => {
    setActiveSquareIndex(index);
    setGrid(prev => {
      const next = [...prev];
      // toggle or set
      next[index] = next[index] === selectedVegId ? null : selectedVegId;
      return next;
    });
  };

  const clearGrid = () => {
    setGrid(new Array(16).fill(null));
    setActiveSquareIndex(null);
  };

  const resetDefault = () => {
    setGrid(defaultLayout);
    setActiveSquareIndex(null);
  };

  // Calculate statistics
  const filledCount = grid.filter(Boolean).length;
  const totalPlants = grid.reduce((acc, vegId) => {
    if (!vegId) return acc;
    const v = VEGETABLES.find(item => item.id === vegId);
    return acc + (v ? v.perSquare : 0);
  }, 0);

  return (
    <div id="simulateur" className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs my-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2 border border-emerald-200/50">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'fr' ? 'Outil Interactif Permaculture' : 'Interactive Permaculture Tool'}</span>
          </div>
          <h3 className="text-2xl font-bold text-stone-900 font-serif-display">
            {language === 'fr' ? 'Simulateur de Potager Carré 4×4 (16 Cases)' : 'Interactive 4×4 Square Garden Planner'}
          </h3>
          <p className="text-sm text-stone-600 mt-1">
            {language === 'fr'
              ? 'Sélectionnez un légume ci-dessous, puis cliquez sur une case de 30×30 cm pour visualiser votre agencement et les densités de récolte.'
              : 'Select a vegetable below, then click any 30×30 cm cell to plan your square garden layout and spacing.'}
          </p>
        </div>

        {/* Action presets */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={resetDefault}
            id="planner-reset-btn"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>{language === 'fr' ? 'Plan Recommandé' : 'Recommended Plan'}</span>
          </button>
          <button
            onClick={clearGrid}
            id="planner-clear-btn"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {language === 'fr' ? 'Vider' : 'Clear'}
          </button>
        </div>
      </div>

      {/* Vegetable Selector Palette */}
      <div className="my-6">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5">
          {language === 'fr' ? '1. Choisissez un légume à planter :' : '1. Select a vegetable to plant:'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {VEGETABLES.map((veg) => {
            const isSelected = selectedVegId === veg.id;
            return (
              <button
                key={veg.id}
                id={`veg-select-${veg.id}`}
                onClick={() => setSelectedVegId(veg.id)}
                className={`p-2.5 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'border-stone-200 hover:border-stone-300 hover:bg-stone-50 bg-white'
                }`}
              >
                <span className="text-xl shrink-0">{veg.icon}</span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-stone-900 truncate">
                    {language === 'fr' ? veg.nameFr : veg.nameEn}
                  </p>
                  <span className="text-[10px] font-mono text-emerald-800 font-bold">
                    {veg.perSquare} / {language === 'fr' ? 'carré' : 'square'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage: Frame + Compass */}
      <div className="my-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2.5">
          {language === 'fr' ? '2. Cliquez sur les 16 carrés (Dimensions réelles : 120 × 120 cm) :' : '2. Click the 16 squares (Real dimensions: 120 × 120 cm):'}
        </label>

        {/* Orientation Indicators */}
        <div className="relative max-w-xl mx-auto p-4 sm:p-6 bg-stone-100 rounded-3xl border border-stone-200/80 shadow-inner">
          
          {/* North label */}
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold tracking-wider text-stone-600 mb-2">
            <Compass className="w-3.5 h-3.5 text-stone-600" />
            <span>{language === 'fr' ? 'NORD (Légumes hauts : Tomates, tuteurs)' : 'NORTH (Taller crops: Tomatoes, climbing beans)'}</span>
          </div>

          {/* Wooden Box Outer Border */}
          <div className="relative p-3 bg-amber-950/20 rounded-2xl border-4 border-amber-800 shadow-md">
            
            {/* Grid 4x4 */}
            <div className="grid grid-cols-4 gap-1.5 bg-amber-900/30 p-1.5 rounded-xl">
              {grid.map((vegId, idx) => {
                const veg = VEGETABLES.find(v => v.id === vegId);
                const isActive = activeSquareIndex === idx;

                return (
                  <button
                    key={idx}
                    id={`square-${idx}`}
                    onClick={() => handleSquareClick(idx)}
                    className={`aspect-square rounded-lg transition-all flex flex-col items-center justify-center p-1.5 relative group cursor-pointer border ${
                      veg
                        ? 'bg-emerald-50/95 border-emerald-300 hover:bg-emerald-100/90 shadow-xs'
                        : 'bg-stone-50 border-stone-300/70 hover:bg-stone-200/60'
                    } ${isActive ? 'ring-2 ring-emerald-500' : ''}`}
                    title={veg ? (language === 'fr' ? `${veg.nameFr} (${veg.perSquare} plants)` : `${veg.nameEn} (${veg.perSquare} plants)`) : 'Carré vide (30x30 cm)'}
                  >
                    {/* Index badge */}
                    <span className="absolute top-1 left-1 text-[9px] font-mono text-stone-600 group-hover:text-stone-600">
                      #{idx + 1}
                    </span>

                    {veg ? (
                      <>
                        <span className="text-xl sm:text-2xl animate-in zoom-in-50">{veg.icon}</span>
                        <span className="text-[10px] font-bold text-emerald-900 truncate max-w-full leading-tight text-center mt-0.5">
                          {language === 'fr' ? veg.nameFr.split(' ')[0] : veg.nameEn.split(' ')[0]}
                        </span>
                        <span className="text-[9px] font-mono font-extrabold text-emerald-700 bg-emerald-100/80 px-1 rounded-sm">
                          ×{veg.perSquare}
                        </span>
                      </>
                    ) : (
                      <span className="text-stone-300 text-xs font-semibold group-hover:text-stone-400">
                        +
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* South label */}
          <div className="flex items-center justify-center text-[11px] font-bold tracking-wider text-stone-600 mt-2">
            <span>{language === 'fr' ? 'SUD (Légumes bas : Radis, Carottes, Salades)' : 'SOUTH (Low crops: Radishes, Carrots, Lettuces)'}</span>
          </div>

        </div>
      </div>

      {/* Live Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-stone-50 rounded-xl border border-stone-200/80 text-center">
        <div>
          <p className="text-[11px] font-semibold text-stone-600 uppercase">
            {language === 'fr' ? 'Cases occupées' : 'Planted squares'}
          </p>
          <p className="text-xl font-bold text-stone-900 font-mono mt-0.5">
            {filledCount} / 16 <span className="text-xs text-stone-500 font-normal">({Math.round((filledCount / 16) * 100)}%)</span>
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-stone-600 uppercase">
            {language === 'fr' ? 'Total récoltes prévues' : 'Total plants growing'}
          </p>
          <p className="text-xl font-bold text-emerald-700 font-mono mt-0.5">
            ~{totalPlants} {language === 'fr' ? 'plants' : 'plants'}
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold text-stone-600 uppercase">
            {language === 'fr' ? 'Surface totale' : 'Total ground area'}
          </p>
          <p className="text-xl font-bold text-stone-900 font-mono mt-0.5">
            1,44 m² <span className="text-xs text-stone-500 font-normal">(120 × 120 cm)</span>
          </p>
        </div>
      </div>

      {/* Selected vegetable tips box */}
      {selectedVegetable && (
        <div className="mt-4 p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-3">
          <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-950 space-y-1">
            <p className="font-semibold">
              {language === 'fr' ? 'Conseil d\'expert pour ' : 'Pro tip for '}
              <span className="underline">{language === 'fr' ? selectedVegetable.nameFr : selectedVegetable.nameEn}</span> :
            </p>
            <p>{language === 'fr' ? selectedVegetable.tipsFr : selectedVegetable.tipsEn}</p>
            <p className="text-emerald-800">
              <span className="font-semibold">{language === 'fr' ? 'Bonnes associations : ' : 'Good companions: '}</span>
              {selectedVegetable.goodCompanions.join(', ')}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
