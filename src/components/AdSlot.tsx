import React from 'react';

interface AdSlotProps {
  id: string;
  slotType: 'leaderboard' | 'in-article' | 'sidebar' | 'footer';
  label?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ id, slotType, label }) => {
  // =========================================================================
  // <!-- ESPACE PUBLICITAIRE / AD SLOT -->
  // Emplacement réservé pour l'intégration de vos publicités (ex: Google AdSense, Ezoic, etc.).
  // Pour activer de vraies annonces :
  // 1. Remplacez le bloc visuel ci-dessous par votre balise publicitaire fournie par votre régie :
  //    Exemple Google AdSense :
  //    <ins className="adsbygoogle"
  //         style={{ display: 'block' }}
  //         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //         data-ad-slot="XXXXXXXXXX"
  //         data-ad-format="auto"
  //         data-full-width-responsive="true"></ins>
  // 2. Ajoutez le script de votre régie dans index.html ou via useEffect.
  // =========================================================================

  const getSlotStyles = () => {
    switch (slotType) {
      case 'leaderboard':
        return 'w-full min-h-[90px] max-w-4xl my-6';
      case 'in-article':
        return 'w-full min-h-[120px] max-w-2xl mx-auto my-8';
      case 'sidebar':
        return 'w-full min-h-[250px] max-w-[320px] my-6';
      case 'footer':
        return 'w-full min-h-[90px] max-w-4xl my-8';
      default:
        return 'w-full min-h-[100px] my-4';
    }
  };

  return (
    <div id={id} className={`flex flex-col items-center justify-center ${getSlotStyles()} print:hidden`}>
      {/* <!-- DÉBUT DU BLOC PUBLICITAIRE (ID: {id}) --> */}
      <div className="w-full h-full p-4 border border-dashed border-stone-300 rounded-xl bg-stone-100/70 hover:bg-stone-100 transition-colors flex flex-col items-center justify-center text-center group">
        <span className="text-[10px] tracking-widest uppercase font-semibold text-stone-600 mb-1">
          {label || 'Espace Publicitaire / Advertisement'}
        </span>
        <p className="text-xs text-stone-600 max-w-sm">
          Emplacement prêt pour bannière {slotType}. Insérez votre tag AdSense ou affiliation ici.
        </p>
      </div>
      {/* <!-- FIN DU BLOC PUBLICITAIRE (ID: {id}) --> */}
    </div>
  );
};
