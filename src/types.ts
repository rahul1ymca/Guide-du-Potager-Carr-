export type Language = 'fr' | 'en';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export interface VegetableInfo {
  id: string;
  nameFr: string;
  nameEn: string;
  perSquare: 1 | 4 | 9 | 16;
  family: 'Solanacées' | 'Brassicacées' | 'Fabacées' | 'Apiacées' | 'Astéracées' | 'Cucurbitacées' | 'Aromatiques' | 'Alliacées';
  sunRequirement: 'Plein soleil' | 'Mi-ombre';
  waterNeed: 'Faible' | 'Modéré' | 'Élevé';
  growthDays: number;
  goodCompanions: string[];
  badCompanions: string[];
  tipsFr: string;
  tipsEn: string;
  icon: string;
  badgeColor: string;
}

export interface StepGuide {
  number: number;
  titleFr: string;
  titleEn: string;
  shortDescFr: string;
  shortDescEn: string;
  contentFr: string[];
  contentEn: string[];
  proTipFr: string;
  proTipEn: string;
  mistakeToAvoidFr: string;
  mistakeToAvoidEn: string;
  keySpecs?: { labelFr: string; labelEn: string; val: string }[];
}

export interface FaqItem {
  questionFr: string;
  questionEn: string;
  answerFr: string;
  answerEn: string;
}
