import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Flower2, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { ASSETS, GalleryAsset } from '../data/assets.ts';

const filters = [
  { id: 'all', label: CONTENT.galleryPage.filterAll },
  { id: 'hammam', label: CONTENT.galleryPage.filterHammam },
  { id: 'coiffure', label: CONTENT.galleryPage.filterCoiffure },
  { id: 'massage', label: CONTENT.galleryPage.filterMassage },
  { id: 'ambiance', label: CONTENT.galleryPage.filterAmbiance },
];

export const Gallery: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());

  const visibleAssets = ASSETS.gallery.filter(
    (asset) => activeCategory === 'all' || asset.category === activeCategory
  );
  const selectedIndex = visibleAssets.findIndex((asset) => asset.id === selectedId);
  const selectedAsset = selectedIndex >= 0 ? visibleAssets[selectedIndex] : null;

  const moveSelection = (direction: number) => {
    if (selectedIndex < 0 || visibleAssets.length === 0) return;
    const nextIndex = (selectedIndex + direction + visibleAssets.length) % visibleAssets.length;
    setSelectedId(visibleAssets[nextIndex].id);
  };

  useEffect(() => {
    if (!selectedAsset) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedId(null);
      if (event.key === 'ArrowLeft') moveSelection(isRTL ? 1 : -1);
      if (event.key === 'ArrowRight') moveSelection(isRTL ? -1 : 1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedAsset, selectedIndex, visibleAssets, isRTL]);

  const getCopy = (asset: GalleryAsset) =>
    CONTENT.galleryPage.galleryItems[
      asset.id as keyof typeof CONTENT.galleryPage.galleryItems
    ];

  const renderImage = (asset: GalleryAsset, title: string) => {
    if (failedImages.has(asset.id)) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1F3A2E] text-[#C59B5F]">
          <Flower2 aria-hidden="true" className="h-16 w-16 opacity-60" strokeWidth={1} />
          <span className="sr-only">{title}</span>
        </div>
      );
    }

    return (
      <img
        src={asset.src}
        alt={title}
        width={600}
        height={450}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
        loading={asset.id === 'gallery-hammam-retreat' ? 'eager' : 'lazy'}
        onError={() => setFailedImages((current) => new Set(current).add(asset.id))}
      />
    );
  };

  return (
    <section
      dir={isRTL ? 'rtl' : 'ltr'}
      className="w-full overflow-x-clip bg-[#F6F1E7] py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#A77C3D]">
            {t(CONTENT.galleryPage.eyebrow)}
          </span>
          <h1 className="mt-2 mb-3 font-heading text-3xl sm:text-5xl font-normal text-[#1C1917] leading-tight">
            {t(CONTENT.galleryPage.title)}
          </h1>
          <p className="mx-auto max-w-xl font-body text-xs sm:text-sm leading-relaxed text-[#57534E]">
            {t(CONTENT.galleryPage.subtitle)}
          </p>
        </header>

        {/* Filter Pills (Horizontal scroll on phone) */}
        <div
          className="mx-auto mb-8 sm:mb-12 flex max-w-full items-center overflow-x-auto scrollbar-none snap-x gap-1.5 rounded-full border border-white/80 bg-white/70 p-1.5 shadow-sm -mx-2 px-2 sm:mx-auto sm:w-fit"
          role="group"
          aria-label={t(CONTENT.galleryPage.title)}
        >
          {filters.map((filter) => {
            const active = activeCategory === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => {
                  setActiveCategory(filter.id);
                  setSelectedId(null);
                }}
                className={`snap-center shrink-0 min-h-[44px] rounded-full px-4 sm:px-5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F] whitespace-nowrap ${
                  active ? 'bg-[#162B22] text-[#F7F3EB] font-semibold shadow-xs' : 'text-[#57534E] hover:text-[#162B22]'
                }`}
                aria-pressed={active}
              >
                {t(filter.label)}
              </button>
            );
          })}
        </div>

        {/* Gallery Cards Grid (Phone-first single-column with large imagery) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleAssets.map((asset) => {
              const copy = getCopy(asset);
              return (
                <motion.button
                  key={asset.id}
                  layout
                  type="button"
                  onClick={() => setSelectedId(asset.id)}
                  aria-label={`${t(copy.title)}. ${t(CONTENT.galleryPage.openImage)}`}
                  className="group relative isolate aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#C59B5F]/20 text-start shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B5F] active:scale-99 transition-transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {renderImage(asset, t(copy.title))}
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0E1E17]/90 via-[#0E1E17]/20 to-transparent" />
                  
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5 text-white">
                    <span className="min-w-0">
                      <span className="block font-heading text-xl sm:text-2xl leading-tight">
                        {t(copy.title)}
                      </span>
                      <span className="mt-1 block max-w-xs font-body text-[11px] sm:text-xs leading-relaxed text-white/80 line-clamp-2">
                        {t(copy.description)}
                      </span>
                    </span>
                    <span className="mb-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D2AD72]/60 bg-[#C59B5F]/20 text-[#F3D69E] shadow-sm">
                      <ZoomIn aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal (Tactile tap targets >= 44px) */}
      <AnimatePresence>
        {selectedAsset && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#070E0B]/95 p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-lightbox-title"
            aria-describedby="gallery-lightbox-description"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label={t(CONTENT.galleryPage.closeLightbox)}
              className="absolute end-3 top-3 z-20 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveSelection(-1);
              }}
              aria-label={t(CONTENT.galleryPage.previousImage)}
              className="absolute start-2 top-1/2 z-20 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F]"
            >
              <ChevronLeft aria-hidden="true" className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                moveSelection(1);
              }}
              aria-label={t(CONTENT.galleryPage.nextImage)}
              className="absolute end-2 top-1/2 z-20 -translate-y-1/2 min-h-[44px] min-w-[44px] rounded-full border border-white/20 bg-black/60 p-2.5 text-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F]"
            >
              <ChevronRight aria-hidden="true" className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {/* Modal Content */}
            <motion.div
              key={selectedAsset.id}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#C59B5F]/30 bg-[#0E1E17] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#0E1E17]">
                {renderImage(selectedAsset, t(getCopy(selectedAsset).title))}
              </div>
              <div className="border-t border-[#C59B5F]/20 p-4 sm:p-5 text-white">
                <h2 id="gallery-lightbox-title" className="font-heading text-xl sm:text-2xl">
                  {t(getCopy(selectedAsset).title)}
                </h2>
                <p id="gallery-lightbox-description" className="mt-1 font-body text-xs sm:text-sm leading-relaxed text-white/70">
                  {t(getCopy(selectedAsset).description)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};