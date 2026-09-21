import React, { useState } from 'react';
import { Share2, Check, Copy, X, MessageSquare, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ language, isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://lepotagercarre.fr';
  const shareTitle = language === 'fr'
    ? 'Potager Carré : Le Guide Complet Étape par Étape pour Débuter et Réussir'
    : 'Square Foot Gardening: Step-by-Step Complete Guide';
  const shareSummary = language === 'fr'
    ? 'Tout savoir pour réussir son potager carré : dimensions, terreau fertile, 16 carrés et rotation !'
    : 'Everything you need to succeed with square foot gardening: dimensions, soil mix, and crop planning!';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${currentUrl}`)}`
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      color: 'bg-stone-900 hover:bg-stone-800 text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-sky-700 hover:bg-sky-800 text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-stone-700 hover:bg-stone-600 text-white',
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareSummary}\n\n${currentUrl}`)}`
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-md w-full p-6 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
            <Share2 className="w-4 h-4" />
          </div>
          <h3 className="text-lg font-bold text-stone-900">
            {language === 'fr' ? 'Partager ce guide' : 'Share this guide'}
          </h3>
        </div>

        <p className="text-xs text-stone-600 mb-5">
          {language === 'fr'
            ? 'Transmettez ce guide complet du potager carré à vos amis jardiniers ou sur vos réseaux sociaux.'
            : 'Pass this square foot gardening guide along to fellow gardeners or share on your social channels.'}
        </p>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-1.5 rounded-xl border border-stone-200 bg-stone-50 mb-5">
          <input
            type="text"
            readOnly
            value={currentUrl}
            className="flex-1 bg-transparent px-2 text-xs font-mono text-stone-700 truncate outline-hidden"
          />
          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-emerald-800 text-white hover:bg-emerald-900'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Copié !' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Copier' : 'Copy'}</span>
              </>
            )}
          </button>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {shareLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl text-xs font-semibold transition-transform active:scale-95 ${link.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};
