export type Language = 'en' | 'hi';

export interface AccessEntry {
  role: string;
  email: string;
  note: string;
}

export interface Translation {
  langLabelEn: string;
  langLabelHi: string;
  eyebrow: string;
  heading: string;
  subtitle: string;
  downloadCta: string;
  downloadHint: string;
  viewDetails: string;
  hideDetails: string;
  detailsTitle: string;
  description: string;
  accessSectionTitle: string;
  admin: AccessEntry;
  green: AccessEntry;
  yellow: AccessEntry;
  white: AccessEntry;
  notesTitle: string;
  notes: string[];
  footerNote: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    langLabelEn: 'English',
    langLabelHi: 'हिन्दी',
    eyebrow: 'Official Document Portal',
    heading: 'POWER TECHNOLOGIES CORPORATION',
    subtitle: 'Official Spreadsheet Download Portal',
    downloadCta: 'TCP Link',
    downloadHint: 'Opens the spreadsheet in a new tab',
    viewDetails: 'View Details',
    hideDetails: 'Hide Details',
    detailsTitle: 'Spreadsheet Information',
    description:
      'This file contains three different worksheets inside a single spreadsheet file. Please download the latest version before making any changes.',
    accessSectionTitle: 'Access Information',
    admin: {
      role: 'Administrator (Full Access)',
      email: 'contact@ptc.org.in',
      note: 'This account has access to all worksheets and all editable cells.',
    },
    green: {
      role: 'Green Cells',
      email: 'ptcsignal@rediffmail.com',
      note: 'Accessible only by this email.',
    },
    yellow: {
      role: 'Yellow Cells',
      email: 'supply@ptc.org.in',
      note: 'Accessible only by this email.',
    },
    white: {
      role: 'White Cells',
      email: 'purchase@ptc.org.in',
      note: 'Accessible only by this email.',
    },
    notesTitle: 'Important Notes',
    notes: [
      'This spreadsheet contains three different sheets.',
      'Each color indicates edit permissions.',
      'Please edit only the cells assigned to your email.',
      'Do not modify cells assigned to other users.',
      'Always download the latest version before working.',
    ],
    footerNote: 'Power Technologies Corporation — Internal Use Portal',
  },
  hi: {
    langLabelEn: 'English',
    langLabelHi: 'हिन्दी',
    eyebrow: 'आधिकारिक दस्तावेज़ पोर्टल',
    heading: 'POWER TECHNOLOGIES CORPORATION',
    subtitle: 'आधिकारिक स्प्रेडशीट डाउनलोड पोर्टल',
    downloadCta: 'TCP Link',
    downloadHint: 'स्प्रेडशीट एक नए टैब में खुलेगी',
    viewDetails: 'विवरण देखें',
    hideDetails: 'विवरण छुपाएं',
    detailsTitle: 'स्प्रेडशीट जानकारी',
    description:
      'इस फ़ाइल में एक ही स्प्रेडशीट के भीतर तीन अलग-अलग वर्कशीट हैं। कृपया कोई भी बदलाव करने से पहले नवीनतम संस्करण डाउनलोड करें।',
    accessSectionTitle: 'पहुँच जानकारी',
    admin: {
      role: 'एडमिनिस्ट्रेटर (पूर्ण अधिकार)',
      email: 'contact@ptc.org.in',
      note: 'इस खाते की पहुँच सभी वर्कशीट और सभी संपादन योग्य सेल तक है।',
    },
    green: {
      role: 'हरे सेल',
      email: 'ptcsignal@rediffmail.com',
      note: 'केवल इसी ईमेल द्वारा सुलभ।',
    },
    yellow: {
      role: 'पीले सेल',
      email: 'supply@ptc.org.in',
      note: 'केवल इसी ईमेल द्वारा सुलभ।',
    },
    white: {
      role: 'सफेद सेल',
      email: 'purchase@ptc.org.in',
      note: 'केवल इसी ईमेल द्वारा सुलभ।',
    },
    notesTitle: 'महत्वपूर्ण सूचनाएं',
    notes: [
      'इस स्प्रेडशीट में तीन अलग-अलग शीट हैं।',
      'प्रत्येक रंग संपादन अधिकार दर्शाता है।',
      'कृपया केवल अपने ईमेल को सौंपे गए सेल संपादित करें।',
      'अन्य उपयोगकर्ताओं को सौंपे गए सेल में बदलाव न करें।',
      'काम शुरू करने से पहले हमेशा नवीनतम संस्करण डाउनलोड करें।',
    ],
    footerNote: 'पावर टेक्नोलॉजीज कॉर्पोरेशन — आंतरिक उपयोग पोर्टल',
  },
};
