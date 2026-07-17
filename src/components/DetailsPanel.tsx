import { AnimatePresence, motion } from 'framer-motion';
import { FileSpreadsheet, Info } from 'lucide-react';
import type { Translation } from '../i18n/translations';
import MiniSheet from './MiniSheet';
import AccessRow from './AccessRow';

interface Props {
  open: boolean;
  t: Translation;
}

export default function DetailsPanel({ open, t }: Props) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.section
          id="spreadsheet-details"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="mt-8 rounded-xl2 border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <FileSpreadsheet className="h-5 w-5 text-accent" aria-hidden="true" />
              </span>
              <h2 className="font-display text-xl font-semibold text-primary">
                {t.detailsTitle}
              </h2>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {t.description}
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,220px)_1fr]">
              <MiniSheet />

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-400">
                  {t.accessSectionTitle}
                </h3>
                <div className="mt-3 grid gap-2.5">
                  <AccessRow entry={t.admin} swatchClass="bg-slate-200" icon="shield" index={0} />
                  <AccessRow entry={t.green} swatchClass="bg-success/20" index={1} />
                  <AccessRow entry={t.yellow} swatchClass="bg-warning/30" index={2} />
                  <AccessRow entry={t.white} swatchClass="bg-slate-100" index={3} />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-slate-50 p-5">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-accent" aria-hidden="true" />
                <h3 className="font-display text-sm font-semibold text-primary">
                  {t.notesTitle}
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {t.notes.map((note, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
