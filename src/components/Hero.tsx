import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, FileSpreadsheet } from 'lucide-react';
import type { Translation } from '../i18n/translations';

const SPREADSHEET_URL =
  'https://docs.google.com/spreadsheets/d/18PXa8_M9q2VtBUU1am_utrr4Jd76sJ68FMz-KtOyb5w/edit?gid=0#gid=0';

interface Props {
  t: Translation;
  detailsOpen: boolean;
  toggleDetails: () => void;
}

export default function Hero({ t, detailsOpen, toggleDetails }: Props) {
  const handleOpenLink = () => {
    window.open(SPREADSHEET_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden rounded-xl2 border border-slate-100 bg-white px-6 py-14 shadow-soft sm:px-12 sm:py-20">
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 animate-gridpulse"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500"
        >
          <FileSpreadsheet className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {t.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 font-display text-3xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          {t.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base text-slate-500 sm:text-lg"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <motion.button
            type="button"
            onClick={handleOpenLink}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full max-w-sm items-center justify-center gap-2.5 rounded-xl2 bg-accent px-8 py-4 text-base font-semibold text-white shadow-soft transition-colors hover:bg-blue-700 sm:w-auto"
          >
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
            {t.downloadCta}
          </motion.button>
          <p className="text-xs text-slate-400">{t.downloadHint}</p>

          <motion.button
            type="button"
            onClick={toggleDetails}
            aria-expanded={detailsOpen}
            aria-controls="spreadsheet-details"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 flex items-center gap-2 rounded-xl2 border border-slate-300 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
          >
            {detailsOpen ? t.hideDetails : t.viewDetails}
            <motion.span
              animate={{ rotate: detailsOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
