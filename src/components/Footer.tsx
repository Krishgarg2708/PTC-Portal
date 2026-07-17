import { motion } from 'framer-motion';
import type { Translation } from '../i18n/translations';

interface Props {
  t: Translation;
}

export default function Footer({ t }: Props) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mx-auto mt-12 max-w-3xl pb-10 text-center"
    >
      <p className="text-xs text-slate-400">{t.footerNote}</p>
    </motion.footer>
  );
}
