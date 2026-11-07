/**
 * Central asset registry for ANYA BEAUTY CENTER & SPA
 * 
 * Provides verified local assets, gallery slot mapping, and visual theme cues
 * for architectural SVG fallbacks when local image files are not yet present.
 */

export interface GalleryAsset {
  id: string;
  category: 'hammam' | 'coiffure' | 'massage' | 'ambiance';
  src: string;
  vignetteType: 'hammam-arch' | 'brass-incense' | 'copper-pedicure' | 'perfume-tray' | 'balayage-waves' | 'triptych-pillars' | 'zellige-fountain' | 'tea-hospitality';
}

export const assets = {
  // Brand Logos
  logo: '/ANYA Beauty Lotus Wave Logo.png',
  logoTransparent: '/assets/anya-logo.png',
  logoLeafyGreen: '/assets/aistudio/Anya_Beauty_Spa_Logo_on_Leafy_Green_8c050edf.png',
  logoAltOriginal: '/assets/aistudio/ANYA_Beauty_Lotus_Wave_Logo_d66456ce.png',

  // Hero Video, Backdrop & Arch Visuals
  heroMedia: '/assets/hero-bg.mp4',
  heroVideo: '/assets/hero-bg.mp4',
  heroBackdrop: '/assets/hammam-marble.jpg',
  hammamArch: '/assets/hammam-marble.jpg',
  heroHammam: '/assets/aistudio/Serene_Moroccan_Hammam_Retreat_eb767cdf.png',
  triptychPillars: '/assets/aistudio/ANYA_Spa_Triptych_Branding_d6f55232.png',

  // Sanctuary Pillars & Menu Photography
  hammamMarble: '/assets/hammam-marble.jpg',
  balayageWaves: '/assets/balayage-waves.jpg',
  hairBalayage: '/assets/hair-balayage.jpg',
  perfumeTray: '/assets/perfume-tray.jpg',
  copperPedicure: '/assets/copper-pedicure.jpg',
};

export const ASSETS = {
  ...assets,
  gallery: [
    {
      id: 'gallery-hammam-retreat',
      category: 'hammam',
      src: '/assets/hammam-marble.jpg',
      vignetteType: 'hammam-arch',
    },
    {
      id: 'gallery-copper-pedicure',
      category: 'massage',
      src: '/assets/copper-pedicure.jpg',
      vignetteType: 'copper-pedicure',
    },
    {
      id: 'gallery-fragrance-tray',
      category: 'ambiance',
      src: '/assets/perfume-tray.jpg',
      vignetteType: 'perfume-tray',
    },
    {
      id: 'gallery-balayage-sunlight',
      category: 'coiffure',
      src: '/assets/balayage-waves.jpg',
      vignetteType: 'balayage-waves',
    },
    {
      id: 'gallery-brass-incense',
      category: 'ambiance',
      src: '/assets/brass-incense.jpg',
      vignetteType: 'brass-incense',
    },
    {
      id: 'gallery-tea-hospitality',
      category: 'hammam',
      src: '/assets/mint-tea.jpg',
      vignetteType: 'tea-hospitality',
    },
  ] as GalleryAsset[],
};
