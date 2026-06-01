import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nContext';

export default function About() {
  const { t } = useI18n();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  const stats = [
    { label: t.about.statReg, value: t.about.statRegVal },
    { label: t.about.statCat, value: t.about.statCatVal },
    { label: t.about.statLoc, value: t.about.statLocVal },
  ];

  return (
    <section id="about" className="py-[clamp(80px,12vh,160px)] bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          <div
            ref={leftRef}
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              leftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
              <span className="text-[var(--gold)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase">
                {t.about.label}
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[#f5f5f5] leading-[1.2] tracking-[-0.01em] mb-6">
              {t.about.title}
            </h2>

            <p className="text-[#a3a3a3] text-[1rem] leading-[1.7] mb-4">
              {t.about.p1}
              <span className="text-[var(--gold)]">{t.about.highlight1}</span>{' '}
              <span className="text-[var(--gold)]">{t.about.highlight2}</span>{' '}
              <span className="text-[var(--gold)]">{t.about.highlight3}</span>
              {t.about.p1end}
            </p>

            <p className="text-[#a3a3a3] text-[1rem] leading-[1.7] mb-8">
              {t.about.p2}
            </p>

            <div className="flex flex-wrap gap-6 lg:gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div>
                    <p className="text-[#737373] text-[0.75rem] font-medium uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[#f5f5f5] text-[1.125rem] font-semibold">
                      {stat.value}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="hidden lg:block w-[1px] h-[40px] bg-white/[0.08] mx-6" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[60px]'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.15)]">
              <img
                src="/about.jpg"
                alt="Premium collectibles display"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
