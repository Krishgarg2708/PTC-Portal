import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, FileSpreadsheet, Sparkles } from 'lucide-react';
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
    <section className="relative overflow-hidden rounded-xl2 border border-slate-100 bg-white px-6 py-16 shadow-soft sm:px-12 sm:py-24">
      {/* Ambient background layers */}
      <div
        className="blueprint-grid pointer-events-none absolute inset-0 animate-gridpulse"
        aria-hidden="true"
      />
      <div
        className="aurora-orb animate-float-slow left-[-6rem] top-[-4rem] h-72 w-72 bg-accent/20"
        aria-hidden="true"
      />
      <div
        className="aurora-orb animate-float-slower bottom-[-6rem] right-[-4rem] h-80 w-80 bg-success/10"
        aria-hidden="true"
      />
      <div
        className="aurora-orb animate-float-slow right-1/3 top-1/2 h-40 w-40 bg-warning/10"
        aria-hidden="true"
        style={{ animationDelay: '2s' }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-500 shadow-sm backdrop-blur"
        >
          <motion.span
            animate={{ rotate: [0, 15, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          </motion.span>
          {t.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient mt-6 font-display text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          {t.heading}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-5 h-px w-24 origin-center bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-5 text-base text-slate-500 sm:text-lg"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-11 flex flex-col items-center gap-3"
        >
          <motion.button
            type="button"
            onClick={handleOpenLink}
            whileHover={{ scale: 1.04, y: -2, boxShadow: '0 20px 45px -15px rgba(37,99,235,0.55)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="shimmer-btn group flex w-full max-w-sm items-center justify-center gap-2.5 rounded-xl2 bg-gradient-to-r from-accent via-blue-600 to-primary bg-[length:200%_auto] px-8 py-4 text-base font-semibold text-white shadow-soft transition-[background-position] duration-500 hover:bg-right sm:w-auto"
          >
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </motion.span>
            {t.downloadCta}
          </motion.button>
          <p className="text-xs text-slate-400">{t.downloadHint}</p>

          <motion.button
            type="button"
            onClick={toggleDetails}
            aria-expanded={detailsOpen}
            aria-controls="spreadsheet-details"
            whileHover={{ scale: 1.03, borderColor: '#2563EB' }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 flex items-center gap-2 rounded-xl2 border border-slate-300 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            <FileSpreadsheet className="h-4 w-4 opacity-60" aria-hidden="true" />
            {detailsOpen ? t.hideDetails : t.viewDetails}
            <motion.span
              animate={{ rotate: detailsOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
