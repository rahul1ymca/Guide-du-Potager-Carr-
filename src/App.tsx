import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { TableOfContents } from './components/TableOfContents';
import { TextToSpeechBar } from './components/TextToSpeechBar';
import { GardenPlanner } from './components/GardenPlanner';
import { SoilCalculator } from './components/SoilCalculator';
import { VegetableDensityTable } from './components/VegetableDensityTable';
import { SeasonalCalendar } from './components/SeasonalCalendar';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AdSlot } from './components/AdSlot';
import { ShareModal } from './components/ShareModal';
import { Language, TocItem } from './types';
import { STEP_GUIDES } from './data/content';
import {
  Sparkles,
  Calendar,
  Clock,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Droplet,
  Sun,
  Shield,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Sync document language attribute when toggled
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Track window scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setReadingProgress(0);
        return;
      }
      const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Table of Contents dynamic item list
  const tocItems: TocItem[] = useMemo(() => {
    if (language === 'fr') {
      return [
        { id: 'introduction', title: 'Qu\'est-ce qu\'un potager carré ?', level: 1 },
        { id: 'avantages', title: 'Les 5 grands avantages', level: 1 },
        { id: 'etape-1', title: 'Étape 1 : Emplacement & soleil', level: 2 },
        { id: 'etape-2', title: 'Étape 2 : Dimensions & bois', level: 2 },
        { id: 'etape-3', title: 'Étape 3 : Fond & anti-nuisibles', level: 2 },
        { id: 'etape-4', title: 'Étape 4 : Terreau & Mélange d\'or', level: 2 },
        { id: 'etape-5', title: 'Étape 5 : Quadrillage 16 cases', level: 2 },
        { id: 'etape-6', title: 'Étape 6 : Règle des 1, 4, 9, 16', level: 2 },
        { id: 'etape-7', title: 'Étape 7 : Arrosage & rotation', level: 2 },
        { id: 'simulateur', title: 'Simulateur 4×4 interactif', level: 1 },
        { id: 'calculateur-terreau', title: 'Calculateur de terreau', level: 1 },
        { id: 'densite-legumes', title: 'Tableau des légumes par case', level: 1 },
        { id: 'calendrier', title: 'Calendrier des 4 saisons', level: 1 },
        { id: 'faq', title: 'Questions fréquentes (FAQ)', level: 1 },
      ];
    } else {
      return [
        { id: 'introduction', title: 'What is Square Foot Gardening?', level: 1 },
        { id: 'avantages', title: 'The 5 Major Advantages', level: 1 },
        { id: 'etape-1', title: 'Step 1: Sun & Location', level: 2 },
        { id: 'etape-2', title: 'Step 2: Sizes & Wood', level: 2 },
        { id: 'etape-3', title: 'Step 3: Base & Pest Barrier', level: 2 },
        { id: 'etape-4', title: 'Step 4: Golden Soil Formula', level: 2 },
        { id: 'etape-5', title: 'Step 5: The 16-Square Grid', level: 2 },
        { id: 'etape-6', title: 'Step 6: Density Rule (1, 4, 9, 16)', level: 2 },
        { id: 'etape-7', title: 'Step 7: Water & Rotation', level: 2 },
        { id: 'simulateur', title: 'Interactive 4×4 Simulator', level: 1 },
        { id: 'calculateur-terreau', title: 'Soil Mix Calculator', level: 1 },
        { id: 'densite-legumes', title: 'Plant Density Matrix', level: 1 },
        { id: 'calendrier', title: 'Four-Season Calendar', level: 1 },
        { id: 'faq', title: 'Frequently Asked Questions', level: 1 },
      ];
    }
  }, [language]);

  // Extract clean text for Text-to-Speech audio reader
  const getFullArticleText = useCallback(() => {
    if (language === 'fr') {
      return `Potager Carré : Le Guide Complet Étape par Étape pour Débuter et Réussir.
        Le potager en carré est une méthode révolutionnaire de jardinage biologique et ergonomique qui permet de cultiver jusqu'à cinq fois plus de légumes au mètre carré, avec 70% d'eau en moins et sans aucun désherbage fastidieux.
        Étape 1 : Choisir un emplacement très ensoleillé recevant au moins 6 à 8 heures d'ensoleillement par jour.
        Étape 2 : Construire un cadre standard de 120 centimètres sur 120 centimètres en bois naturel non traité comme le mélèze ou le douglas.
        Étape 3 : Tapisser le fond avec un carton brun neutre et un grillage anti-rongeurs pour étouffer les herbes vivaces et bloquer les campagnols.
        Étape 4 : Remplir le carré avec le mélange d'or : un tiers de compost mûr, un tiers de fibre de coco ou de tourbe blonde, et un tiers de vermiculite ou perlite drainante.
        Étape 5 : Installer le quadrillage physique de 16 cases de 30 centimètres par 30 centimètres.
        Étape 6 : Respecter la règle des densités : 1 grand plant, 4 plants moyens comme la salade, 9 plants comme l'épinard, ou 16 petits légumes comme les radis et les carottes.
        Étape 7 : Pailler abondamment pour conserver l'humidité et pratiquer la rotation des cultures entre légumes fruits, légumes racines, légumes feuilles et légumineuses.`;
    } else {
      return `Square Foot Gardening: The Complete Step-by-Step Guide for Beginners and Success.
        Square foot gardening is an intensive, ergonomic gardening technique that yields up to five times more vegetables per square meter while consuming 70% less water with practically zero weeding.
        Step 1: Select a sunny location with 6 to 8 hours of daily direct sunlight.
        Step 2: Build a standard 120 by 120 centimeter wooden frame using untreated durable wood like Larch or Douglas fir.
        Step 3: Line the base with thick brown cardboard and wire mesh to block invasive weeds and burrowing rodents.
        Step 4: Fill with the golden tri-mix soil: one third rich compost, one third coconut coir, and one third horticultural vermiculite.
        Step 5: Fasten the physical 16-cell grid of 30 by 30 centimeter squares.
        Step 6: Apply the 1, 4, 9, 16 plant spacing rule.
        Step 7: Mulch heavily and rotate crop families season after season.`;
    }
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Top Header with Language Switch, Share, and Reading Progress */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenShare={() => setIsShareOpen(true)}
        readingProgress={readingProgress}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        
        {/* ========================================================================= */}
        {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 1: TOP HEADER LEADERBOARD --> */}
        {/* ========================================================================= */}
        <AdSlot
          id="ad-slot-leaderboard-top"
          slotType="leaderboard"
          label={language === 'fr' ? 'Bannière Haute / Leaderboard' : 'Top Leaderboard Banner'}
        />

        {/* Article Hero Banner */}
        <header className="mb-10 max-w-4xl">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-900 text-xs font-semibold mb-4 border border-emerald-300/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              {language === 'fr'
                ? 'Dossier Spécial Jardinage & Permaculture'
                : 'Special Feature: Organic Permaculture'}
            </span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 font-serif-display tracking-tight leading-tight">
            {language === 'fr'
              ? 'Potager Carré : Le Guide Complet Étape par Étape pour Débuter et Réussir'
              : 'Square Foot Gardening: The Complete Step-by-Step Guide for Beginners'}
          </h1>

          {/* Subtitle with core keywords */}
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {language === 'fr'
              ? 'Comment concevoir, fabriquer et cultiver un potager carré de 16 cases ultra-productif (120×120 cm). Découvrez les dimensions exactes, le terreau fertile, les meilleures associations de légumes et le calendrier saisonnier pour récolter bio toute l\'année.'
              : 'How to build, plant, and cultivate an ultra-productive 16-square foot garden (120×120 cm). Master the exact dimensions, golden soil mixture, vegetable density rules, and rotation schedules.'}
          </p>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-stone-200 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-700" />
              <span className="font-medium text-stone-800">Jean-Marc Lemoine</span>
              <span className="text-stone-500">({language === 'fr' ? 'Agronome & Permaculteur' : 'Permaculturist & Agronomist'})</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-stone-500" />
              <span>{language === 'fr' ? 'Mis à jour en Septembre 2026' : 'Updated September 2026'}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-stone-500" />
              <span>{language === 'fr' ? '8 min de lecture' : '8 min read'}</span>
            </div>
          </div>

          {/* Text to Speech Audio Bar Widget */}
          <TextToSpeechBar
            language={language}
            getArticleText={getFullArticleText}
          />
        </header>

        {/* 2-Column Grid: Content (Left) + Sticky Sidebar TOC (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Content Body */}
          <article className="lg:col-span-8 space-y-12">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-display">
                {language === 'fr'
                  ? 'Qu\'est-ce qu\'un potager carré et pourquoi révolutionne-t-il le jardinage ?'
                  : 'What is Square Foot Gardening and Why is it Revolutionary?'}
              </h2>

              <p className="text-stone-700 leading-relaxed">
                {language === 'fr'
                  ? 'Né à la fin des années 1970 sous la plume de l\'ingénieur américain Mel Bartholomew (« Square Foot Gardening »), le potager en carré s\'est imposé comme la méthode la plus intelligente, écologique et productive pour cultiver ses propres légumes, même avec un espace réduit. Plutôt que de s\'épuiser à tracer de longs sillons espacés d\'allées boueuses dans un grand potager traditionnel, le potager carré concentre la culture dans un cadre surélevé de 120 cm sur 120 cm, compartimenté en 16 cases autonomes de 30 cm par 30 cm.'
                  : 'Created in the late 1970s by American civil engineer Mel Bartholomew ("Square Foot Gardening"), square foot gardening has established itself as the smartest, most eco-friendly, and intensive method to grow organic vegetables in limited spaces. Instead of wasting effort digging traditional rows separated by weed-filled walkways, square foot gardening concentrates plant vitality within a compact 120 × 120 cm raised bed divided into 16 distinct 30 × 30 cm cells.'}
              </p>

              <p className="text-stone-700 leading-relaxed">
                {language === 'fr'
                  ? 'Chaque centimètre carré est valorisé. Le sol n\'est jamais foulé par les pieds, restant perpétuellement aéré, souple et foisonnant de micro-organismes. En combinant la rotation des cultures et les symbioses végétales, un seul carré potager de 1,44 m² peut approvisionner une petite famille en salades croquantes, tomates cerises juteuses, carottes parfumées et herbes aromatiques fraîches tout au long de la saison.'
                  : 'Every single square centimeter is utilized. The soil is never stepped on, remaining permanently light, crumbly, and brimming with active mycorrhizae. By uniting companion planting with tight succession rotation, one 1.44 m² raised bed reliably feeds a household with crisp salads, sweet tomatoes, crunchy carrots, and aromatic herbs all season.'}
              </p>
            </section>

            {/* Section 2: Avantages clés */}
            <section id="avantages" className="bg-emerald-950 text-emerald-50 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>{language === 'fr' ? 'Bénéfices Agronomiques' : 'Agronomic Benefits'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-white">
                {language === 'fr'
                  ? 'Les 5 Atouts Majeurs du Potager en Carré'
                  : 'The 5 Major Strengths of Square Foot Gardening'}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'fr' ? '1. Économie d\'eau jusqu\'à 70%' : '1. Up to 70% Water Savings'}</span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {language === 'fr'
                      ? 'Grâce à un substrat riche en fibre de coco et un paillage serré, l\'humidité reste bloquée dans le carré.'
                      : 'Thanks to coconut coir water retention and dense organic mulch, evaporation is reduced to a minimum.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'fr' ? '2. Zéro désherbage épuisant' : '2. Virtually Zero Weeding'}</span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {language === 'fr'
                      ? 'La densité optimale du feuillage et le terreau neuf sans graines sauvages suppriment 95% des mauvaises herbes.'
                      : 'High vegetable leaf canopy coverage and weed-free potting mix eliminate 95% of pesky weed sprouts.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'fr' ? '3. Sol perpétuellement meuble' : '3. Never Compacted Soil'}</span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {language === 'fr'
                      ? 'Avec 120 cm de côté, vous atteignez le centre depuis les allées sans jamais marcher sur la terre cultivée.'
                      : 'With 120 cm outer width, reaching the center from exterior walkways means never compacting the soil.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-800">
                  <div className="flex items-center gap-2 font-bold text-white text-sm mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{language === 'fr' ? '4. Rendement 5× supérieur au m²' : '4. 5× Yield per Square Meter'}</span>
                  </div>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {language === 'fr'
                      ? 'Les racines plongent en profondeur dans une terre fertile, permettant de rapprocher les plants sans concurrence néfaste.'
                      : 'Fluffy loose soil lets roots dive straight down, allowing tight plant density without root strangulation.'}
                  </p>
                </div>

              </div>
            </section>

            {/* ========================================================================= */}
            {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 2: IN-ARTICLE MID CONTENT BANNER --> */}
            {/* ========================================================================= */}
            <AdSlot
              id="ad-slot-in-article-1"
              slotType="in-article"
              label={language === 'fr' ? 'Bannière Contenu / In-Article Ad' : 'In-Article Ad Banner'}
            />

            {/* Steps 1 to 7: Step-by-Step Complete Guide */}
            <div className="space-y-10">
              {STEP_GUIDES.map((step) => (
                <section
                  key={step.number}
                  id={`etape-${step.number}`}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-5 transition-all"
                >
                  
                  {/* Step Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-700 text-white font-bold font-mono text-lg flex items-center justify-center shrink-0 shadow-xs">
                      #{step.number}
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-emerald-800">
                        {language === 'fr' ? `Étape ${step.number} sur 7` : `Step ${step.number} of 7`}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif-display mt-0.5">
                        {language === 'fr' ? step.titleFr : step.titleEn}
                      </h2>
                      <p className="text-xs text-stone-500 mt-1 font-medium">
                        {language === 'fr' ? step.shortDescFr : step.shortDescEn}
                      </p>
                    </div>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-3 text-sm text-stone-700 leading-relaxed pt-2">
                    {(language === 'fr' ? step.contentFr : step.contentEn).map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Key Specifications Grid if available */}
                  {step.keySpecs && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 bg-stone-50 rounded-xl border border-stone-200/80">
                      {step.keySpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="text-center sm:text-left">
                          <span className="text-[10px] uppercase font-bold text-stone-600 tracking-wider block">
                            {language === 'fr' ? spec.labelFr : spec.labelEn}
                          </span>
                          <span className="text-xs font-semibold text-emerald-900 font-mono">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pro Tip & Mistake Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    
                    {/* Pro Tip */}
                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <div className="text-xs text-emerald-950">
                        <span className="font-bold block mb-0.5">
                          {language === 'fr' ? 'Astuce de Jardinier Pro :' : 'Gardener Pro Tip:'}
                        </span>
                        <p>{language === 'fr' ? step.proTipFr : step.proTipEn}</p>
                      </div>
                    </div>

                    {/* Mistake to avoid */}
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/70 flex items-start gap-2.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="text-xs text-rose-950">
                        <span className="font-bold block mb-0.5">
                          {language === 'fr' ? 'Erreur Fréquente à Éviter :' : 'Common Mistake to Avoid:'}
                        </span>
                        <p>{language === 'fr' ? step.mistakeToAvoidFr : step.mistakeToAvoidEn}</p>
                      </div>
                    </div>

                  </div>

                </section>
              ))}
            </div>

            {/* Interactive 4x4 Garden Planner Companion Tool */}
            <GardenPlanner language={language} />

            {/* ========================================================================= */}
            {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 3: MID ARTICLE BANNER 2 --> */}
            {/* ========================================================================= */}
            <AdSlot
              id="ad-slot-in-article-2"
              slotType="in-article"
              label={language === 'fr' ? 'Bannière Milieu d\'Article / Mid Content' : 'Mid Article Banner'}
            />

            {/* Interactive Soil Calculator Companion Tool */}
            <SoilCalculator language={language} />

            {/* Vegetable Density Reference Table */}
            <VegetableDensityTable language={language} />

            {/* Seasonal 4-Season Planting Calendar */}
            <SeasonalCalendar language={language} />

            {/* ========================================================================= */}
            {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 4: BEFORE FAQ --> */}
            {/* ========================================================================= */}
            <AdSlot
              id="ad-slot-before-faq"
              slotType="in-article"
              label={language === 'fr' ? 'Bannière Pré-FAQ / Pre-FAQ Banner' : 'Pre-FAQ Ad Banner'}
            />

            {/* Frequently Asked Questions Accordion */}
            <FaqSection language={language} />

            {/* Conclusion & Key Takeaway */}
            <section className="p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 text-white space-y-4 shadow-md">
              <h2 className="text-2xl font-bold font-serif-display text-emerald-400">
                {language === 'fr'
                  ? 'En Résumé : Lancez Votre Potager Carré Dès Ce Week-End !'
                  : 'Final Word: Launch Your Square Foot Garden This Weekend!'}
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                {language === 'fr'
                  ? 'Le potager carré réconcilie le plaisir de récolter des légumes ultra-frais avec les contraintes du quotidien moderne. En respectant le format standard de 120×120 cm, la recette des 3 tiers pour le substrat, et le quadrillage physique en 16 cases, vous éliminez 90% des corvées du potager à l\'ancienne.'
                  : 'Square foot gardening harmonizes the joy of harvesting crisp, organic vegetables with modern lifestyle constraints. By honoring the 120×120 cm layout, the 3-thirds potting mix formula, and the rigid 16-cell grid, you eliminate 90% of old-school garden chores.'}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  {language === 'fr' ? 'Partager ce guide à un proche' : 'Share this guide with a friend'}
                </button>
                <a
                  href="#simulateur"
                  className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-xs transition-colors"
                >
                  {language === 'fr' ? 'Revenir au simulateur 4×4' : 'Back to 4×4 simulator'}
                </a>
              </div>
            </section>

          </article>

          {/* Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Table of Contents with Reading Progress Bar & Jump links */}
            <TableOfContents
              language={language}
              items={tocItems}
              readingProgress={readingProgress}
            />

            {/* Quick Gardener's Checklist Card */}
            <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-xs space-y-3">
              <h3 className="font-bold text-stone-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-700" />
                <span>{language === 'fr' ? 'Aide-Mémoire Express' : 'Quick Cheat Sheet'}</span>
              </h3>
              <ul className="space-y-2 text-stone-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>120 × 120 cm</strong> : dimension ergonomique d\'or.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>16 carrés</strong> de 30 × 30 cm chacun.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Substrat</strong> : 1/3 compost + 1/3 coco + 1/3 vermiculite.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Règle 1, 4, 9, 16</strong> plants selon l\'espèce.</span>
                </li>
              </ul>
            </div>

            {/* ========================================================================= */}
            {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 5: SIDEBAR RECTANGLE AD (300x250) --> */}
            {/* ========================================================================= */}
            <AdSlot
              id="ad-slot-sidebar-sticky"
              slotType="sidebar"
              label={language === 'fr' ? 'Publicité Latérale / Sticky Sidebar Ad' : 'Sidebar 300x250 Ad'}
            />

          </aside>

        </div>

        {/* ========================================================================= */}
        {/* <!-- ESPACE PUBLICITAIRE / AD SLOT 6: FOOTER BANNER --> */}
        {/* ========================================================================= */}
        <AdSlot
          id="ad-slot-footer-leaderboard"
          slotType="footer"
          label={language === 'fr' ? 'Bannière Bas de Page / Footer Banner' : 'Footer Leaderboard Banner'}
        />

      </main>

      {/* Global Share Modal */}
      <ShareModal
        language={language}
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
      />

      {/* Semantic Accessible Footer */}
      <Footer language={language} />

    </div>
  );
}
