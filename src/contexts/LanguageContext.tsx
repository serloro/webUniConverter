import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.subtitle': 'Universal Unit Converter',
    'nav.categories': 'Categories',
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.technology': 'Technology',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Convert Everything',
    'hero.title.line2': 'Instantly & Accurately',
    'hero.subtitle': 'The ultimate unit conversion app built with React Native and Expo. Convert between currencies, measurements, sizes, and technical units across 10+ categories with modern design and offline capability.',
    'hero.cta.explore': 'Explore Categories',
    'hero.cta.github': 'View on GitHub',
    
    // Categories Section
    'categories.title': 'Conversion Categories',
    'categories.subtitle': 'Organized by purpose for quick access to the conversions you need most.',
    'categories.tap_to_convert': 'Tap to convert',
    'categories.finance.title': 'Finance & Time',
    'categories.finance.description': 'Currencies, time zones, loans',
    'categories.physical.title': 'Physical Measures',
    'categories.physical.description': 'Length, weight, temperature',
    'categories.packaging.title': 'Packaging & Commerce',
    'categories.packaging.description': 'Pieces, boxes, pallets',
    'categories.sizes.title': 'Sizes & Personal',
    'categories.sizes.description': 'Clothing, shoes, rings',
    'categories.digital.title': 'Digital & Technical',
    'categories.digital.description': 'Data, networks, systems',
    'categories.physics.title': 'Physics & Science',
    'categories.physics.description': 'Energy, force, pressure',
    'categories.music.title': 'Music & Audio',
    'categories.music.description': 'Notes, frequencies, BPM',
    'categories.gaming.title': 'Gaming & Hardware',
    'categories.gaming.description': 'DPI, FPS, performance',
    'categories.education.title': 'Education & Culture',
    'categories.education.description': 'Grades, credits, coordinates',
    'categories.health.title': 'Health & Sports',
    'categories.health.description': 'BMI, calories, heart rate',
    
    // Features Section
    'features.title': 'Powerful Features',
    'features.subtitle': 'Everything you need for accurate, fast conversions in a beautiful mobile interface.',
    'features.realtime.title': 'Real-time Data',
    'features.realtime.description': 'Live currency rates, timezone data, and market information through reliable APIs.',
    'features.offline.title': 'Lightning Fast',
    'features.offline.description': 'Most conversions work offline with instant calculations for maximum speed and reliability.',
    'features.mobile.title': 'Mobile Optimized',
    'features.mobile.description': 'Built with React Native and Expo for native performance across iOS and Android.',
    
    // Demo Section
    'demo.title': 'See It in Action',
    'demo.subtitle': 'Experience UniConvert with 10+ conversion categories including finance, measurements, clothing sizes, technical units, and specialized conversions.',
    'demo.feature1': '10+ conversion categories',
    'demo.feature2': 'Real-time currency & timezone data',
    'demo.feature3': 'Offline calculations for speed',
    'demo.feature4': 'International size charts included',
    'demo.cta': 'Download Now',
    'demo.converting': 'Converting...',
    'demo.from': 'From',
    'demo.to': 'To',
    
    // Technology Section
    'tech.title': 'Modern Mobile Technology',
    'tech.subtitle': 'Built with cutting-edge mobile development tools for native performance and cross-platform compatibility.',
    'tech.reactnative': 'Cross-platform mobile framework',
    'tech.expo': 'Development and deployment platform',
    'tech.typescript': 'Type-safe development',
    'tech.apis': 'Real-time data integration',
    
    // CTA Section
    'cta.title': 'Ready to Convert Everything?',
    'cta.subtitle': 'Join thousands of users who rely on UniConvert for quick, accurate conversions in their daily work and life.',
    'cta.primary': 'Download UniConvert',
    'cta.secondary': 'View Source Code',
    
    // Footer
    'footer.tagline': 'Universal Unit Converter',
    'footer.copyright': '© 2024 UniConvert. Built with ❤️ by Sergio L.',
  },
  fr: {
    // Navigation
    'nav.subtitle': 'Convertisseur d\'Unités Universel',
    'nav.categories': 'Catégories',
    'nav.features': 'Fonctionnalités',
    'nav.demo': 'Démo',
    'nav.technology': 'Technologie',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Convertissez Tout',
    'hero.title.line2': 'Instantanément et Précisément',
    'hero.subtitle': 'L\'application ultime de conversion d\'unités construite avec React Native et Expo. Convertissez entre devises, mesures, tailles et unités techniques dans plus de 10 catégories avec un design moderne et des capacités hors ligne.',
    'hero.cta.explore': 'Explorer les Catégories',
    'hero.cta.github': 'Voir sur GitHub',
    
    // Categories Section
    'categories.title': 'Catégories de Conversion',
    'categories.subtitle': 'Organisées par objectif pour un accès rapide aux conversions dont vous avez le plus besoin.',
    'categories.tap_to_convert': 'Appuyez pour convertir',
    'categories.finance.title': 'Finance et Temps',
    'categories.finance.description': 'Devises, fuseaux horaires, prêts',
    'categories.physical.title': 'Mesures Physiques',
    'categories.physical.description': 'Longueur, poids, température',
    'categories.packaging.title': 'Emballage et Commerce',
    'categories.packaging.description': 'Pièces, boîtes, palettes',
    'categories.sizes.title': 'Tailles et Personnel',
    'categories.sizes.description': 'Vêtements, chaussures, bagues',
    'categories.digital.title': 'Numérique et Technique',
    'categories.digital.description': 'Données, réseaux, systèmes',
    'categories.physics.title': 'Physique et Science',
    'categories.physics.description': 'Énergie, force, pression',
    'categories.music.title': 'Musique et Audio',
    'categories.music.description': 'Notes, fréquences, BPM',
    'categories.gaming.title': 'Gaming et Matériel',
    'categories.gaming.description': 'DPI, FPS, performance',
    'categories.education.title': 'Éducation et Culture',
    'categories.education.description': 'Notes, crédits, coordonnées',
    'categories.health.title': 'Santé et Sport',
    'categories.health.description': 'IMC, calories, rythme cardiaque',
    
    // Features Section
    'features.title': 'Fonctionnalités Puissantes',
    'features.subtitle': 'Tout ce dont vous avez besoin pour des conversions précises et rapides dans une belle interface mobile.',
    'features.realtime.title': 'Données en Temps Réel',
    'features.realtime.description': 'Taux de change en direct, données de fuseaux horaires et informations de marché via des APIs fiables.',
    'features.offline.title': 'Ultra Rapide',
    'features.offline.description': 'La plupart des conversions fonctionnent hors ligne avec des calculs instantanés pour une vitesse et fiabilité maximales.',
    'features.mobile.title': 'Optimisé Mobile',
    'features.mobile.description': 'Construit avec React Native et Expo pour des performances natives sur iOS et Android.',
    
    // Demo Section
    'demo.title': 'Voyez-le en Action',
    'demo.subtitle': 'Découvrez UniConvert avec plus de 10 catégories de conversion incluant finance, mesures, tailles de vêtements, unités techniques et conversions spécialisées.',
    'demo.feature1': 'Plus de 10 catégories de conversion',
    'demo.feature2': 'Données de devises et fuseaux horaires en temps réel',
    'demo.feature3': 'Calculs hors ligne pour la rapidité',
    'demo.feature4': 'Tableaux de tailles internationaux inclus',
    'demo.cta': 'Télécharger Maintenant',
    'demo.converting': 'Conversion...',
    'demo.from': 'De',
    'demo.to': 'Vers',
    
    // Technology Section
    'tech.title': 'Technologie Mobile Moderne',
    'tech.subtitle': 'Construit avec des outils de développement mobile de pointe pour des performances natives et une compatibilité multiplateforme.',
    'tech.reactnative': 'Framework mobile multiplateforme',
    'tech.expo': 'Plateforme de développement et déploiement',
    'tech.typescript': 'Développement type-safe',
    'tech.apis': 'Intégration de données en temps réel',
    
    // CTA Section
    'cta.title': 'Prêt à Tout Convertir?',
    'cta.subtitle': 'Rejoignez des milliers d\'utilisateurs qui comptent sur UniConvert pour des conversions rapides et précises dans leur travail et leur vie quotidienne.',
    'cta.primary': 'Télécharger UniConvert',
    'cta.secondary': 'Voir le Code Source',
    
    // Footer
    'footer.tagline': 'Convertisseur d\'Unités Universel',
    'footer.copyright': '© 2024 UniConvert. Fait avec ❤️ par Sergio L.',
  },
  de: {
    // Navigation
    'nav.subtitle': 'Universeller Einheitenkonverter',
    'nav.categories': 'Kategorien',
    'nav.features': 'Funktionen',
    'nav.demo': 'Demo',
    'nav.technology': 'Technologie',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Konvertiere Alles',
    'hero.title.line2': 'Sofort & Präzise',
    'hero.subtitle': 'Die ultimative Einheitenkonverter-App, gebaut mit React Native und Expo. Konvertiere zwischen Währungen, Maßeinheiten, Größen und technischen Einheiten in über 10 Kategorien mit modernem Design und Offline-Funktionalität.',
    'hero.cta.explore': 'Kategorien Erkunden',
    'hero.cta.github': 'Auf GitHub Ansehen',
    
    // Categories Section
    'categories.title': 'Konvertierungskategorien',
    'categories.subtitle': 'Nach Zweck organisiert für schnellen Zugriff auf die Konvertierungen, die Sie am meisten benötigen.',
    'categories.tap_to_convert': 'Tippen zum Konvertieren',
    'categories.finance.title': 'Finanzen & Zeit',
    'categories.finance.description': 'Währungen, Zeitzonen, Darlehen',
    'categories.physical.title': 'Physikalische Maße',
    'categories.physical.description': 'Länge, Gewicht, Temperatur',
    'categories.packaging.title': 'Verpackung & Handel',
    'categories.packaging.description': 'Stücke, Kartons, Paletten',
    'categories.sizes.title': 'Größen & Persönlich',
    'categories.sizes.description': 'Kleidung, Schuhe, Ringe',
    'categories.digital.title': 'Digital & Technisch',
    'categories.digital.description': 'Daten, Netzwerke, Systeme',
    'categories.physics.title': 'Physik & Wissenschaft',
    'categories.physics.description': 'Energie, Kraft, Druck',
    'categories.music.title': 'Musik & Audio',
    'categories.music.description': 'Noten, Frequenzen, BPM',
    'categories.gaming.title': 'Gaming & Hardware',
    'categories.gaming.description': 'DPI, FPS, Leistung',
    'categories.education.title': 'Bildung & Kultur',
    'categories.education.description': 'Noten, Credits, Koordinaten',
    'categories.health.title': 'Gesundheit & Sport',
    'categories.health.description': 'BMI, Kalorien, Herzfrequenz',
    
    // Features Section
    'features.title': 'Mächtige Funktionen',
    'features.subtitle': 'Alles was Sie für genaue, schnelle Konvertierungen in einer schönen mobilen Oberfläche benötigen.',
    'features.realtime.title': 'Echtzeit-Daten',
    'features.realtime.description': 'Live-Wechselkurse, Zeitzonendaten und Marktinformationen über zuverlässige APIs.',
    'features.offline.title': 'Blitzschnell',
    'features.offline.description': 'Die meisten Konvertierungen funktionieren offline mit sofortigen Berechnungen für maximale Geschwindigkeit und Zuverlässigkeit.',
    'features.mobile.title': 'Mobil Optimiert',
    'features.mobile.description': 'Gebaut mit React Native und Expo für native Performance auf iOS und Android.',
    
    // Demo Section
    'demo.title': 'Sieh es in Aktion',
    'demo.subtitle': 'Erlebe UniConvert mit über 10 Konvertierungskategorien einschließlich Finanzen, Messungen, Kleidungsgrößen, technische Einheiten und spezialisierte Konvertierungen.',
    'demo.feature1': 'Über 10 Konvertierungskategorien',
    'demo.feature2': 'Echtzeit-Währungs- und Zeitzonendaten',
    'demo.feature3': 'Offline-Berechnungen für Geschwindigkeit',
    'demo.feature4': 'Internationale Größentabellen enthalten',
    'demo.cta': 'Jetzt Herunterladen',
    'demo.converting': 'Konvertierung...',
    'demo.from': 'Von',
    'demo.to': 'Nach',
    
    // Technology Section
    'tech.title': 'Moderne Mobile Technologie',
    'tech.subtitle': 'Gebaut mit modernsten mobilen Entwicklungstools für native Performance und plattformübergreifende Kompatibilität.',
    'tech.reactnative': 'Plattformübergreifendes mobiles Framework',
    'tech.expo': 'Entwicklungs- und Deployment-Plattform',
    'tech.typescript': 'Typsichere Entwicklung',
    'tech.apis': 'Echtzeit-Datenintegration',
    
    // CTA Section
    'cta.title': 'Bereit, Alles zu Konvertieren?',
    'cta.subtitle': 'Schließe dich Tausenden von Nutzern an, die auf UniConvert für schnelle, genaue Konvertierungen in ihrer täglichen Arbeit und ihrem Leben vertrauen.',
    'cta.primary': 'UniConvert Herunterladen',
    'cta.secondary': 'Quellcode Ansehen',
    
    // Footer
    'footer.tagline': 'Universeller Einheitenkonverter',
    'footer.copyright': '© 2024 UniConvert. Mit ❤️ von Sergio L. gemacht.',
  },
  it: {
    // Navigation
    'nav.subtitle': 'Convertitore di Unità Universale',
    'nav.categories': 'Categorie',
    'nav.features': 'Funzionalità',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnologia',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Converti Tutto',
    'hero.title.line2': 'Istantaneamente e Accuratamente',
    'hero.subtitle': 'L\'app definitiva per la conversione di unità costruita con React Native ed Expo. Converti tra valute, misure, taglie e unità tecniche in oltre 10 categorie con design moderno e capacità offline.',
    'hero.cta.explore': 'Esplora Categorie',
    'hero.cta.github': 'Vedi su GitHub',
    
    // Categories Section
    'categories.title': 'Categorie di Conversione',
    'categories.subtitle': 'Organizzate per scopo per accesso rapido alle conversioni di cui hai più bisogno.',
    'categories.tap_to_convert': 'Tocca per convertire',
    'categories.finance.title': 'Finanza e Tempo',
    'categories.finance.description': 'Valute, fusi orari, prestiti',
    'categories.physical.title': 'Misure Fisiche',
    'categories.physical.description': 'Lunghezza, peso, temperatura',
    'categories.packaging.title': 'Imballaggio e Commercio',
    'categories.packaging.description': 'Pezzi, scatole, pallet',
    'categories.sizes.title': 'Taglie e Personale',
    'categories.sizes.description': 'Abbigliamento, scarpe, anelli',
    'categories.digital.title': 'Digitale e Tecnico',
    'categories.digital.description': 'Dati, reti, sistemi',
    'categories.physics.title': 'Fisica e Scienza',
    'categories.physics.description': 'Energia, forza, pressione',
    'categories.music.title': 'Musica e Audio',
    'categories.music.description': 'Note, frequenze, BPM',
    'categories.gaming.title': 'Gaming e Hardware',
    'categories.gaming.description': 'DPI, FPS, prestazioni',
    'categories.education.title': 'Educazione e Cultura',
    'categories.education.description': 'Voti, crediti, coordinate',
    'categories.health.title': 'Salute e Sport',
    'categories.health.description': 'BMI, calorie, frequenza cardiaca',
    
    // Features Section
    'features.title': 'Funzionalità Potenti',
    'features.subtitle': 'Tutto ciò di cui hai bisogno per conversioni accurate e veloci in una bella interfaccia mobile.',
    'features.realtime.title': 'Dati in Tempo Reale',
    'features.realtime.description': 'Tassi di cambio live, dati di fuso orario e informazioni di mercato tramite API affidabili.',
    'features.offline.title': 'Veloce come un Fulmine',
    'features.offline.description': 'La maggior parte delle conversioni funziona offline con calcoli istantanei per massima velocità e affidabilità.',
    'features.mobile.title': 'Ottimizzato Mobile',
    'features.mobile.description': 'Costruito con React Native ed Expo per prestazioni native su iOS e Android.',
    
    // Demo Section
    'demo.title': 'Guardalo in Azione',
    'demo.subtitle': 'Sperimenta UniConvert con oltre 10 categorie di conversione incluse finanza, misure, taglie di abbigliamento, unità tecniche e conversioni specializzate.',
    'demo.feature1': 'Oltre 10 categorie di conversione',
    'demo.feature2': 'Dati di valuta e fuso orario in tempo reale',
    'demo.feature3': 'Calcoli offline per velocità',
    'demo.feature4': 'Tabelle taglie internazionali incluse',
    'demo.cta': 'Scarica Ora',
    'demo.converting': 'Conversione...',
    'demo.from': 'Da',
    'demo.to': 'A',
    
    // Technology Section
    'tech.title': 'Tecnologia Mobile Moderna',
    'tech.subtitle': 'Costruito con strumenti di sviluppo mobile all\'avanguardia per prestazioni native e compatibilità multipiattaforma.',
    'tech.reactnative': 'Framework mobile multipiattaforma',
    'tech.expo': 'Piattaforma di sviluppo e deployment',
    'tech.typescript': 'Sviluppo type-safe',
    'tech.apis': 'Integrazione dati in tempo reale',
    
    // CTA Section
    'cta.title': 'Pronto a Convertire Tutto?',
    'cta.subtitle': 'Unisciti a migliaia di utenti che si affidano a UniConvert per conversioni rapide e accurate nel loro lavoro quotidiano e nella vita.',
    'cta.primary': 'Scarica UniConvert',
    'cta.secondary': 'Vedi Codice Sorgente',
    
    // Footer
    'footer.tagline': 'Convertitore di Unità Universale',
    'footer.copyright': '© 2024 UniConvert. Fatto con ❤️ da Sergio L.',
  },
  pt: {
    // Navigation
    'nav.subtitle': 'Conversor de Unidades Universal',
    'nav.categories': 'Categorias',
    'nav.features': 'Recursos',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnologia',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Converta Tudo',
    'hero.title.line2': 'Instantaneamente e Precisamente',
    'hero.subtitle': 'O app definitivo de conversão de unidades construído com React Native e Expo. Converta entre moedas, medidas, tamanhos e unidades técnicas em mais de 10 categorias com design moderno e capacidade offline.',
    'hero.cta.explore': 'Explorar Categorias',
    'hero.cta.github': 'Ver no GitHub',
    
    // Categories Section
    'categories.title': 'Categorias de Conversão',
    'categories.subtitle': 'Organizadas por propósito para acesso rápido às conversões que você mais precisa.',
    'categories.tap_to_convert': 'Toque para converter',
    'categories.finance.title': 'Finanças e Tempo',
    'categories.finance.description': 'Moedas, fusos horários, empréstimos',
    'categories.physical.title': 'Medidas Físicas',
    'categories.physical.description': 'Comprimento, peso, temperatura',
    'categories.packaging.title': 'Embalagem e Comércio',
    'categories.packaging.description': 'Peças, caixas, paletes',
    'categories.sizes.title': 'Tamanhos e Pessoal',
    'categories.sizes.description': 'Roupas, sapatos, anéis',
    'categories.digital.title': 'Digital e Técnico',
    'categories.digital.description': 'Dados, redes, sistemas',
    'categories.physics.title': 'Física e Ciência',
    'categories.physics.description': 'Energia, força, pressão',
    'categories.music.title': 'Música e Áudio',
    'categories.music.description': 'Notas, frequências, BPM',
    'categories.gaming.title': 'Gaming e Hardware',
    'categories.gaming.description': 'DPI, FPS, performance',
    'categories.education.title': 'Educação e Cultura',
    'categories.education.description': 'Notas, créditos, coordenadas',
    'categories.health.title': 'Saúde e Esporte',
    'categories.health.description': 'IMC, calorias, frequência cardíaca',
    
    // Features Section
    'features.title': 'Recursos Poderosos',
    'features.subtitle': 'Tudo que você precisa para conversões precisas e rápidas em uma bela interface mobile.',
    'features.realtime.title': 'Dados em Tempo Real',
    'features.realtime.description': 'Taxas de câmbio ao vivo, dados de fuso horário e informações de mercado através de APIs confiáveis.',
    'features.offline.title': 'Rápido como um Raio',
    'features.offline.description': 'A maioria das conversões funciona offline com cálculos instantâneos para máxima velocidade e confiabilidade.',
    'features.mobile.title': 'Otimizado para Mobile',
    'features.mobile.description': 'Construído com React Native e Expo para performance nativa no iOS e Android.',
    
    // Demo Section
    'demo.title': 'Veja em Ação',
    'demo.subtitle': 'Experimente o UniConvert com mais de 10 categorias de conversão incluindo finanças, medidas, tamanhos de roupas, unidades técnicas e conversões especializadas.',
    'demo.feature1': 'Mais de 10 categorias de conversão',
    'demo.feature2': 'Dados de moeda e fuso horário em tempo real',
    'demo.feature3': 'Cálculos offline para velocidade',
    'demo.feature4': 'Tabelas de tamanhos internacionais incluídas',
    'demo.cta': 'Baixar Agora',
    'demo.converting': 'Convertendo...',
    'demo.from': 'De',
    'demo.to': 'Para',
    
    // Technology Section
    'tech.title': 'Tecnologia Mobile Moderna',
    'tech.subtitle': 'Construído com ferramentas de desenvolvimento mobile de ponta para performance nativa e compatibilidade multiplataforma.',
    'tech.reactnative': 'Framework mobile multiplataforma',
    'tech.expo': 'Plataforma de desenvolvimento e deployment',
    'tech.typescript': 'Desenvolvimento type-safe',
    'tech.apis': 'Integração de dados em tempo real',
    
    // CTA Section
    'cta.title': 'Pronto para Converter Tudo?',
    'cta.subtitle': 'Junte-se a milhares de usuários que confiam no UniConvert para conversões rápidas e precisas em seu trabalho diário e vida.',
    'cta.primary': 'Baixar UniConvert',
    'cta.secondary': 'Ver Código Fonte',
    
    // Footer
    'footer.tagline': 'Conversor de Unidades Universal',
    'footer.copyright': '© 2024 UniConvert. Feito com ❤️ por Sergio L.',
  },
  es: {
    // Navigation
    'nav.subtitle': 'Conversor de Unidades Universal',
    'nav.categories': 'Categorías',
    'nav.features': 'Características',
    'nav.demo': 'Demo',
    'nav.technology': 'Tecnología',
    'nav.github': 'GitHub',
    
    // Hero Section
    'hero.title.line1': 'Convierte Todo',
    'hero.title.line2': 'Al Instante y con Precisión',
    'hero.subtitle': 'La aplicación definitiva de conversión de unidades construida con React Native y Expo. Convierte entre divisas, medidas, tallas y unidades técnicas en más de 10 categorías con diseño moderno y capacidad offline.',
    'hero.cta.explore': 'Explorar Categorías',
    'hero.cta.github': 'Ver en GitHub',
    
    // Categories Section
    'categories.title': 'Categorías de Conversión',
    'categories.subtitle': 'Organizadas por propósito para acceso rápido a las conversiones que más necesitas.',
    'categories.tap_to_convert': 'Toca para convertir',
    'categories.finance.title': 'Finanzas y Tiempo',
    'categories.finance.description': 'Divisas, zonas horarias, préstamos',
    'categories.physical.title': 'Medidas Físicas',
    'categories.physical.description': 'Longitud, peso, temperatura',
    'categories.packaging.title': 'Empaque y Comercio',
    'categories.packaging.description': 'Piezas, cajas, pallets',
    'categories.sizes.title': 'Tallas y Personal',
    'categories.sizes.description': 'Ropa, zapatos, anillos',
    'categories.digital.title': 'Digital y Técnico',
    'categories.digital.description': 'Datos, redes, sistemas',
    'categories.physics.title': 'Física y Ciencia',
    'categories.physics.description': 'Energía, fuerza, presión',
    'categories.music.title': 'Música y Audio',
    'categories.music.description': 'Notas, frecuencias, BPM',
    'categories.gaming.title': 'Gaming y Hardware',
    'categories.gaming.description': 'DPI, FPS, rendimiento',
    'categories.education.title': 'Educación y Cultura',
    'categories.education.description': 'Calificaciones, créditos, coordenadas',
    'categories.health.title': 'Salud y Deporte',
    'categories.health.description': 'IMC, calorías, frecuencia cardíaca',
    
    // Features Section
    'features.title': 'Características Poderosas',
    'features.subtitle': 'Todo lo que necesitas para conversiones precisas y rápidas en una hermosa interfaz móvil.',
    'features.realtime.title': 'Datos en Tiempo Real',
    'features.realtime.description': 'Tipos de cambio en vivo, datos de zonas horarias e información de mercado a través de APIs confiables.',
    'features.offline.title': 'Rápido como un Rayo',
    'features.offline.description': 'La mayoría de conversiones funcionan sin conexión con cálculos instantáneos para máxima velocidad y confiabilidad.',
    'features.mobile.title': 'Optimizado para Móvil',
    'features.mobile.description': 'Construido con React Native y Expo para rendimiento nativo en iOS y Android.',
    
    // Demo Section
    'demo.title': 'Míralo en Acción',
    'demo.subtitle': 'Experimenta UniConvert con más de 10 categorías de conversión incluyendo finanzas, medidas, tallas de ropa, unidades técnicas y conversiones especializadas.',
    'demo.feature1': 'Más de 10 categorías de conversión',
    'demo.feature2': 'Datos de divisas y zonas horarias en tiempo real',
    'demo.feature3': 'Cálculos sin conexión para velocidad',
    'demo.feature4': 'Tablas de tallas internacionales incluidas',
    'demo.cta': 'Descargar Ahora',
    'demo.converting': 'Convirtiendo...',
    'demo.from': 'De',
    'demo.to': 'A',
    
    // Technology Section
    'tech.title': 'Tecnología Móvil Moderna',
    'tech.subtitle': 'Construido con herramientas de desarrollo móvil de vanguardia para rendimiento nativo y compatibilidad multiplataforma.',
    'tech.reactnative': 'Framework móvil multiplataforma',
    'tech.expo': 'Plataforma de desarrollo y despliegue',
    'tech.typescript': 'Desarrollo con tipos seguros',
    'tech.apis': 'Integración de datos en tiempo real',
    
    // CTA Section
    'cta.title': '¿Listo para Convertir Todo?',
    'cta.subtitle': 'Únete a miles de usuarios que confían en UniConvert para conversiones rápidas y precisas en su trabajo diario y vida.',
    'cta.primary': 'Descargar UniConvert',
    'cta.secondary': 'Ver Código Fuente',
    
    // Footer
    'footer.tagline': 'Conversor de Unidades Universal',
    'footer.copyright': '© 2024 UniConvert. Hecho con ❤️ por Sergio L.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};