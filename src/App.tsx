import { useEffect, useState } from 'react';
import { Calculator, Smartphone, Zap, Github, ExternalLink, ChevronDown, DollarSign, Ruler, Package, Shirt, HardDrive, Atom, Music, Gamepad2, GraduationCap, Heart, Clock, Monitor, Coins, Globe, CreditCard, Scale, Thermometer, Move, Box, Truck, Palette, Wifi, Database, Server, Zap as Lightning, Gauge, Headphones, Target, Trophy, MapPin, Activity, Dumbbell } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState({
    hero: true,
    categories: false,
    features: false,
    demo: false,
    tech: false,
    cta: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['hero', 'categories', 'features', 'demo', 'tech', 'cta'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t('categories.finance.title'),
      description: t('categories.finance.description'),
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      delay: 'delay-100',
      subcategories: [
        { icon: <Coins className="w-4 h-4" />, name: 'Currencies' },
        { icon: <Globe className="w-4 h-4" />, name: 'Time zones' },
        { icon: <CreditCard className="w-4 h-4" />, name: 'Loans' }
      ]
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: t('categories.physical.title'),
      description: t('categories.physical.description'),
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      delay: 'delay-200',
      subcategories: [
        { icon: <Move className="w-4 h-4" />, name: 'Length' },
        { icon: <Scale className="w-4 h-4" />, name: 'Weight' },
        { icon: <Thermometer className="w-4 h-4" />, name: 'Temperature' }
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: t('categories.packaging.title'),
      description: t('categories.packaging.description'),
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      delay: 'delay-300',
      subcategories: [
        { icon: <Box className="w-4 h-4" />, name: 'Pieces' },
        { icon: <Package className="w-4 h-4" />, name: 'Boxes' },
        { icon: <Truck className="w-4 h-4" />, name: 'Pallets' }
      ]
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: t('categories.sizes.title'),
      description: t('categories.sizes.description'),
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/20',
      delay: 'delay-400',
      subcategories: [
        { icon: <Shirt className="w-4 h-4" />, name: 'Clothing' },
        { icon: <Palette className="w-4 h-4" />, name: 'Shoes' },
        { icon: <Heart className="w-4 h-4" />, name: 'Rings' }
      ]
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t('categories.digital.title'),
      description: t('categories.digital.description'),
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      delay: 'delay-500',
      subcategories: [
        { icon: <Database className="w-4 h-4" />, name: 'Data' },
        { icon: <Wifi className="w-4 h-4" />, name: 'Networks' },
        { icon: <Server className="w-4 h-4" />, name: 'Systems' }
      ]
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: t('categories.physics.title'),
      description: t('categories.physics.description'),
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20',
      delay: 'delay-600',
      subcategories: [
        { icon: <Lightning className="w-4 h-4" />, name: 'Energy' },
        { icon: <Zap className="w-4 h-4" />, name: 'Force' },
        { icon: <Gauge className="w-4 h-4" />, name: 'Pressure' }
      ]
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: t('categories.music.title'),
      description: t('categories.music.description'),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      delay: 'delay-700',
      subcategories: [
        { icon: <Music className="w-4 h-4" />, name: 'Notes' },
        { icon: <Headphones className="w-4 h-4" />, name: 'Frequencies' },
        { icon: <Activity className="w-4 h-4" />, name: 'BPM' }
      ]
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: t('categories.gaming.title'),
      description: t('categories.gaming.description'),
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/20',
      delay: 'delay-800',
      subcategories: [
        { icon: <Target className="w-4 h-4" />, name: 'DPI' },
        { icon: <Monitor className="w-4 h-4" />, name: 'FPS' },
        { icon: <Zap className="w-4 h-4" />, name: 'Performance' }
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t('categories.education.title'),
      description: t('categories.education.description'),
      color: 'from-yellow-500 to-amber-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      delay: 'delay-900',
      subcategories: [
        { icon: <Trophy className="w-4 h-4" />, name: 'Grades' },
        { icon: <GraduationCap className="w-4 h-4" />, name: 'Credits' },
        { icon: <MapPin className="w-4 h-4" />, name: 'Coordinates' }
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t('categories.health.title'),
      description: t('categories.health.description'),
      color: 'from-rose-500 to-red-600',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      delay: 'delay-1000',
      subcategories: [
        { icon: <Scale className="w-4 h-4" />, name: 'BMI' },
        { icon: <Zap className="w-4 h-4" />, name: 'Calories' },
        { icon: <Activity className="w-4 h-4" />, name: 'Heart rate' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">UniConvert</span>
                <p className="text-xs text-slate-400 hidden sm:block">{t('nav.subtitle')}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('categories')} 
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                {t('nav.categories')}
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                {t('nav.features')}
              </button>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-slate-300 hover:text-white transition-colors font-medium"
              >
                {t('nav.demo')}
              </button>
              <LanguageToggle />
              <a 
                href="https://github.com/serloro/webUniConvert" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                <span>{t('nav.github')}</span>
              </a>
            </div>
            <div className="md:hidden">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className={`max-w-4xl mx-auto text-center px-4 relative z-10 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-2xl animate-bounce">
              <Calculator className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title.line1')}
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('categories')}
              className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <Smartphone className="w-5 h-5 group-hover:animate-bounce" />
              <span>{t('hero.cta.explore')}</span>
            </button>
            <a 
              href="https://github.com/serloro/webUniConvert"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 border-2 border-slate-600 text-slate-300 hover:text-white hover:border-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5 group-hover:animate-pulse" />
              <span>{t('hero.cta.github')}</span>
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('categories')}
            className="animate-bounce text-slate-400 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('categories.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('categories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm border ${category.borderColor} rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:bg-slate-800/70 cursor-pointer ${isVisible.categories ? `opacity-100 translate-y-0 ${category.delay}` : 'opacity-0 translate-y-10'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${category.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Subcategorías con iconos */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {category.subcategories.map((sub, subIndex) => (
                      <div 
                        key={subIndex}
                        className={`flex items-center space-x-1 ${category.bgColor} rounded-lg px-2 py-1 group-hover:scale-105 transition-transform duration-200`}
                        style={{ transitionDelay: `${subIndex * 100}ms` }}
                      >
                        <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {sub.icon}
                        </div>
                        <span className="text-xs text-slate-300 group-hover:text-white transition-colors">
                          {sub.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-slate-500 group-hover:text-blue-400 transition-colors">
                    <span className="text-xs font-medium">{t('categories.tap_to_convert')}</span>
                    <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: t('features.realtime.title'),
                description: t('features.realtime.description'),
                delay: "delay-300"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: t('features.offline.title'),
                description: t('features.offline.description'),
                delay: "delay-500"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: t('features.mobile.title'),
                description: t('features.mobile.description'),
                delay: "delay-700"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-slate-800/70 ${isVisible.features ? `opacity-100 translate-y-0 ${feature.delay}` : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('demo.title')}
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t('demo.subtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  t('demo.feature1'),
                  t('demo.feature2'),
                  t('demo.feature3'),
                  t('demo.feature4')
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <Smartphone className="w-5 h-5 group-hover:animate-bounce" />
                <span>{t('demo.cta')}</span>
              </button>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible.demo ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Calculator className="w-5 h-5 text-blue-400 animate-pulse" />
                        <span className="text-white">{t('demo.converting')}</span>
                      </div>
                      <div className="text-emerald-400 font-bold animate-pulse">1.23 USD</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors group">
                        <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{t('demo.from')}</div>
                        <div className="text-white text-lg font-bold group-hover:scale-105 transition-transform">1 EUR</div>
                      </div>
                      <div className="bg-slate-700/30 p-4 rounded-lg hover:bg-slate-700/50 transition-colors group">
                        <div className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{t('demo.to')}</div>
                        <div className="text-white text-lg font-bold group-hover:scale-105 transition-transform">100 cm</div>
                      </div>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('tech.title')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('tech.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React Native", description: t('tech.reactnative'), icon: <Smartphone className="w-6 h-6 text-white" />, color: "from-blue-500 to-cyan-500" },
              { name: "Expo", description: t('tech.expo'), icon: <Zap className="w-6 h-6 text-white" />, color: "from-purple-500 to-pink-500" },
              { name: "TypeScript", description: t('tech.typescript'), icon: <HardDrive className="w-6 h-6 text-white" />, color: "from-emerald-500 to-teal-500" },
              { name: "APIs", description: t('tech.apis'), icon: <ExternalLink className="w-6 h-6 text-white" />, color: "from-orange-500 to-red-500" }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-slate-800/70 ${isVisible.tech ? `opacity-100 translate-y-0` : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6`}>
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{tech.name}</h3>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <Smartphone className="w-5 h-5 group-hover:animate-bounce" />
                <span>{t('cta.primary')}</span>
              </button>
              <a 
                href="https://github.com/serloro/webUniConvert"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-slate-300 hover:text-white px-8 py-4 text-lg font-semibold transition-colors"
              >
                <Github className="w-5 h-5 group-hover:animate-pulse" />
                <span>{t('cta.secondary')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">UniConvert</span>
                <p className="text-xs text-slate-400">{t('footer.tagline')}</p>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;