import { motion } from 'framer-motion';

// Row-by-row color layout, mirroring the real workbook's three permission bands
// plus an admin header row. This is the page's signature visual: a literal
// miniature of the artifact the whole page exists to hand out.
const ROWS: Array<'admin' | 'green' | 'yellow' | 'white'> = [
  'admin',
  'green',
  'green',
  'yellow',
  'yellow',
  'white',
];

const COLS = 5;

const cellClass: Record<string, string> = {
  admin: 'bg-gradient-to-br from-accent to-plasma',
  green: 'bg-success/80',
  yellow: 'bg-warning',
  white: 'bg-white/15 border border-white/25',
};

export default function MiniSheet() {
  return (
    <motion.div
      className="group relative grid gap-1.5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner"
      role="img"
      aria-label="Illustration of a spreadsheet grid with color-coded permission cells"
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
        animate={{ x: ['-100%', '160%'] }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {Array.from({ length: COLS }).map((_, colIndex) => (
            <motion.div
              key={colIndex}
              className={`h-4 flex-1 rounded-sm sm:h-5 ${cellClass[row]}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.25, zIndex: 1 }}
              transition={{
                delay: (rowIndex * COLS + colIndex) * 0.025,
                duration: 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
