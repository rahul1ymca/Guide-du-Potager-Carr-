import React, { useState } from 'react';
import { Calculator, Shovel, Layers, Droplets, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface SoilCalculatorProps {
  language: Language;
}

export const SoilCalculator: React.FC<SoilCalculatorProps> = ({ language }) => {
  const [length, setLength] = useState<number>(120);
  const [width, setWidth] = useState<number>(120);
  const [height, setHeight] = useState<number>(25);

  const totalVolumeLitres = Math.round((length * width * height) / 1000);
  const compostLitres = Math.round(totalVolumeLitres / 3);
  const fiberLitres = Math.round(totalVolumeLitres / 3);
  const vermiculiteLitres = totalVolumeLitres - (compostLitres * 2);
  const bags50L = Math.ceil(totalVolumeLitres / 50);

  const setPreset = (l: number, w: number, h: number) => {
    setLength(l);
    setWidth(w);
    setHeight(h);
  };

  return (
    <div id="calculateur-terreau" className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 my-10 shadow-xs">
      
      {/* Title */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-stone-200">
        <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display">
            {language === 'fr' ? 'Calculateur de Terreau et Substrat Idéal' : 'Soil Volume & Substrate Calculator'}
          </h3>
          <p className="text-xs text-stone-600">
            {language === 'fr'
              ? 'Calculez le volume exact en litres et les proportions idéales selon la formule des 3 tiers.'
              : 'Calculate exact liters and recipe proportions based on the 3-thirds organic formula.'}
          </p>
        </div>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center gap-2 mt-5 mb-6">
        <span className="text-xs font-semibold text-stone-600 mr-1">
          {language === 'fr' ? 'Préréglages :' : 'Presets:'}
        </span>
        <button
          onClick={() => setPreset(120, 120, 25)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            length === 120 && width === 120 && height === 25
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
          }`}
        >
          {language === 'fr' ? 'Standard (120×120×25 cm)' : 'Standard (120×120×25 cm)'}
        </button>
        <button
          onClick={() => setPreset(120, 120, 45)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            length === 120 && width === 120 && height === 45
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
          }`}
        >
          {language === 'fr' ? 'Surélevé Confort (120×120×45 cm)' : 'Elevated Deep (120×120×45 cm)'}
        </button>
        <button
          onClick={() => setPreset(80, 80, 25)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            length === 80 && width === 80 && height === 25
              ? 'bg-emerald-700 text-white'
              : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
          }`}
        >
          {language === 'fr' ? 'Balcon / Terrasse (80×80×25 cm)' : 'Balcony / Patio (80×80×25 cm)'}
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {language === 'fr' ? 'Longueur (cm)' : 'Length (cm)'}
          </label>
          <input
            type="number"
            value={length}
            min={30}
            max={400}
            step={5}
            onChange={(e) => setLength(Math.max(10, Number(e.target.value)))}
            className="w-full px-3 py-2 rounded-xl bg-white border border-stone-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {language === 'fr' ? 'Largeur (cm)' : 'Width (cm)'}
          </label>
          <input
            type="number"
            value={width}
            min={30}
            max={400}
            step={5}
            onChange={(e) => setWidth(Math.max(10, Number(e.target.value)))}
            className="w-full px-3 py-2 rounded-xl bg-white border border-stone-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {language === 'fr' ? 'Profondeur / Hauteur (cm)' : 'Depth / Height (cm)'}
          </label>
          <input
            type="number"
            value={height}
            min={10}
            max={100}
            step={5}
            onChange={(e) => setHeight(Math.max(5, Number(e.target.value)))}
            className="w-full px-3 py-2 rounded-xl bg-white border border-stone-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Result Cards */}
      <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
              {language === 'fr' ? 'Volume total nécessaire' : 'Total volume needed'}
            </span>
            <div className="text-3xl font-extrabold text-emerald-800 font-mono mt-0.5">
              {totalVolumeLitres} <span className="text-lg font-medium text-stone-600">{language === 'fr' ? 'Litres' : 'Liters'}</span>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs font-medium text-stone-600">
              {language === 'fr' ? 'Équivalent en sacs du commerce :' : 'Commercial bags required:'}
            </span>
            <div className="text-base font-bold text-stone-900 font-mono">
              ~{bags50L} {language === 'fr' ? 'sacs de 50 Litres' : 'bags of 50 Liters'}
            </div>
          </div>
        </div>

        {/* Breakdown of 3 Thirds */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 mb-1">
              <Shovel className="w-3.5 h-3.5 text-emerald-700" />
              <span>1/3 Compost Mûr</span>
            </div>
            <p className="text-lg font-bold font-mono text-emerald-800">{compostLitres} L</p>
            <p className="text-[11px] text-emerald-950 mt-0.5">
              {language === 'fr' ? 'Fertilité biologique et micro-organismes vivants' : 'Biological nutrition and mycorrhizae'}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/60">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
              <Droplets className="w-3.5 h-3.5 text-amber-700" />
              <span>1/3 Fibre de Coco / Tourbe</span>
            </div>
            <p className="text-lg font-bold font-mono text-amber-800">{fiberLitres} L</p>
            <p className="text-[11px] text-amber-950 mt-0.5">
              {language === 'fr' ? 'Rétention d\'eau sans compaction' : 'Moisture retention without clumping'}
            </p>
          </div>

          <div className="p-3 rounded-lg bg-stone-100 border border-stone-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 mb-1">
              <Layers className="w-3.5 h-3.5 text-stone-600" />
              <span>1/3 Vermiculite / Perlite</span>
            </div>
            <p className="text-lg font-bold font-mono text-stone-800">{vermiculiteLitres} L</p>
            <p className="text-[11px] text-stone-700 mt-0.5">
              {language === 'fr' ? 'Aération permanente des racines' : 'Root aeration and drainage canals'}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
