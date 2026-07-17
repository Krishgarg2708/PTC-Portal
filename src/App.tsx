import { useState } from 'react';
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
    <div className="min-h-screen bg-canvas">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-4xl items-center justify-end px-4 pt-6 sm:px-6">
        <LanguageSwitch language={language} setLanguage={setLanguage} t={t} />
      </header>

      <main id="main-content" className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <Hero t={t} detailsOpen={detailsOpen} toggleDetails={() => setDetailsOpen((v) => !v)} />
        <DetailsPanel open={detailsOpen} t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}
