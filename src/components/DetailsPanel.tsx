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
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel mt-8 rounded-xl2 border border-white/10 p-6 shadow-glow sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="flex items-center gap-3"
            >
              <motion.span
                whileHover={{ rotate: -6, scale: 1.08 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15"
              >
                <FileSpreadsheet className="h-5 w-5 text-accent" aria-hidden="true" />
              </motion.span>
              <h2 className="font-display text-xl font-semibold text-ink">
                {t.detailsTitle}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.4 }}
              className="mt-4 text-sm leading-relaxed text-muted sm:text-base"
            >
              {t.description}
            </motion.p>

            <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,220px)_1fr]">
              <MiniSheet />

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted/80">
                  {t.accessSectionTitle}
                </h3>
                <div className="mt-3 grid gap-2.5">
                  <AccessRow entry={t.admin} swatchClass="bg-white/15" icon="shield" index={0} />
                  <AccessRow entry={t.green} swatchClass="bg-success/25" index={1} />
                  <AccessRow entry={t.yellow} swatchClass="bg-warning/30" index={2} />
                  <AccessRow entry={t.white} swatchClass="bg-white/10" index={3} />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Info className="h-4 w-4 text-accent" aria-hidden="true" />
                </motion.span>
                <h3 className="font-display text-sm font-semibold text-ink">
                  {t.notesTitle}
                </h3>
              </div>
              <ul className="mt-3 space-y-2">
                {t.notes.map((note, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.06, duration: 0.3 }}
                    className="flex gap-2 text-sm text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {note}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
