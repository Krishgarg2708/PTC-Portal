import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import type { Language, Translation } from '../i18n/translations';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export default function LanguageSwitch({ language, setLanguage, t }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      role="group"
      aria-label="Language switch"
      className="relative flex items-center gap-1 rounded-xl2 border border-slate-200 bg-white p-1 shadow-card"
    >
      <Globe className="ml-2 h-4 w-4 text-slate-400" aria-hidden="true" />
      <div className="relative flex">
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="absolute inset-y-0 rounded-lg bg-primary"
          style={{
            width: '50%',
            left: language === 'en' ? '0%' : '50%',
          }}
        />
        <button
          type="button"
          aria-pressed={language === 'en'}
          onClick={() => setLanguage('en')}
          className={`relative z-10 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            language === 'en' ? 'text-white' : 'text-slate-500 hover:text-primary'
          }`}
        >
          {t.langLabelEn}
        </button>
        <button
          type="button"
          aria-pressed={language === 'hi'}
          onClick={() => setLanguage('hi')}
          className={`relative z-10 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
            language === 'hi' ? 'text-white' : 'text-slate-500 hover:text-primary'
          }`}
        >
          {t.langLabelHi}
        </button>
      </div>
    </motion.div>
  );
}
