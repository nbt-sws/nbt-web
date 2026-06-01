import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nContext';

export default function Hero() {
  const { t } = useI18n();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const tmr = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(tmr);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Premium display cases"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,10,10,0.65)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.4)] via-transparent to-[rgba(10,10,10,0.85)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)] opacity-30"
            style={{
              left: `${10 + (i * 7.5) % 80}%`,
              top: `${20 + (i * 13) % 60}%`,
              animation: `float ${6 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-[900px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div
          className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="inline-block text-[var(--gold)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase mb-6">
            {t.hero.label}
          </span>
        </div>

        <h1
          className={`transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold text-[#f5f5f5] leading-[1.05] tracking-[-0.03em]">
            {t.hero.title1}
          </span>
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold text-[#f5f5f5] leading-[1.05] tracking-[-0.03em] mt-2">
            {t.hero.title2}
          </span>
        </h1>

        <div
          className={`mx-auto mt-8 mb-8 w-[60px] h-[1px] bg-[var(--gold)] transition-all duration-700 ${
            loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '0.5s' }}
        />

        <p
          className={`text-[#a3a3a3] text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.7] max-w-[720px] mx-auto mb-10 transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className={`flex items-center justify-center gap-4 flex-wrap transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.8s' }}
        >
          <button
            onClick={() => handleScroll('#products')}
            className="bg-[var(--gold)] text-[#0a0a0a] px-8 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)]"
          >
            {t.hero.btnPrimary}
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="border border-[var(--gold)] text-[var(--gold)] px-8 py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[var(--gold)]/10 hover:text-[var(--gold-light)] transition-all duration-300"
          >
            {t.hero.btnSecondary}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}
