import type { Translation } from '../i18n/translations';

interface Props {
  t: Translation;
}

export default function Footer({ t }: Props) {
  return (
    <footer className="mx-auto mt-12 max-w-3xl pb-10 text-center">
      <p className="text-xs text-slate-400">{t.footerNote}</p>
    </footer>
  );
}
