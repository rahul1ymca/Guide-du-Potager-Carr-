import { StepGuide, VegetableInfo, FaqItem } from '../types';

export const VEGETABLES: VegetableInfo[] = [
  {
    id: 'tomate',
    nameFr: 'Tomate (cerise ou grappe)',
    nameEn: 'Tomato (cherry or cluster)',
    perSquare: 1,
    family: 'Solanacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Élevé',
    growthDays: 75,
    goodCompanions: ['Basilic', 'Salade', 'Carotte', 'Œillet d\'Inde'],
    badCompanions: ['Fenouil', 'Chou'],
    tipsFr: 'Tuteurez verticalement en bordure nord du potager carré pour ne pas ombrager les autres cultures.',
    tipsEn: 'Stake vertically on the northern edge of the square garden to avoid shading other crops.',
    icon: '🍅',
    badgeColor: 'bg-red-50 text-red-700 border-red-200'
  },
  {
    id: 'salade',
    nameFr: 'Laitue / Salade',
    nameEn: 'Lettuce / Salad greens',
    perSquare: 4,
    family: 'Astéracées',
    sunRequirement: 'Mi-ombre',
    waterNeed: 'Modéré',
    growthDays: 45,
    goodCompanions: ['Radis', 'Carotte', 'Fraise', 'Tomate'],
    badCompanions: ['Persil'],
    tipsFr: 'Récoltez feuille à feuille pour stimuler la repousse continue sans arracher le pied.',
    tipsEn: 'Harvest outer leaves continuously to keep the plant producing fresh greens.',
    icon: '🥬',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    id: 'carotte',
    nameFr: 'Carotte nantaise',
    nameEn: 'Nantes Carrot',
    perSquare: 16,
    family: 'Apiacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Modéré',
    growthDays: 80,
    goodCompanions: ['Poireau', 'Radis', 'Romarin', 'Salade'],
    badCompanions: ['Fenouil', 'Aneth'],
    tipsFr: 'Mélangez les graines fines avec du marc de café pour faciliter un semis régulier et espacé.',
    tipsEn: 'Mix fine seeds with dry coffee grounds for even spacing and to deter pests.',
    icon: '🥕',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'radis',
    nameFr: 'Radis 18 jours',
    nameEn: 'French Breakfast Radish',
    perSquare: 16,
    family: 'Brassicacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Élevé',
    growthDays: 25,
    goodCompanions: ['Carotte', 'Salade', 'Pois', 'Tomate'],
    badCompanions: ['Chou'],
    tipsFr: 'Arrosez régulièrement pour éviter qu\'ils ne deviennent piquants ou creux.',
    tipsEn: 'Water consistently to keep roots tender, mild, and prevent them from turning woody.',
    icon: '🌱',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200'
  },
  {
    id: 'epinard',
    nameFr: 'Épinard d\'Amérique',
    nameEn: 'Spinach',
    perSquare: 9,
    family: 'Astéracées',
    sunRequirement: 'Mi-ombre',
    waterNeed: 'Modéré',
    growthDays: 50,
    goodCompanions: ['Fraise', 'Pois', 'Chou'],
    badCompanions: ['Betterave'],
    tipsFr: 'Préfère la mi-ombre en été pour retarder la montée prématurée en graines.',
    tipsEn: 'Prefers partial shade in mid-summer to prevent premature bolting.',
    icon: '🍃',
    badgeColor: 'bg-green-50 text-green-700 border-green-200'
  },
  {
    id: 'betterave',
    nameFr: 'Betterave rouge ronde',
    nameEn: 'Round Beetroot',
    perSquare: 9,
    family: 'Astéracées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Modéré',
    growthDays: 60,
    goodCompanions: ['Oignon', 'Laitue', 'Coriandre'],
    badCompanions: ['Épinard', 'Haricot'],
    tipsFr: 'Les jeunes feuilles se consomment aussi crues en salade colorée.',
    tipsEn: 'Tender young leaves can also be harvested for delicious fresh gourmet salads.',
    icon: '🟣',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    id: 'haricot',
    nameFr: 'Haricot nain sans fil',
    nameEn: 'Bush Green Bean',
    perSquare: 9,
    family: 'Fabacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Modéré',
    growthDays: 60,
    goodCompanions: ['Fraise', 'Carotte', 'Concombre'],
    badCompanions: ['Oignon', 'Ail', 'Échalote'],
    tipsFr: 'Fixe l\'azote de l\'air dans ses racines, enrichissant naturellement la terre pour la culture suivante.',
    tipsEn: 'Enriches the soil by fixing atmospheric nitrogen into root nodules for successor crops.',
    icon: '🫘',
    badgeColor: 'bg-lime-50 text-lime-700 border-lime-200'
  },
  {
    id: 'basilic',
    nameFr: 'Basilic Grand Vert',
    nameEn: 'Sweet Basil',
    perSquare: 4,
    family: 'Aromatiques',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Modéré',
    growthDays: 40,
    goodCompanions: ['Tomate', 'Poivron', 'Piment'],
    badCompanions: ['Rue'],
    tipsFr: 'Plante compagne indispensable de la tomate : repousse pucerons et mouches blanches.',
    tipsEn: 'Essential companion next to tomatoes: naturally repels aphids and whiteflies.',
    icon: '🌿',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  {
    id: 'courgette',
    nameFr: 'Courgette non coureuse',
    nameEn: 'Bush Zucchini',
    perSquare: 1,
    family: 'Cucurbitacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Élevé',
    growthDays: 55,
    goodCompanions: ['Basilic', 'Haricot', 'Capucine'],
    badCompanions: ['Pomme de terre'],
    tipsFr: 'Placez-la dans un carré d\'angle pour laisser son feuillage déborder vers l\'extérieur sans étouffer les voisins.',
    tipsEn: 'Plant in a corner square so spreading leaves cascade outwards without smothering adjacent crops.',
    icon: '🥒',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300'
  },
  {
    id: 'poireau',
    nameFr: 'Poireau d\'été ou d\'hiver',
    nameEn: 'Leek',
    perSquare: 9,
    family: 'Alliacées',
    sunRequirement: 'Plein soleil',
    waterNeed: 'Modéré',
    growthDays: 120,
    goodCompanions: ['Carotte', 'Fraise', 'Tomate'],
    badCompanions: ['Haricot', 'Pois'],
    tipsFr: 'Son odeur masque celle de la carotte, créant une barrière répulsive naturelle ultra-efficace.',
    tipsEn: 'Its pungent aroma confuses and deters the carrot fly naturally.',
    icon: '🧅',
    badgeColor: 'bg-stone-50 text-stone-700 border-stone-200'
  }
];

export const STEP_GUIDES: StepGuide[] = [
  {
    number: 1,
    titleFr: 'Choisir l\'Emplacement et l\'Orientation Optimale',
    titleEn: 'Selecting the Ideal Location and Sun Orientation',
    shortDescFr: 'Le succès de votre potager en carré repose à 70% sur son exposition au soleil et son accessibilité.',
    shortDescEn: 'Success depends heavily on sun exposure, air circulation, and proximity to your water point.',
    contentFr: [
      'Un potager carré exige un minimum de 6 à 8 heures d\'ensoleillement direct quotidien pour permettre la floraison et la fructification généreuse des légumes-fruits comme les tomates et les poivrons.',
      'Privilégiez une orientation plein Sud ou Sud-Est, à l\'abri des vents froids dominants (contre un mur protecteur ou une haie filtrante, sans subir l\'ombre des grands arbres).',
      'Assurez-vous qu\'un point d\'eau ou un récupérateur d\'eau de pluie soit situé à moins de 5 à 10 mètres : un arrosage régulier et sans effort est la clé de la longévité de vos plantations.'
    ],
    contentEn: [
      'A square foot garden demands at least 6 to 8 hours of direct daily sunlight to nurture heavy-fruiting vegetables like tomatoes, peppers, and squash.',
      'Aim for a South or South-East orientation, protected from cold winds by a warm wall or windbreak, away from invasive tree roots.',
      'Position your raised box within 5 to 10 meters of a clean water tap or rainwater barrel to make watering pleasant and hassle-free.'
    ],
    proTipFr: 'Laissez au moins 80 cm à 1 mètre d\'allée libre tout autour du carré pour circuler confortablement avec une brouette ou un arrosoir.',
    proTipEn: 'Maintain at least 80 cm to 1 meter of walkway space around the bed to comfortably maneuver wheelbarrows and watering cans.',
    mistakeToAvoidFr: 'Installer le carré sous le houppier d\'un grand arbre : la concurrence racinaire et le manque de lumière affaibliraient immédiatement vos plants.',
    mistakeToAvoidEn: 'Installing directly beneath large trees: root competition and thick shade will severely stunt vegetable vigor.',
    keySpecs: [
      { labelFr: 'Ensoleillement requis', labelEn: 'Sunlight required', val: '6 à 8 h / jour' },
      { labelFr: 'Orientation recommandée', labelEn: 'Recommended orientation', val: 'Sud / Sud-Est' },
      { labelFr: 'Largeur des allées', labelEn: 'Walkway clearance', val: '80 - 100 cm' }
    ]
  },
  {
    number: 2,
    titleFr: 'Dimensions Standards et Choix du Bois Durable',
    titleEn: 'Standard Dimensions and Durable Wood Selection',
    shortDescFr: 'Pourquoi 120 x 120 cm ? La formule ergonomique universelle pour ne jamais marcher sur la terre.',
    shortDescEn: 'Why 120 x 120 cm? The universal ergonomic standard so you never step on the growing soil.',
    contentFr: [
      'La dimension standard reconnue dans le monde entier est de 120 cm x 120 cm (1,20 m de côté), divisée en 16 cases individuelles de 30 x 30 cm. Cette géométrie n\'est pas un hasard : le bras d\'un adulte moyen mesure environ 60 cm, ce qui permet d\'atteindre le centre exact du carré sans jamais devoir poser le pied sur la terre.',
      'Pour la hauteur, prévoyez 20 à 30 cm pour un potager posé sur sol meuble en pleine terre, ou 40 à 50 cm pour un carré sur terrasse, dalle béton ou pour les personnes souffrant du dos.',
      'Le choix de l\'essence de bois est crucial : utilisez exclusivement des bois naturels de classe 3 ou 4 naturellement imputrescibles, non traités chimiquement, comme le mélèze de pays, le douglas, le châtaignier ou le chêne. Évitez absolument le pin autoclave imprégné de métaux lourds.'
    ],
    contentEn: [
      'The international golden dimension is 120 cm x 120 cm (4x4 feet), subdivided into 16 individual 30x30 cm grids. This allows you to reach the dead center from any side without ever stepping on or compacting the soil.',
      'For bed height, count 20 to 30 cm for natural garden soil, or 40 to 50 cm if building on a terrace, rooftop, or for back-friendly ergonomics.',
      'Choose naturally rot-resistant, untreated Class 3 or 4 woods such as Larch (mélèze), Douglas fir, Chestnut (châtaignier), or Oak. Never use pressure-treated chemical wood containing heavy metal salts.'
    ],
    proTipFr: 'Pour doubler la durée de vie du bois sans chimie, huilez les planches avec de l\'huile de lin tiédie additionnée de 10% d\'essence de térébenthine.',
    proTipEn: 'Double the wood lifespan naturally by coating planks with boiled linseed oil mixed with 10% pure gum turpentine.',
    mistakeToAvoidFr: 'Fabriquer un carré de 150 cm de large : le centre deviendrait inaccessible sans écraser la terre meuble et abîmer les racines.',
    mistakeToAvoidEn: 'Building wider than 120 cm: reaching the center will force you to lean heavily or step onto the bed, ruining soil porosity.',
    keySpecs: [
      { labelFr: 'Dimensions extérieures', labelEn: 'Outer dimensions', val: '120 × 120 cm' },
      { labelFr: 'Cases de culture', labelEn: 'Individual squares', val: '16 (30 × 30 cm)' },
      { labelFr: 'Épaisseur des planches', labelEn: 'Plank thickness', val: '22 à 28 mm' }
    ]
  },
  {
    number: 3,
    titleFr: 'La Préparation du Fond et la Barrière Anti-Nuisibles',
    titleEn: 'Ground Foundation and Anti-Rodent Barrier',
    shortDescFr: 'Isoler le fond pour éviter les mauvaises herbes vivaces et protéger les racines des rongeurs.',
    shortDescEn: 'Isolate the base to suppress perennial weeds and protect root systems from burrowing pests.',
    contentFr: [
      'Si votre carré repose sur une pelouse ou un sol herbeux, commencez par tondre ras sans décaisser. Tapissez le fond d\'une double couche de carton brun neutre (sans encre ni adhésif plastique). Le carton étouffera le chiendent et les herbes vivaces tout en attirant en quelques semaines une armada de vers de terre qui viendront digérer la cellulose.',
      'En zone rurale ou si votre jardin héberge des campagnols ou des taupes, agrafez sous le cadre un grillage métallique galvanisé à mailles fines (10 à 13 mm) pour empêcher les rongeurs de dévorer les carottes et racines par le dessous.',
      'Pour les carrés installés sur balcon ou terrasse en dur, installez un feutre géotextile résistant qui retiendra le terreau tout en assurant un drainage d\'eau impeccable.'
    ],
    contentEn: [
      'If placing the box over grass, mow low. Lay a double layer of plain corrugated brown cardboard across the ground. It smothers stubborn weeds while decomposing into organic matter that attracts beneficial earthworms.',
      'If voles or burrowing rodents roam your region, staple a 10–13 mm galvanized wire mesh beneath the perimeter before adding soil.',
      'For balconies or stone patios, line the interior with permeable landscape fabric to hold the potting mix while providing effortless excess water drainage.'
    ],
    proTipFr: 'Mouillez abondamment le carton au tuyau avant d\'ajouter la terre : il s\'assouplit immédiatement et commence sa décomposition biologique.',
    proTipEn: 'Drench the cardboard thoroughly with water before dumping soil: this kicks off microbial breakdown immediately.',
    mistakeToAvoidFr: 'Utiliser une bâche plastique imperméable au fond : elle transformerait votre carré potager en marécage étouffant pour les racines.',
    mistakeToAvoidEn: 'Using non-permeable plastic tarps: it turns your garden bed into an oxygen-deprived marsh that suffocates root systems.',
    keySpecs: [
      { labelFr: 'Grillage anti-campagnols', labelEn: 'Wire mesh gauge', val: 'Maille 13 mm galvanisée' },
      { labelFr: 'Sous-couche carton', labelEn: 'Cardboard layer', val: '2 épaisseurs brunes' }
    ]
  },
  {
    number: 4,
    titleFr: 'Le Terreau Idéal : La Formule "Mélange d\'Or"',
    titleEn: 'The Ideal Soil: The "Golden Potting Mix" Formula',
    shortDescFr: 'La règle des 3 tiers pour un substrat vivant, meuble, riche et parfaitement drainant.',
    shortDescEn: 'The 3-thirds ratio for fertile, loose, nutrient-dense, and moisture-balanced soil.',
    contentFr: [
      'Ne remplissez jamais un potager carré uniquement avec la terre lourde de votre jardin. Un carré potager produit 5 fois plus au mètre carré car son substrat est conçu sur-mesure pour rester meuble, oxygéné et ultra-fertile.',
      'La formule d\'excellence (adaptée de la méthode Mel Bartholomew) se compose de trois tiers volumétriques égaux :',
      '• 1/3 de Compost mûr et diversifié (fumier de cheval décomposé, lombricompost, compost ménager) qui apporte la nourriture biologique complète.',
      '• 1/3 de Fibre de coco réhydratée (ou tourbe blonde certifiée) pour retenir jusqu\'à 8 fois son poids en eau sans compacter.',
      '• 1/3 de Vermiculite horticole expansée (ou perlite / terreau allégé) pour créer des micro-poches d\'air permanentes et favoriser le chevelu racinaire.'
    ],
    contentEn: [
      'Never fill your square raised bed with plain heavy backyard clay. Square foot gardens yield up to five times more per square meter because the soil mix remains continuously airy, friable, and packed with bio-available nutrients.',
      'The gold-standard recipe relies on three equal volume components:',
      '• 1/3 Mature multi-source Compost (worm castings, well-rotted manure, plant compost) to supply rich organic biology.',
      '• 1/3 Coconut coir pith (or peat moss) to retain optimal moisture without compacting.',
      '• 1/3 Coarse horticultural Vermiculite or perlite to maintain permanent aeration channels around root hairs.'
    ],
    proTipFr: 'Une fois préparé, ce substrat ne s\'épuise jamais : chaque printemps, il suffit d\'incorporer une ou deux poignées de compost mûr par carré récolté.',
    proTipEn: 'This soil structure lasts for decades: simply replenish each square with a scoop of fresh rich compost after every harvest.',
    mistakeToAvoidFr: 'Acheter un terreau universel premier prix : pauvre en nutriments, il se tasse en croûte dure dès les premières chaleurs.',
    mistakeToAvoidEn: 'Buying cheap generic potting dirt: it lacks beneficial mycorrhizae and hardens into an impenetrable crust under summer heat.',
    keySpecs: [
      { labelFr: 'Volume pour 120x120x25 cm', labelEn: 'Volume for 120x120x25 cm', val: 'Environ 360 litres' },
      { labelFr: 'Ratio compost / fibre / drainage', labelEn: 'Soil ratio', val: '1/3 - 1/3 - 1/3' }
    ]
  },
  {
    number: 5,
    titleFr: 'Installer le Quadrillage Visible et Structurant',
    titleEn: 'Installing the Physical Grid Dividers',
    shortDescFr: 'Le secret psychologique et pratique du carré : séparer visiblement chaque parcelle de 30x30 cm.',
    shortDescEn: 'The core psychological secret: physically demarcating every 30x30 cm crop zone.',
    contentFr: [
      'Le quadrillage physique est l\'âme même du potager carré. Sans quadrillage, on retombe vite dans le désordre des potagers traditionnels avec des semis trop denses.',
      'Divisez chaque côté de 120 cm en 4 sections régulières de 30 cm. Fixez des lattes de bois fin (tasseaux rabotés de 15 x 20 mm), des tiges de bambou ou de la cordelette imputrescible tendue entre des petits œillets vissés.',
      'Ce quadrillage crée 16 cases autonomes. Chaque case représente une micro-parcelle dédiée à une seule variété ou à une association précise.'
    ],
    contentEn: [
      'The physical grid is the very soul of square foot gardening. Without it, planters slip back into traditional over-seeding and wasted space.',
      'Divide each 120 cm side into four 30 cm marks. Fasten thin cedar or bamboo battens, or stretch heavy-duty nylon twine between stainless eyelets.',
      'This establishes 16 clean compartments. Each compartment becomes a self-contained ecosystem for designated crop quantities.'
    ],
    proTipFr: 'Préférez des lattes rigides vissées aux simples ficelles : elles permettent de poser une planche d\'appui pour travailler au-dessus des plants sans les écraser.',
    proTipEn: 'Fasten wooden battens rather than loose string: they serve as sturdy hand rests when weeding or harvesting delicate shoots.',
    mistakeToAvoidFr: 'Omettre le quadrillage en se disant qu\'on le fera « de tête » : c\'est le piège numéro un qui mène à la surpopulation des légumes.',
    mistakeToAvoidEn: 'Skipping the grid thinking you will manage mentally: ungridded beds quickly turn into congested jungles.',
    keySpecs: [
      { labelFr: 'Nombre total de cases', labelEn: 'Total individual cells', val: '16 carrés' },
      { labelFr: 'Taille par case', labelEn: 'Cell dimension', val: '30 × 30 cm' }
    ]
  },
  {
    number: 6,
    titleFr: 'Plan de Plantation : La Règle des 1, 4, 9, 16 Plants',
    titleEn: 'Planting Matrix: The 1, 4, 9, 16 Plant Density Formula',
    shortDescFr: 'Densité mathématique rigoureuse : combien de légumes loger par carré sans concurrence ?',
    shortDescEn: 'Mathematical spacing: exactly how many plants belong in each 30x30 cm square without competition.',
    contentFr: [
      'La grande magie du potager carré réside dans sa grille de densités infaillible :',
      '• 1 plant par carré : Les grands légumes encombrants (1 Tomate cerise tuteurée, 1 Poivron, 1 Aubergine, 1 Courgette non coureuse en coin, 1 Chou brocoli).',
      '• 4 plants par carré : Les légumes à développement moyen espacés de 15 cm (4 Laitues ou batavias, 4 Bettes à carde, 4 Céleris à côtes, 4 pieds de Persil ou Basilic).',
      '• 9 plants par carré : Les légumes espacés de 10 cm (9 Épinards, 9 Betteraves rouges, 9 Haricots nains, 9 Oignons ou Échalotes).',
      '• 16 plants par carré : Les petits légumes racines espacés de 7,5 cm (16 Carottes, 16 Radis croquants, 16 Ciboulettes en poquets).',
      'Disposez toujours les plantes hautes (tomates, haricots à rames) sur le côté Nord du carré pour qu\'elles ne fassent jamais d\'ombre aux plantes basses (radis, salades) placées au Sud.'
    ],
    contentEn: [
      'The genius of the system is its clear-cut density rule based on adult plant sizes:',
      '• 1 plant per square: Large focal vegetables (1 staked Tomato, 1 Bell Pepper, 1 Eggplant, 1 compact Bush Zucchini, 1 Broccoli).',
      '• 4 plants per square: Medium greens spaced 15 cm apart (4 Head Lettuces, 4 Swiss Chards, 4 Basil clusters, 4 Parsley bunches).',
      '• 9 plants per square: Vegetables spaced 10 cm apart (9 Spinach plants, 9 Beetroots, 9 Bush Beans, 9 Spring Onions).',
      '• 16 plants per square: Compact root vegetables spaced 7.5 cm apart (16 tender Carrots, 16 Radishes, 16 Chive sets).',
      'Always position taller crops (tomatoes, staked climbing peas) along the North side so they never shade smaller companions facing South.'
    ],
    proTipFr: 'Pour les 16 carottes ou radis, tracez 4 lignes de 4 trous réguliers avec la pointe d\'un bouchon de liège ou un gabarit en carton.',
    proTipEn: 'For 16 carots or radishes, press a grid of 4x4 holes with the end of a wine cork or cardboard template for surgical spacing.',
    mistakeToAvoidFr: 'Semer à la volée tout un sachet de graines dans un carré : cela oblige à un éclaircissage fastidieux et gaspille 90% des graines.',
    mistakeToAvoidEn: 'Scattering whole packets of seeds: it triggers painful thinning chores and wastes 90% of your seed budget.',
    keySpecs: [
      { labelFr: 'Densité 1 plant', labelEn: '1-plant density', val: 'Tomate, Poivron, Courgette' },
      { labelFr: 'Densité 4 plants', labelEn: '4-plant density', val: 'Salade, Bette, Basilic' },
      { labelFr: 'Densité 9 plants', labelEn: '9-plant density', val: 'Épinard, Betterave, Haricot' },
      { labelFr: 'Densité 16 plants', labelEn: '16-plant density', val: 'Carotte, Radis' }
    ]
  },
  {
    number: 7,
    titleFr: 'Arrosage Économe, Paillage et Rotation Continue',
    titleEn: 'Water Management, Mulching and Perpetual Rotation',
    shortDescFr: 'Conservez l\'humidité, nourrissez la vie du sol et alternez les familles pour ne jamais épuiser la terre.',
    shortDescEn: 'Conserve moisture, nourish micro-fauna, and rotate vegetable families to keep soil alive forever.',
    contentFr: [
      'Le paillage organique est la règle d\'or absolue : recouvrez chaque centimètre carré de terre nue avec 3 à 5 cm de paillette de lin, de chanvre ou de paille hachée. Ce manteau protecteur réduit les pertes par évaporation de 70%, stoppe la pousse des adventices et garde les racines au frais en pleine canicule.',
      'Pour l\'arrosage, installez une Oya (jarre en argile microporeuse de 1,5 à 3 litres) enterrée au centre de 4 carrés, ou arrosez doucement au goulot directement au pied des plants le matin tôt. Ne mouillez jamais le feuillage des tomates pour bannir le mildiou.',
      'Pratiquez la rotation des cultures en cycle de 4 temps dans chaque case : Légume-fruit gourmand (Tomate/Courgette) -> Légume-racine (Carotte/Betterave) -> Légume-feuille (Salade/Épinard) -> Légumineuse fixatrice d\'azote (Pois/Haricots).'
    ],
    contentEn: [
      'Organic mulching is non-negotiable: blanket every square with 3 to 5 cm of chopped flax straw, hemp shives, or clean dry leaves. This cuts evaporation by 70% and prevents hard soil crusting.',
      'For watering, bury an unglazed terra-cotta Olla jug at the intersection of 4 squares, or water manually at ground level during early morning hours. Never wet foliage to protect against fungal blights.',
      'Adopt a 4-year rotational sequence in every square: Heavy-feeding Fruit crops -> Root vegetables -> Leafy greens -> Nitrogen-fixing Legumes (beans, peas).'
    ],
    proTipFr: 'Plantez des œillets d\'Inde et du basilic dans deux petits coins de votre carré : leurs racines émettent des substances nématicides et leur parfum déroute les pucerons.',
    proTipEn: 'Tuck French Marigolds (œillet d\'Inde) into corner squares: their roots exude natural nematicides while blooming attracts pollinators.',
    mistakeToAvoidFr: 'Arroser en plein midi au jet d\'eau : l\'effet loupe brûle les feuilles et 50% de l\'eau s\'évapore avant de toucher les racines.',
    mistakeToAvoidEn: 'Overhead watering under blazing midday sun: droplets cause leaf scorch and half the moisture evaporates instantly.',
    keySpecs: [
      { labelFr: 'Économie d\'eau avec paillis', labelEn: 'Water saved by mulching', val: '-70% d\'arrosage' },
      { labelFr: 'Cycle de rotation', labelEn: 'Crop rotation cycle', val: 'Fruits > Racines > Feuilles > Légumineuses' }
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    questionFr: 'Quelle est la dimension exacte d\'un potager carré classique ?',
    questionEn: 'What are the exact dimensions of a standard square foot garden?',
    answerFr: 'La dimension universelle est de 120 cm sur 120 cm (1,44 m²). Elle est compartimentée en 16 carrés égaux de 30 cm x 30 cm. La hauteur standard est de 20 à 30 cm en pleine terre, et de 40 à 50 cm surélevé pour un confort de travail optimal.',
    answerEn: 'The international standard is 120 cm by 120 cm (1.44 m²), divided into 16 equal 30x30 cm grids. Standard depth is 20 to 30 cm over garden soil, and 40 to 50 cm when elevated for ergonomic gardening.'
  },
  {
    questionFr: 'Quel est le meilleur bois pour fabriquer un carré potager durable ?',
    questionEn: 'Which wood is best for building a long-lasting raised garden bed?',
    answerFr: 'Le mélèze, le douglas, le châtaignier et le chêne sont les essences reines en France : ce sont des bois naturellement imputrescibles de classe 3 ou 4. Ils ne nécessitent aucun produit chimique toxique et durent entre 7 et 15 ans selon l\'épaisseur (choisir au moins 22 à 28 mm).',
    answerEn: 'Larch, Douglas fir, Chestnut, and Oak are premier choices: naturally Class 3 or 4 rot-resistant hardwoods. They require no toxic preservatives and resist decay for 7 to 15+ years when choosing 22-28 mm thickness.'
  },
  {
    questionFr: 'Combien de légumes peut-on récolter dans un potager carré de 16 cases ?',
    questionEn: 'How much can you harvest from a single 16-square garden bed?',
    answerFr: 'Un carré bien géré produit l\'équivalent de la consommation en légumes frais et aromates pour 1 à 2 personnes sur toute la belle saison : jusqu\'à 15 à 20 kg de récoltes cumulées (salades croquantes régulières, tomates cerises, radis hebdomadaires, carottes tendres et herbes aromatiques fraîches).',
    answerEn: 'A well-managed 16-cell bed supplies fresh organic greens, crunchy roots, and herbs for 1-2 adults all season long, yielding 15 to 20 kg of fresh seasonal produce through intensive succession planting.'
  },
  {
    questionFr: 'Faut-il changer la terre de son potager carré chaque année ?',
    questionEn: 'Do you need to replace the soil in a square foot garden every year?',
    answerFr: 'Non, jamais ! Grâce au mélange à base de compost, vermiculite et fibre de coco, la structure physique ne s\'altère pas. Il vous suffit d\'ajouter une à deux pelletées de compost mûr par carré à chaque nouvelle plantation pour reconstituer les réserves nutritives.',
    answerEn: 'No, never! Thanks to the structured tri-mix of compost, vermiculite, and coconut coir, the physical soil texture remains stable. Simply fold in one or two scoops of rich homemade compost into harvested cells before replanting.'
  },
  {
    questionFr: 'Peut-on installer un potager carré sur un balcon ou une terrasse en ville ?',
    questionEn: 'Can you install a square foot garden on an urban balcony or rooftop?',
    answerFr: 'Absolument ! Veillez simplement à ce que le balcon supporte la charge (comptez environ 150 à 250 kg pour un carré de 120x120 humidifié). Utilisez un carré potager sur pieds ou installez un feutre géotextile étanche aux particules au fond pour préserver le carrelage.',
    answerEn: 'Absolutely! Verify your balcony load capacity (expect 150 to 250 kg for a watered 120x120 cm box). Opt for an elevated model on sturdy legs or line the bottom with heavy-duty geotextile to keep tiles clean.'
  }
];

export const CALENDAR_SEASONS = [
  {
    seasonFr: 'Printemps (Mars - Mai)',
    seasonEn: 'Spring (March - May)',
    icon: '🌸',
    color: 'border-emerald-200 bg-emerald-50/50',
    actionsFr: [
      'Ameublir la surface au râteau et ajouter 1 pelletée de compost par carré.',
      'Semis sous abri ou en place : radis, carottes hâtives, petits pois, épinards.',
      'Après les saints de glace (mi-mai) : repiquage des tomates, poivrons, courgettes et basilic.'
    ],
    actionsEn: [
      'Lightly loosen the top surface and enrich each square with fresh compost.',
      'Direct sow early cool-weather crops: radishes, early carrots, sugar peas, spinach.',
      'After the last frost date: transplant heat lovers like tomatoes, peppers, basil, and zucchini.'
    ]
  },
  {
    seasonFr: 'Été (Juin - Août)',
    seasonEn: 'Summer (June - August)',
    icon: '☀️',
    color: 'border-amber-200 bg-amber-50/50',
    actionsFr: [
      'Renouveler le paillage pour conserver la fraîcheur du sol.',
      'Arrosage régulier tôt le matin ou installation d\'oyas.',
      'Récolte continue des tomates cerises, salades feuille à feuille et haricots nains.',
      'Semis des légumes d\'automne dès qu\'un carré se libère (radis noirs, navets, mâche).'
    ],
    actionsEn: [
      'Replenish mulch layer to 5 cm to protect soil against harsh midday heat.',
      'Water deeply at root level in early morning or fill central clay ollas.',
      'Continuous daily harvests of cherry tomatoes, leaf lettuce, and crisp green beans.',
      'Succession sow fall crops as soon as squares clear out (winter radishes, corn salad).'
    ]
  },
  {
    seasonFr: 'Automne (Septembre - Novembre)',
    seasonEn: 'Autumn (September - November)',
    icon: '🍂',
    color: 'border-orange-200 bg-orange-50/50',
    actionsFr: [
      'Semis de mâche, roquette d\'hiver et épinards rustiques.',
      'Plantation des bulbilles d\'ail d\'hiver et d\'échalotes.',
      'Couverture des carrés avec des feuilles mortes ou un engrais vert (moutarde, trèfle incarnat).'
    ],
    actionsEn: [
      'Sow winter greens: corn salad (mâche), winter rocket, and cold-hardy spinach.',
      'Plant cloves of winter garlic and shallots for early spring awakening.',
      'Protect empty winter squares under clean leaf mulch or sow cover crops (clover, phacelia).'
    ]
  },
  {
    seasonFr: 'Hiver (Décembre - Février)',
    seasonEn: 'Winter (December - February)',
    icon: '❄️',
    color: 'border-blue-200 bg-blue-50/50',
    actionsFr: [
      'Protection des cultures restantes sous voile d\'hivernage ou mini-serre châssis.',
      'Nettoyage et désinfection à l\'alcool des tuteurs et des outils.',
      'Planification sur papier ou simulateur des 16 carrés pour la saison suivante.'
    ],
    actionsEn: [
      'Protect remaining cold greens under mini-tunnels or breathable fleece blankets.',
      'Clean, sanitize, and oil garden shears, stakes, and hand trowels.',
      'Plan crop rotations and seed orders on your digital 4x4 planner for spring.'
    ]
  }
];
