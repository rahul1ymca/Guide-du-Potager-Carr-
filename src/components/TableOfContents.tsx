import React, { useEffect, useState } from 'react';
import { ListOrdered, ChevronRight, Bookmark } from 'lucide-react';
import { Language, TocItem } from '../types';

interface TableOfContentsProps {
  language: Language;
  items: TocItem[];
  readingProgress: number; // 0 to 100
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ language, items, readingProgress }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -65% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) {
      const yOffset = -85;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="table-of-contents"
      aria-label={language === 'fr' ? 'Sommaire de l\'article' : 'Table of contents'}
      className="bg-white/90 backdrop-blur-md rounded-2xl border border-stone-200/80 p-5 shadow-xs sticky top-24 transition-all"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-100">
        <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
          <ListOrdered className="w-4 h-4 text-emerald-700" />
          <span>{language === 'fr' ? 'Sommaire du Guide' : 'Table of Contents'}</span>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-mono">
          {Math.round(readingProgress)}%
        </span>
      </div>

      {/* Reading Progress Bar Inside Table of Contents */}
      <div className="mt-3 mb-4">
        <div className="flex justify-between items-center text-[11px] font-medium text-stone-600 mb-1.5">
          <span className="flex items-center gap-1">
            <Bookmark className="w-3 h-3 text-emerald-700" />
            {language === 'fr' ? 'Progression de lecture' : 'Reading progress'}
          </span>
          <span className="font-mono text-stone-700 font-semibold">{Math.round(readingProgress)}%</span>
        </div>
        <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-600 transition-all duration-150 rounded-full"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      {/* Jump Links List */}
      <ul className="space-y-1 text-xs max-h-[60vh] overflow-y-auto pr-1">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} style={{ paddingLeft: item.level > 1 ? `${(item.level - 1) * 12}px` : '0px' }}>
              <a
                href={`#${item.id}`}
                id={`toc-link-${item.id}`}
                onClick={(e) => handleJump(e, item.id)}
                className={`group flex items-center justify-between py-1.5 px-2.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 font-semibold border-l-2 border-emerald-600'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                }`}
              >
                <span className="line-clamp-1 group-hover:translate-x-0.5 transition-transform">{item.title}</span>
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                    isActive ? 'opacity-100 text-emerald-600' : 'opacity-0 group-hover:opacity-60'
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
