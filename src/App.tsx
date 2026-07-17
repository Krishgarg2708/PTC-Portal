import { useState } from 'react';
import { motion } from 'framer-motion';
import { translations, type Language } from './i18n/translations';
import LanguageSwitch from './components/LanguageSwitch';
import Hero from './components/Hero';
import DetailsPanel from './components/DetailsPanel';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const t = translations[language];

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <div
        className="aurora-orb animate-float-slower pointer-events-none fixed left-[-10rem] top-[10%] h-96 w-96 bg-accent/10"
        aria-hidden="true"
      />
      <div
        className="aurora-orb animate-float-slow pointer-events-none fixed right-[-8rem] bottom-[5%] h-80 w-80 bg-primary/5"
        aria-hidden="true"
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="relative mx-auto flex max-w-4xl items-center justify-end px-4 pt-6 sm:px-6">
        <LanguageSwitch language={language} setLanguage={setLanguage} t={t} />
      </header>

      <motion.main
        id="main-content"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12"
      >
        <Hero t={t} detailsOpen={detailsOpen} toggleDetails={() => setDetailsOpen((v) => !v)} />
        <DetailsPanel open={detailsOpen} t={t} />
        <Footer t={t} />
      </motion.main>
    </div>
  );
}
