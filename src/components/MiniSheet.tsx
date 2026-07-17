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
  admin: 'bg-primary',
  green: 'bg-success/80',
  yellow: 'bg-warning',
  white: 'bg-white border border-slate-300',
};

export default function MiniSheet() {
  return (
    <div
      className="grid gap-1.5 rounded-2xl bg-slate-50 p-4"
      role="img"
      aria-label="Illustration of a spreadsheet grid with color-coded permission cells"
    >
      {ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {Array.from({ length: COLS }).map((_, colIndex) => (
            <motion.div
              key={colIndex}
              className={`h-4 flex-1 rounded-sm sm:h-5 ${cellClass[row]}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: (rowIndex * COLS + colIndex) * 0.025,
                duration: 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
