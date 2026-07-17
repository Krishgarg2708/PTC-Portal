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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
    >
      <span
        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${swatchClass}`}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4 text-primary" />
      </span>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-primary">{entry.role}</p>
        <p className="mt-0.5 truncate font-mono text-sm text-accent">{entry.email}</p>
        <p className="mt-1 text-sm text-slate-500">{entry.note}</p>
      </div>
    </motion.div>
  );
}
