import { motion } from 'framer-motion';
import { Shield, User } from 'lucide-react';
import type { AccessEntry } from '../i18n/translations';

interface Props {
  entry: AccessEntry;
  swatchClass: string;
  icon?: 'shield' | 'user';
  index: number;
}

export default function AccessRow({ entry, swatchClass, icon = 'user', index }: Props) {
  const Icon = icon === 'shield' ? Shield : User;

  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4, borderColor: '#22D3EE', boxShadow: '0 8px 28px -10px rgba(34,211,238,0.35)' }}
      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-sm transition-shadow"
    >
      <motion.span
        whileHover={{ rotate: 8, scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${swatchClass}`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4 text-ink" />
      </motion.span>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-ink">{entry.role}</p>
        <p className="mt-0.5 truncate font-mono text-sm text-accent">{entry.email}</p>
        <p className="mt-1 text-sm text-muted">{entry.note}</p>
      </div>
    </motion.div>
  );
}
