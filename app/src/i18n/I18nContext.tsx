import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Lang, type Translations } from './translations';

interface I18nContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('th');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'));
  }, []);

  const t = translations[lang];

  return (
    <I18nContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
