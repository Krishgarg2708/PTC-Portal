import { Globe } from 'lucide-react';
import type { Language, Translation } from '../i18n/translations';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

export default function LanguageSwitch({ language, setLanguage, t }: Props) {
  return (
    <div
      role="group"
      aria-label="Language switch"
      className="flex items-center gap-1 rounded-xl2 border border-slate-200 bg-white p-1 shadow-card"
    >
      <Globe className="ml-2 h-4 w-4 text-slate-400" aria-hidden="true" />
      <button
        type="button"
        aria-pressed={language === 'en'}
        onClick={() => setLanguage('en')}
        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-primary text-white'
            : 'text-slate-500 hover:text-primary'
        }`}
      >
        {t.langLabelEn}
      </button>
      <button
        type="button"
        aria-pressed={language === 'hi'}
        onClick={() => setLanguage('hi')}
        className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
          language === 'hi'
            ? 'bg-primary text-white'
            : 'text-slate-500 hover:text-primary'
        }`}
      >
        {t.langLabelHi}
      </button>
    </div>
  );
}
