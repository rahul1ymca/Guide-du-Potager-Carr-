import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, VolumeX, Gauge, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface TextToSpeechBarProps {
  language: Language;
  getArticleText: () => string;
}

export const TextToSpeechBar: React.FC<TextToSpeechBarProps> = ({ language, getArticleText }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const [isSupported, setIsSupported] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const langCode = language === 'fr' ? 'fr' : 'en';
      const matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith(langCode)) || voices[0] || null;
      setSelectedVoice(matchingVoice);
    };

    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  const handlePlay = () => {
    if (!isSupported) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = getArticleText();
    if (!textToRead) return;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = rate;
    utterance.lang = language === 'fr' ? 'fr-FR' : 'en-US';
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('Speech synthesis notice:', e.error);
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!isSupported || !isPlaying) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleRateChange = (newRate: number) => {
    setRate(newRate);
    if (isPlaying && utteranceRef.current) {
      handleStop();
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div id="tts-audio-player" className="w-full bg-emerald-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-emerald-800 my-6 transition-all">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Info */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="w-10 h-10 rounded-xl bg-emerald-800/80 flex items-center justify-center text-emerald-300 shrink-0 border border-emerald-700/50">
            {isPlaying ? (
              <Volume2 className="w-5 h-5 animate-pulse text-emerald-200" />
            ) : isPaused ? (
              <VolumeX className="w-5 h-5 text-emerald-400" />
            ) : (
              <Sparkles className="w-5 h-5 text-emerald-300" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {language === 'fr' ? 'Écoute Audio • Web Speech API' : 'Audio Player • Web Speech API'}
              </span>
              {isPlaying && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500 text-stone-900 animate-pulse">
                  {language === 'fr' ? 'Lecture active' : 'Playing'}
                </span>
              )}
              {isPaused && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-400 text-stone-900">
                  {language === 'fr' ? 'En pause' : 'Paused'}
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-emerald-100 line-clamp-1">
              {isPlaying
                ? (language === 'fr' ? 'Lecture du guide complet en cours...' : 'Reading the full guide aloud...')
                : isPaused
                ? (language === 'fr' ? 'Lecture mise en pause. Cliquez pour reprendre.' : 'Paused. Click play to resume.')
                : (language === 'fr' ? 'Écoutez l\'intégralité de cet article avec la synthèse vocale' : 'Listen to this comprehensive guide via browser speech synthesis')}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full md:w-auto justify-end">
          
          {/* Speed control */}
          <div className="flex items-center bg-emerald-950/60 rounded-xl p-1 border border-emerald-800/60 text-xs">
            <Gauge className="w-3.5 h-3.5 ml-2 mr-1 text-emerald-400" />
            {[0.8, 1, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                id={`tts-speed-${speed}`}
                onClick={() => handleRateChange(speed)}
                className={`px-2 py-1 rounded-lg font-medium transition-all ${
                  rate === speed
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-emerald-300 hover:text-white hover:bg-emerald-800/50'
                }`}
                title={`${speed}x speed`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          {!isPlaying && !isPaused ? (
            <button
              id="tts-play-btn"
              onClick={handlePlay}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              <span>{language === 'fr' ? 'Écouter l\'article' : 'Listen Now'}</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {isPlaying ? (
                <button
                  id="tts-pause-btn"
                  onClick={handlePause}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-sm transition-colors cursor-pointer"
                >
                  <Pause className="w-4 h-4" />
                  <span className="hidden sm:inline">{language === 'fr' ? 'Pause' : 'Pause'}</span>
                </button>
              ) : (
                <button
                  id="tts-resume-btn"
                  onClick={handlePlay}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-semibold text-sm transition-colors cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-stone-950" />
                  <span className="hidden sm:inline">{language === 'fr' ? 'Reprendre' : 'Resume'}</span>
                </button>
              )}

              <button
                id="tts-stop-btn"
                onClick={handleStop}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-emerald-200 text-sm font-medium transition-colors cursor-pointer"
                title={language === 'fr' ? 'Arrêter la lecture' : 'Stop'}
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">{language === 'fr' ? 'Arrêter' : 'Stop'}</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
