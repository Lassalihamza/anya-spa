export type Language = 'fr' | 'ar';

export interface LocalizedString {
  fr: string;
  ar: string;
}

export interface ServiceItem {
  id: string;
  categoryId: 'hammam' | 'massage' | 'coiffure' | 'esthetique' | 'mariee';
  name: LocalizedString;
  shortDesc: LocalizedString;
  fullDesc: LocalizedString;
  priceDisplay: LocalizedString;
  isPriceMissing: boolean;
  isPromo?: boolean;
  promoBadge?: LocalizedString;
  highlights?: LocalizedString[];
  sensoryNotes?: LocalizedString[];
}

export interface ServiceCategory {
  id: 'hammam' | 'massage' | 'coiffure' | 'esthetique' | 'mariee';
  name: LocalizedString;
  badge: LocalizedString;
  themeColor: string;
}

export const CONTENT = {
  brand: {
    name: 'ANYA BEAUTY CENTER & SPA',
    shortName: 'Anya Beauty & Spa',
    subtitle: 'B E A U T Y • C E N T E R • S P A',
    instagramHandle: '@anya_beauty_center_spa_',
    instagramUrl: 'https://www.instagram.com/anya_beauty_center_spa_/',
    mapsUrl: 'https://maps.app.goo.gl/BjLqSPZQdXsdaSgJ6?g_st=ic',
    phoneRaw: '0770325089',
    phoneFormatted: '0 770 325 089',
    address: {
      fr: 'Résidence Hasnaoui, Îlot 79 B, Oran',
      ar: 'إقامة حسناوي، جزيرة 79 ب، وهران',
    },
    openingHoursPlaceholder: {
      fr: '[à compléter]',
      ar: '[سيُضاف لاحقاً]',
    },
    tagline: {
      fr: 'Hammam, Coiffure & Esthétique — Détente et bien-être sont au rendez-vous à Oran.',
      ar: 'حمام تقليدي، تصفيف شعر وتجميل — الاسترخاء والرفاهية في انتظاركِ في وهران.',
    },
    previewRibbon: {
      fr: 'Aperçu de démonstration — non officiel',
      ar: 'معاينة تجريبية — غير رسمية',
    },
    footerDisclaimer: {
      fr: 'Maquette créée pour ANYA BEAUTY CENTER & SPA — Aperçu de démonstration non officiel',
      ar: 'نموذج أولي صُمم لـ ANYA BEAUTY CENTER & SPA — معاينة تجريبية غير رسمية',
    },
    demoBadge: {
      fr: 'Formulaire de démonstration — Aucune donnée n\'est envoyée',
      ar: 'نموذج حجز تجريبي — لا يتم إرسال أي بيانات',
    },
    missingDataBadge: {
      fr: '[à compléter]',
      ar: '[سيُضاف لاحقاً]',
    },
  },

  nav: {
    home: { fr: 'Accueil', ar: 'الرئيسية' },
    services: { fr: 'Services & Tarifs', ar: 'الخدمات والأسعار' },
    gallery: { fr: 'Galerie', ar: 'المعرض' },
    about: { fr: 'L\'Esprit Anya', ar: 'هويتنا' },
    contact: { fr: 'Contact & RDV', ar: 'حجز وتواصل' },
    bookCta: { fr: 'Prendre RDV', ar: 'احجزي موعدك' },
    callUs: { fr: 'Appeler le salon', ar: 'اتصلي بالصالون' },
    replayIntro: { fr: '✨ Intro', ar: '✨ عرض البداية' },
    switchLang: { fr: 'العربية', ar: 'Français' },
  },

  splash: {
    taglineTop: {
      fr: 'Sanctuaire de Beauté & Hammam Traditionnel',
      ar: 'واحة الجمال والحمام الجزائري الأصيل',
    },
    cityLabel: {
      fr: 'Oran · Résidence Hasnaoui',
      ar: 'وهران · إقامة حسناوي',
    },
    bio: {
      fr: 'Hammam, Coiffure & Esthétique — Détente et bien-être sont au rendez-vous à Oran.',
      ar: 'حمام تقليدي، تصفيف شعر وتجميل — الاسترخاء والرفاهية في انتظاركِ في وهران.',
    },
    enterCta: {
      fr: 'Entrer dans l\'univers Anya',
      ar: 'ادخلي عالم أنيا',
    },
    skipBtn: {
      fr: 'Passer l\'intro',
      ar: 'تخطي المقدمة',
    },
    langSelectLabel: {
      fr: 'Choisir la langue',
      ar: 'اختيار اللغة',
    },
  },

  hero: {
    locationBadge: {
      fr: 'Oran • Résidence Hasnaoui',
      ar: 'وهران • إقامة حسناوي',
    },
    womenOnly: {
      fr: 'Espace 100% réservé aux femmes',
      ar: 'فضاء خاص ومحجوز للسيدات 100%',
    },
    title: {
      fr: 'L\'Art du Bien-Être & de la Beauté Féminine à Oran',
      ar: 'فن الاسترخاء وجمال المرأة العصرية في وهران',
    },
    description: {
      fr: 'Hammam traditionnel algérien avec savon beldi et tabrima, balayages lumineux, soins du corps sur mesure et esthétique soignée dans un cadre intime et raffiné.',
      ar: 'الحمام الجزائري الأصيل بالصابون البلدي والتبريمة، بالياج وتصفيف شعر احترافي، وعناية مخصصة بالجسم في أجواء دافئة ومترفة.',
    },
    ctaPrimary: {
      fr: 'Prendre Rendez-vous (Démo)',
      ar: 'طلب موعد تجريبي',
    },
    ctaSecondary: {
      fr: 'Forfait Évasion Bien-Être (3000 DA)',
      ar: 'باقة الاسترخاء والرفاهية (3000 د.ج)',
    },
    floatingBadge: {
      fr: 'Évasion Bien-Être • 3000 DA',
      ar: 'باقة الاسترخاء • 3000 د.ج',
    },
  },

  pillarsSection: {
    eyebrow: {
      fr: 'Les 3 Piliers Anya',
      ar: 'ثلاثية الهوية',
    },
    title: {
      fr: 'Trois Sanctuaires Dédiés à Votre Ressourcement',
      ar: 'ثلاثة عوالم مكرسة لراحتكِ وتألقكِ',
    },
    subtitle: {
      fr: 'Inspiré du triptyque officiel du salon : l\'union de la pureté du hammam, de l\'art de la coiffure et du lâcher-prise par le massage.',
      ar: 'مستوحى من ثلاثية الصالون الرسمية: انسجام نقاء الحمام، براعة تصفيف الشعر، وعمق الاسترخاء بالمساج.',
    },
  },

  pillars: [
    {
      id: 'spa',
      title: 'SPA',
      color: '#1F3A2E',
      textColor: '#F7F3EB',
      badge: { fr: 'Hammam & Pureté', ar: 'حمام ونقاء' },
      description: {
        fr: 'Rituels de hammam purifiants, vapeurs bienfaisantes et soins traditionnels aux herbes naturelles.',
        ar: 'طقوس الحمام المنقية، البخار المهدئ والعناية بالأعشاب الطبيعية والخلطات التقليدية.',
      },
    },
    {
      id: 'beauty',
      title: 'BEAUTY',
      color: '#8FA696',
      textColor: '#1C1917',
      badge: { fr: 'Éclat & Coiffure', ar: 'تألق وتصفيف' },
      description: {
        fr: 'Coiffure de cérémonie, balayage signature, hydra facial et mise en beauté sur mesure.',
        ar: 'تصفيف شعر للمناسبات، بالياج احترافي، هيدرا فيشل وإطلالة مميزة.',
      },
    },
    {
      id: 'massage',
      title: 'MASSAGE',
      color: '#E8DEC8',
      textColor: '#1C1917',
      badge: { fr: 'Détente Absolue', ar: 'استرخاء عميق' },
      description: {
        fr: 'Séances de relaxation profonde aux huiles parfumées et pierres chaudes dans une atmosphère feutrée.',
        ar: 'جلسات تدليك عميق بالزيوت العطرية والأحجار الدافئة في أجواء هادئة.',
      },
    },
  ],

  featuredPackage: {
    badge: {
      fr: 'Forfait Signature à l\'Affiche',
      ar: 'الباقة الأكثر طلباً في الصالون',
    },
    title: {
      fr: 'Évasion Bien-Être',
      ar: 'باقة الاسترخاء والرفاهية (Évasion Bien-Être)',
    },
    price: '3000 DA',
    priceNote: {
      fr: 'Tarif officiel affiché au salon',
      ar: 'السعر الرسمي المعلن بالصالون',
    },
    subtitle: {
      fr: 'Le rituel traditionnel complet du bain maure algérien en 4 étapes bienfaisantes.',
      ar: 'الطقس المتكامل للحمام الجزائري الأصيل في 4 مراحل مريحة ومجددة للحيوية.',
    },
    inclusions: [
      {
        step: '01',
        title: {
          fr: 'Hammam & Enveloppement Tabrima',
          ar: 'الحمام وقناع التبريمة',
        },
        desc: {
          fr: 'Hammam traditionnel avec enveloppement Tabrima aux herbes naturelles et savon beldi.',
          ar: 'حمام تقليدي مع قناع التبريمة بالأعشاب الطبيعية والصابون البلدي.',
        },
      },
      {
        step: '02',
        title: {
          fr: 'Exfoliation Kassa Complète',
          ar: 'التقشير الكامل بالكيس',
        },
        desc: {
          fr: 'Exfoliation kassa complète du corps sur marbre chaud pour libérer les toxines.',
          ar: 'تقشير كامل للجسم بالكيس (Kassa) على الرخام الدافئ لتنقية البشرة.',
        },
      },
      {
        step: '03',
        title: {
          fr: 'Lavage des Cheveux & Savonnage',
          ar: 'غسل الشعر والتصبين',
        },
        desc: {
          fr: 'Lavage des cheveux soigné et savonnage doux délicatement parfumé.',
          ar: 'غسل الشعر بعناية والتصبين برغوة الصابون العطرة.',
        },
      },
      {
        step: '04',
        title: {
          fr: 'Collation Thé & Pâtisserie',
          ar: 'ضيافة الشاي والحلوى',
        },
        desc: {
          fr: 'Collation thé & gâteau servie dans notre espace de repos feutré.',
          ar: 'ضيافة شاي جزائري بالنعناع وحلوى راقية في فضاء الاستراحة الهادئ.',
        },
      },
    ],
    cta: {
      fr: 'Choisir ce forfait pour mon RDV',
      ar: 'اختيار هذه الباقة لحجز الموعد',
    },
  },

  promoBanner: {
    tag: {
      fr: 'Offre Spéciale en Cours',
      ar: 'عرض حصري حالي',
    },
    badgePromo: {
      fr: 'Promotion -50%',
      ar: 'تخفيض 50%',
    },
    title: {
      fr: 'Promotion -50% Balayage Signature',
      ar: 'تخفيض 50% على البالياج (Balayage)',
    },
    description: {
      fr: 'Profitez de 50% de réduction sur notre balayage signature pour illuminer vos longueurs de nuances soyeuses.',
      ar: 'استفيدي من تخفيض 50% على البالياج الاحترافي لتتألق خصلات شعركِ بلمعان ذهبي وتدرج طبيعي.',
    },
    basePriceLabel: {
      fr: 'Tarif initial : [à compléter]',
      ar: 'السعر الأصلي: [سيُضاف لاحقاً]',
    },
    cta: {
      fr: 'Réserver le Balayage (-50%)',
      ar: 'حجز عرض البالياج (-50%)',
    },
  },

  sensoryRitual: {
    eyebrow: {
      fr: 'Rituel Sensoriel du Salon',
      ar: 'طقس العطور الخاص',
    },
    title: {
      fr: '"Choisissez un parfum selon vos préférences pour le soin du corps"',
      ar: '"اختاري عطراً حسب تفضيلاتكِ لجلسة العناية بالجسم"',
    },
    subtitle: {
      fr: 'Avant chaque massage ou soin corporel, nos praticiennes vous convient à choisir votre essence noble sur un plateau en laiton.',
      ar: 'قبل كل جلسة مساج أو عناية بالجسم، تُقدم لكِ صينية نحاسية فاخرة لتختاري الزيت العطري الذي يناسب مزاجكِ ورغبتكِ.',
    },
    interactiveHint: {
      fr: 'Touchez un flacon pour libérer ses notes aromatiques :',
      ar: 'المسي القارورة لاستكشاف نفحات هذا الطقس العطري:',
    },
    scents: [
      {
        id: 'amber',
        color: '#D4AF37',
        name: { fr: 'Ambre Royal', ar: 'عنبر ملكي' },
        tag: { fr: 'Chaleureux & Enveloppant', ar: 'دافئ ومهدئ' },
        notes: {
          fr: 'Notes chaudes et résineuses qui détendent profondément les muscles et apaisent l\'esprit.',
          ar: 'نفحات راتنجية دافئة تساعد على استرخاء العضلات واستعادة الراحة التامة.',
        },
      },
      {
        id: 'rose',
        color: '#E07A8B',
        name: { fr: 'Rose de Damas', ar: 'ورد دمشقي' },
        tag: { fr: 'Floral & Régénérant', ar: 'زهري ورقيق' },
        notes: {
          fr: 'Douceur soyeuse des pétales de rose qui hydrate la peau et réveille l\'éclat féminin.',
          ar: 'نعومة حريرية من بتلات الورد الطبيعي تغذي البشرة وتبعث على السكينة والانتعاش.',
        },
      },
      {
        id: 'oud',
        color: '#8C5E3C',
        name: { fr: 'Musc Blanc & Oud', ar: 'مسك أبيض وعود' },
        tag: { fr: 'Noble & Équilibrant', ar: 'أصيل وفاخر' },
        notes: {
          fr: 'Accord boisé précieux et musc pur pour un voyage sensoriel oriental d\'un grand raffinement.',
          ar: 'مزيج فاخر من المسك الصافي وخشب العود لتجربة استرخاء شرقية راقية.',
        },
      },
      {
        id: 'orange',
        color: '#E59837',
        name: { fr: 'Fleur d\'Oranger', ar: 'زهر البرتقال' },
        tag: { fr: 'Frais & Lumineux', ar: 'منعش ومجدد' },
        notes: {
          fr: 'Senteur hespéridée typiquement méditerranéenne ravivant la vitalité et la bonne humeur.',
          ar: 'عطر متوسطي أصيل ينعش الحواس ويبعث على الحيوية والبهجة.',
        },
      },
    ],
  },

  categories: [
    {
      id: 'hammam',
      name: { fr: 'Hammam & Spa', ar: 'الحمام والسبا' },
      badge: { fr: 'Hammam Spa', ar: 'حمام وسبا' },
      themeColor: '#1F3A2E',
    },
    {
      id: 'massage',
      name: { fr: 'Massage & Soins du Corps', ar: 'المساج والعناية بالجسم' },
      badge: { fr: 'Massage', ar: 'مساج' },
      themeColor: '#C59B5F',
    },
    {
      id: 'coiffure',
      name: { fr: 'Coiffure & Soins Capillaires', ar: 'تصفيف الشعر والبالياج' },
      badge: { fr: 'Coiffure & Balayage', ar: 'تصفيف وبالياج' },
      themeColor: '#8FA696',
    },
    {
      id: 'esthetique',
      name: { fr: 'Esthétique & Beauté', ar: 'التجميل والعناية' },
      badge: { fr: 'Esthétique', ar: 'تجميل' },
      themeColor: '#1F3A2E',
    },
    {
      id: 'mariee',
      name: { fr: 'Packs Mariée', ar: 'باقات العروس' },
      badge: { fr: 'Les Packs Mariée', ar: 'باقات العروس' },
      themeColor: '#C59B5F',
    },
  ] as ServiceCategory[],

  services: [
    {
      id: 'evasion-bien-etre',
      categoryId: 'hammam',
      name: {
        fr: 'Forfait Évasion Bien-Être',
        ar: 'باقة الاسترخاء والرفاهية (Évasion Bien-Être)',
      },
      shortDesc: {
        fr: 'Rituel complet de hammam avec tabrima, savon beldi, exfoliation kassa, shampoing et collation thé.',
        ar: 'طقس حمام متكامل مع التبريمة، الصابون البلدي، تقشير الكيس، غسل الشعر وضيافة الشاي.',
      },
      fullDesc: {
        fr: 'Notre forfait signature incontournable pour un ressourcement absolu : bain de vapeur purifiant, application généreuse d\'enveloppement Tabrima aux herbes bienfaisantes et savon noir beldi, gommage kassa sur banc de marbre chaud, savonnage et shampoing doux, suivi d\'un thé à la menthe parfumé accompagné d\'une pâtisserie fine.',
        ar: 'باقتنا الأيقونية الأكثر طلباً لتجديد الحيوية: بخار الحمام المنقي، قناع التبريمة بالأعشاب الطبيعية والصابون البلدي، تقشير كامل للجسم بالكيس على الرخام الدافئ، غسل الشعر والتصبين، مع ضيافة الشاي والحلوى.',
      },
      priceDisplay: {
        fr: '3000 DA',
        ar: '3000 د.ج',
      },
      isPriceMissing: false,
      highlights: [
        { fr: 'Enveloppement Tabrima aux herbes naturelles', ar: 'قناع التبريمة بالأعشاب الطبيعية' },
        { fr: 'Savon beldi & exfoliation kassa complète', ar: 'صابون بلدي وتقشير كامل بالكيس' },
        { fr: 'Lavage des cheveux et savonnage soigné', ar: 'غسل الشعر والتصبين بعناية' },
        { fr: 'Collation thé & gâteau offerte', ar: 'ضيافة شاي وحلوى راقية' },
      ],
      sensoryNotes: [
        { fr: 'Chaleur enveloppante de la vapeur', ar: 'دفء البخار المهدئ' },
        { fr: 'Herbes aromatiques & savon noir traditionnel', ar: 'أعشاب عطرية وصابون أسود أصيل' },
      ],
    },
    {
      id: 'hammam-traditionnel',
      categoryId: 'hammam',
      name: {
        fr: 'Hammam Traditionnel Algérien',
        ar: 'الحمام الجزائري الأصيل (على أصولو)',
      },
      shortDesc: {
        fr: 'L\'authenticité du bain maure algérien ("الحمام الجزائري على أصولو") dans un décor de marbre et zellige.',
        ar: 'أصالة الحمام الجزائري على أصوله في فضاء دافئ من الرخام والزليج التقليدي.',
      },
      fullDesc: {
        fr: 'Le rituel ancestral du bain maure algérien respectant scrupuleusement les étapes de sudation, sudation parfumée et détente au cœur d\'une architecture d\'alcôves et d\'eau tiède.',
        ar: 'الطقس المتوارث للحمام الجزائري بكل تفاصيله: الاسترخاء في البخار، التقشير المتأني والعناية بالبشرة وسط جدران الزليج والأواني النحاسية.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Marbre chaud & récipients traditionnels en cuivre', ar: 'رخام دافئ وأواني نحاسية تقليدية' },
        { fr: 'Cadre intime et préservé exclusivement pour femmes', ar: 'فضاء نسائي خاص ومريح تماماً' },
      ],
    },
    {
      id: 'massage-relaxant',
      categoryId: 'massage',
      name: {
        fr: 'Séance de Massage Relaxant',
        ar: 'جلسة مساج استرخائي (جلسة مساج)',
      },
      shortDesc: {
        fr: 'Massage apaisant en cabine tamisée à la lueur des bougies et huiles tièdes ("جلسة مساج").',
        ar: 'تدليك مهدئ في غرفة خاصة على ضوء الشموع الدافئة والزيوت المعطرة ("جلسة مساج").',
      },
      fullDesc: {
        fr: 'Une parenthèse de sérénité absolue conçue pour dénouer les tensions corporelles et libérer l\'esprit, dans une cabine privative aux lumières tamisées.',
        ar: 'لحظة هدوء متكاملة لإزالة التعب والتوتر العضلي، في غرفة تدليك خاصة مضاءة بالشموع مع موسيقى هادئة.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Atmosphère feutrée & bougies parfumées', ar: 'أجواء هادئة وشموع عطرية' },
        { fr: 'Pressions adaptées à vos besoins', ar: 'حركات تدليك مخصصة لراحتكِ' },
      ],
    },
    {
      id: 'soin-corps-personnalise',
      categoryId: 'massage',
      name: {
        fr: 'Soin du Corps & Choix du Parfum',
        ar: 'عناية بالجسم مع اختيار العطر المفضل',
      },
      shortDesc: {
        fr: '"Choisissez un parfum selon vos préférences pour le soin du corps"',
        ar: '"اختاري عطراً حسب تفضيلاتكِ لجلسة العناية بالجسم"',
      },
      fullDesc: {
        fr: 'Expérience sur-mesure inspirée de notre rituel olfactif : avant le soin, vous sélectionnez le parfum qui vous inspire parmi nos flacons d\'essences nobles (ambre, rose, oud, fleur d\'oranger) pour une application d\'huile chaude satinée.',
        ar: 'تجربة فريدة مستوحاة من طقس العطور: تختارين الزيت العطري المفضل لديكِ قبل بدء الجلسة لينساب على بشرتكِ بدفء ونعومة فائقة.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Sélection olfactive sur plateau d\'essences', ar: 'اختيار العطر من صينية الزيوت الخاصة' },
        { fr: 'Hydratation profonde & toucher soyeux', ar: 'ترطيب عميق ولمسة حريرية للبشرة' },
      ],
    },
    {
      id: 'balayage-signature',
      categoryId: 'coiffure',
      name: {
        fr: 'Balayage Signature Anya (Promotion -50%)',
        ar: 'بالياج أنيا المميز (تخفيض 50%)',
      },
      shortDesc: {
        fr: 'Éclaircissement fondu naturel, reflets lumineux et brillance soyeuse.',
        ar: 'تفتيح طبيعي، خصلات مضيئة وتدرج لوني ساحر بدون خطوط حادة.',
      },
      fullDesc: {
        fr: 'La technique star d\'ANYA : des mèches subtilement dégradées pour un effet soleil naturel qui apporte du relief et de la brillance sans abîmer la fibre capillaire.',
        ar: 'التقنية الأشهر في صالون أنيا: خصلات شعر متدرجة ببراعة تمنح شعرك إشراقة طبيعية وكثافة بصرية مع الحفاظ على صحة الشعر.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      isPromo: true,
      promoBadge: {
        fr: '-50% OFF',
        ar: 'خصم 50%',
      },
      highlights: [
        { fr: 'En promotion actuelle : -50% de réduction', ar: 'عرض ترويجي حالي: خصم 50%' },
        { fr: 'Nuances fondues sans démarcation', ar: 'تدرج طبيعي ولمعان متألق' },
      ],
    },
    {
      id: 'coupe-coloration',
      categoryId: 'coiffure',
      name: {
        fr: 'Coupe & Coloration Sur-Mesure',
        ar: 'قص وصبغة مخصصة (Coupe & Coloration)',
      },
      shortDesc: {
        fr: 'Coupe personnalisée selon la morphologie et coloration lumineuse.',
        ar: 'قصة شعر ملائمة لملامح الوجه وتلوين غني وثابت.',
      },
      fullDesc: {
        fr: 'Conseil visagiste pour restructurer votre coupe, diagnostic du cuir chevelu et application de colorations éclatantes préservant la santé du cheveu.',
        ar: 'استشارة متخصصة لاختيار القصة واللون الأنسب لملامحكِ ونوع شعركِ مع تغذية عميقة لألياف الشعر.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Diagnostic visagiste attentif', ar: 'تشخيص دقيق لنوع الشعر وشكل الوجه' },
        { fr: 'Brushing soyeux en finition', ar: 'تصفيف حريري أنيق عند الانتهاء' },
      ],
    },
    {
      id: 'soin-capillaire',
      categoryId: 'coiffure',
      name: {
        fr: 'Soin Capillaire Profond',
        ar: 'علاج مغذٍ للشعر (Soin Capillaire)',
      },
      shortDesc: {
        fr: 'Nutrition intense et réparation des longueurs dévitalisées.',
        ar: 'تغذية مكثفة وترميم عميق للشعر التالف والجاف.',
      },
      fullDesc: {
        fr: 'Bain de nutrition réparateur pour redonner force, souplesse et éclat aux cheveux fatigués par la chaleur et les traitements.',
        ar: 'حمام عناية مغذٍ لاستعادة مرونة ولمعان الشعر المجهد بفضل تركيبات مرطبة غنية.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
    },
    {
      id: 'soin-pedicure',
      categoryId: 'esthetique',
      name: {
        fr: 'Soin Pédicure au Bassin de Cuivre',
        ar: 'طقس العناية بالأقدام في حوض النحاس (Pédicure)',
      },
      shortDesc: {
        fr: 'Bain de pieds tiède aux pétales de roses fraîches, gommage et beauté des ongles.',
        ar: 'حمام ماء دافئ مع بتلات الورد الطبيعية، تقشير وعناية بالأظافر.',
      },
      fullDesc: {
        fr: 'Le rituel traditionnel de pédicure : immersion des pieds dans une grande bassine en cuivre ouvragée garnie d\'eau tiède et de pétales de fleurs fraîches, gommage doux, râpe soignée, massage des pieds et mise en beauté des ongles.',
        ar: 'طقس تقليدي للاسترخاء والعناية: غمر القدمين في حوض نحاسي عريض بالماء الدافئ وبتلات الورد، تقشير الجلد الميت، تدليك مهدئ للأقدام وتجميل الأظافر.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Bassin traditionnel en cuivre & pétales frais', ar: 'حوض نحاسي تقليدي ببتلات الورد الطازجة' },
        { fr: 'Gommage velouté et modelage des pieds', ar: 'تقشير ناعم ومساج مريح للقدمين' },
      ],
    },
    {
      id: 'hydra-facial',
      categoryId: 'esthetique',
      name: {
        fr: 'Hydra Facial',
        ar: 'جلسة هيدرا فيشل (Hydra Facial)',
      },
      shortDesc: {
        fr: 'Nettoyage profond, extraction douce et hydratation intense du visage.',
        ar: 'تنظيف عميق، إزالة الشوائب بلطف وترطيب مكثف لبشرة الوجه.',
      },
      fullDesc: {
        fr: 'Soin complet du visage combinant exfoliation mécanique douce, nettoyage des pores et infusion de sérums hydratants pour un teint instantanément net et repulpé.',
        ar: 'جلسة متكاملة لنضارة الوجه تجمع بين تقشير البشرة اللطيف، تنقية المسام من الشوائب وضخ سيرومات الترطيب لمنحكِ بشرة مشرقة ونضرة.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Éclat immédiat & grain de peau lissé', ar: 'نضارة فورية وملمس بشرة ناعم' },
        { fr: 'Soin adapté à tous types de peaux', ar: 'مناسب لجميع أنواع البشرة' },
      ],
    },
    {
      id: 'pack-mariee-signature',
      categoryId: 'mariee',
      name: {
        fr: 'Pack Mariée Signature Anya',
        ar: 'باقة العروس الملكية (Les Packs Mariée)',
      },
      shortDesc: {
        fr: 'Programme de préparation complète pour la future mariée.',
        ar: 'برنامج تحضيري متكامل وشامل لعروس المستقبل.',
      },
      fullDesc: {
        fr: 'Un rituel sur-mesure pour célébrer la mariée dans les règles de l\'art : hammam traditionnel complet avec tabrima, soins de beauté, coiffure et mise en beauté personnalisée pour son grand jour.',
        ar: 'طقس مخصص للاحتفاء بالعروس: حمام تقليدي شامل بالتبريمة الملكية، عناية فائقة بالبشرة والشعر، مع جلسات التجميل المتكاملة ليومكِ المميز.',
      },
      priceDisplay: {
        fr: '[à compléter]',
        ar: '[سيُضاف لاحقاً]',
      },
      isPriceMissing: true,
      highlights: [
        { fr: 'Programme complet privatisé ou personnalisé', ar: 'برنامج مخصص بالكامل لاحتياجات العروس' },
        { fr: 'Détails des formules : [à compléter]', ar: 'تفاصيل الباقات: [سيُضاف لاحقاً]' },
      ],
    },
  ] as ServiceItem[],

  galleryPage: {
    eyebrow: { fr: 'Portfolio & Atmosphère', ar: 'المعرض الفوتوغرافي' },
    title: {
      fr: 'Galerie & Ambiance du Salon',
      ar: 'معرض الصور وأجواء الصالون',
    },
    subtitle: {
      fr: 'Découvrez les espaces, les rituels et les attentions qui composent l\'expérience ANYA Beauty Center & Spa à Oran.',
      ar: 'اكتشفي المساحات والطقوس والتفاصيل التي تصنع تجربة أنيا بيوتي سنتر وسبا في وهران.',
    },
    filterAll: { fr: 'Tout', ar: 'الكل' },
    filterHammam: { fr: 'Hammam & Rituels', ar: 'الحمام والطقوس' },
    filterCoiffure: { fr: 'Coiffure & Balayage', ar: 'تصفيف وبالياج' },
    filterMassage: { fr: 'Massages & Pédicure', ar: 'المساج والعناية' },
    filterAmbiance: { fr: 'Ambiance & Détails', ar: 'الأجواء والتفاصيل' },
    openImage: { fr: 'Ouvrir l’image', ar: 'عرض الصورة' },
    closeLightbox: { fr: 'Fermer', ar: 'إغلاق' },
    previousImage: { fr: 'Image précédente', ar: 'الصورة السابقة' },
    nextImage: { fr: 'Image suivante', ar: 'الصورة التالية' },
    galleryItems: {
      'gallery-hammam-retreat': {
        title: { fr: 'Hammam Traditionnel & Marbre Chauffé', ar: 'الحمام التقليدي والرخام الدافئ' },
        description: { fr: 'L\'authenticité du bain maure algérien sur marbre chaud.', ar: 'أصالة الحمام الجزائري على الرخام الدافئ.' },
      },
      'gallery-copper-pedicure': {
        title: { fr: 'Soin Pédicure au Bassin de Cuivre', ar: 'عناية بالقدمين في الحوض النحاسي' },
        description: { fr: 'Bain de pieds tiède aux pétales de roses et soin complet.', ar: 'حمام دافئ للقدمين ببتلات الورد وعناية متكاملة.' },
      },
      'gallery-fragrance-tray': {
        title: { fr: 'Plateau des Essences & Senteurs', ar: 'صينية الخلاصات والعطور' },
        description: { fr: 'Le rituel olfactif sur plateau en laiton avant chaque soin.', ar: 'طقس اختيار العطر على صينية نحاسية قبل كل جلسة.' },
      },
      'gallery-balayage-sunlight': {
        title: { fr: 'Balayage Signature & Reflets Lumineux', ar: 'بالياج أنيا ولمسات مشرقة' },
        description: { fr: 'Dégradé fondu naturel et reflets miel dorés.', ar: 'تدرجات طبيعية ناعمة ولمسات بلون العسل الذهبي.' },
      },
      'gallery-brass-incense': {
        title: { fr: 'Brûleur d\'Encens en Laiton & Accueil', ar: 'مبخرة نحاسية وحفاوة الاستقبال' },
        description: { fr: 'Hospitalité algérienne et senteurs traditionnelles dès l\'accueil.', ar: 'ضيافة جزائرية وعطور تقليدية منذ لحظة الاستقبال.' },
      },
      'gallery-tea-hospitality': {
        title: { fr: 'Collation Thé à la Menthe & Pâtisseries', ar: 'ضيافة الشاي بالنعناع والحلويات' },
        description: { fr: 'Moment de détente et douceur après le rituel de hammam.', ar: 'لحظة من الاسترخاء والحلاوة بعد طقوس الحمام.' },
      },
    },
  },

  aboutPage: {
    title: {
      fr: 'L\'Esprit ANYA — Hammam & Beauté à Oran',
      ar: 'هوية أنيا — أصالة الحمام وجمال العصر في وهران',
    },
    tagline: {
      fr: 'La rencontre entre l\'art ancestral du hammam algérien et la haute exigence de la coiffure et de l\'esthétique moderne.',
      ar: 'تلاقي طقوس الحمام الجزائري الأصيلة مع دقة وفن تصفيف الشعر والتجميل العصري.',
    },
    storyP1: {
      fr: 'Situé au sein de la Résidence Hasnaoui à Oran, ANYA BEAUTY CENTER & SPA a été pensé comme un havre de paix exclusivement réservé aux femmes. Dès l\'entrée, l\'atmosphère feutrée aux tonalités Vert Forêt, Sauge et Crème invite au lâcher-prise.',
      ar: 'يقع مركز أنيا بيوتي سنتر وسبا في إقامة حسناوي بوهران، وصُمم ليكون ملاذاً هادئاً ومريحاً مخصصاً للنساء فقط. تمنحكِ الألوان الطبيعية الهادئة شعوراً فورياً بالسكينة والاسترخاء منذ اللحظة الأولى.',
    },
    storyP2: {
      fr: 'Notre philosophie s\'articule autour de "الحمام الجزائري على أصولو" : perpétuer les gestes séculaires de notre patrimoine avec des ingrédients nobles (savon beldi, tabrima aux herbes naturelles, eau de rose) tout en offrant des prestations de pointe en coiffure (balayage, coloration) et esthétique (hydra facial, pédicure au bassin de cuivre).',
      ar: 'تتركز فلسفتنا على تقديم "الحمام الجزائري على أصولو": إحياء طقوس الأجداد المعتمدة على المكونات الطبيعية النقية (الصابون البلدي، التبريمة بالأعشاب الطبيعية، ماء الورد) بالتوازي مع تقديم أحدث تقنيات تصفيف الشعر (البالياج) والتجميل (هيدرا فيشل، وبديكير الحوض النحاسي).',
    },
    avisHeading: {
      fr: 'Les Retours de nos Clientes',
      ar: 'آراء زبوناتنا',
    },
    avisNotice: {
      fr: '[Captures réelles consultables sur Instagram]',
      ar: '[المحادثات الأصلية متاحة على القصص المثبتة]',
    },
    avisDescription: {
      fr: 'Retrouvez les partages spontanés et témoignages authentiques de nos clientes dans la story à la une « Avis clients ❤️ ».',
      ar: 'اكتشفي المشاركات العفوية والشهادات الحقيقية لزبوناتنا في القصة المثبتة « Avis clients ❤️ ».',
    },
    avisHammam: {
      fr: 'L’ambiance feutrée, la chaleur du marbre et le soin Tabrima composent une vraie parenthèse de détente.',
      ar: 'أجواء هادئة ودفء الرخام وعناية التبريمة تمنحكِ لحظة استرخاء أصيلة.',
    },
    avisHair: {
      fr: 'Le balayage lumineux et la douceur des soins révèlent une beauté qui reste la vôtre.',
      ar: 'البالياج المشرق ونعومة العناية يبرزان جمالكِ الطبيعي.',
    },
    avisStoryLabel: {
      fr: 'Story : Avis clients ❤️',
      ar: 'القصة: آراء الزبونات ❤️',
    },
    instagramCallout: {
      fr: 'Voir la story « Avis clients » sur Instagram',
      ar: 'شاهدي قصة « آراء الزبونات » على إنستغرام',
    },
  },

  contactPage: {
    title: {
      fr: 'Accès, Contact & Prise de Rendez-vous',
      ar: 'التواصل وحجز المواعيد',
    },
    subtitle: {
      fr: 'Pour toute demande d\'information ou réservation, contactez-nous directement par téléphone ou via nos réseaux.',
      ar: 'لأي استفسار أو حجز، يسعدنا تواصلكِ المباشر معنا عبر الهاتف أو منصات التواصل الاجتماعي.',
    },
    phoneCardTitle: { fr: 'Téléphone & WhatsApp Direct', ar: 'الهاتف والواتساب المباشر' },
    addressCardTitle: { fr: 'Adresse & Accès', ar: 'العنوان وطريقة الوصول' },
    hoursCardTitle: { fr: 'Horaires du Salon', ar: 'مواعيد الصالون' },
    hoursNotice: {
      fr: '[Horaires d\'ouverture : à compléter]',
      ar: '[ساعات العمل: سيُضاف لاحقاً]',
    },
    hoursDescription: {
      fr: 'Contactez le salon au 0770 325 089 pour connaître les créneaux hammam et coiffure de la semaine.',
      ar: 'يُرجى الاتصال على 0770 325 089 لمعرفة أوقات الحمام والتصفيف المتاحة لهذا الأسبوع.',
    },
    openMapsBtn: { fr: 'Ouvrir dans Google Maps', ar: 'فتح في خرائط جوجل' },
    openInstaBtn: { fr: 'Voir sur Instagram (@anya_beauty_center_spa_)', ar: 'مشاهدة على إنستغرام (@anya_beauty_center_spa_)' },
    callAction: { fr: 'Appeler le salon', ar: 'اتصلي بالصالون' },
    mapAction: { fr: 'Ouvrir dans Google Maps', ar: 'فتح في خرائط جوجل' },
    formIntro: {
      fr: 'Configurez votre rituel sur-mesure avant de valider votre demande.',
      ar: 'اختاري تفاصيل طقسكِ الخاص قبل تأكيد طلبكِ.',
    },
    notesPlaceholder: {
      fr: 'Ambre, Rose, Musc, Fleur d’oranger…',
      ar: 'عنبر، ورد، مسك، زهر البرتقال…',
    },

    form: {
      title: { fr: 'Demande de Rendez-vous Privilégié', ar: 'طلب موعد مميز' },
      nameLabel: { fr: 'Nom complet', ar: 'الاسم الكامل' },
      namePlaceholder: { fr: 'Ex: Sarah B.', ar: 'مثال: سارة ب.' },
      phoneLabel: { fr: 'Numéro de téléphone', ar: 'رقم الهاتف' },
      phonePlaceholder: { fr: '07.. .. .. ..', ar: '07.. .. .. ..' },
      serviceLabel: { fr: 'Prestation souhaitée', ar: 'الخدمة المطلوبة' },
      dateLabel: { fr: 'Date souhaitée', ar: 'التاريخ المفضل' },
      notesLabel: { fr: 'Remarques ou préférences (optionnel)', ar: 'ملاحظات أو تفضيلات خاصة (اختياري)' },
      notesPlaceholder: { fr: 'Ex: préférence horaire, parfum de massage souhaité...', ar: 'مثال: تفضيل التوقيت، العطر المفضل لجلسة المساج...' },
      submitBtn: { fr: 'Envoyer ma demande de rendez-vous (Démo)', ar: 'إرسال طلب الموعد (تجريبي)' },
      confirmationTitle: { fr: 'Demande de Démonstration Enregistrée', ar: 'تم تسجيل طلب الحجز التجريبي' },
      confirmationBody: {
        fr: 'Merci ! Dans la version finale validée par le salon, cette demande déclenche soit une notification directe sur WhatsApp au 0770 325 089, soit une confirmation par appel téléphonique avec l\'équipe ANYA.',
        ar: 'شكراً لكِ! في النسخة المعتمدة رسمياً من الصالون، يُرسل هذا الطلب فوراً كرسالة واتساب إلى الرقم 0770 325 089 أو يتم تأكيده عبر مكالمة هاتفية مع فريق أنيا.',
      },
      closeBtn: { fr: 'Compris', ar: 'حسناً' },
    },
  },

  drawer: {
    selectForBooking: {
      fr: 'Sélectionner pour un RDV (Démo)',
      ar: 'اختيار هذه الخدمة لحجز موعد (تجريبي)',
    },
    close: {
      fr: 'Fermer',
      ar: 'إغلاق',
    },
    detailsTitle: {
      fr: 'Détails de la prestation',
      ar: 'تفاصيل الخدمة',
    },
    highlightsTitle: {
      fr: 'Ce que comprend le rituel',
      ar: 'ما يتضمنه الطقس',
    },
    sensoryTitle: {
      fr: 'Atmosphère & Cocon',
      ar: 'الأجواء والراحة',
    },
  },
};
