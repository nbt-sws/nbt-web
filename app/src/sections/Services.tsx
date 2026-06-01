import { Palette, Factory, Lightbulb, ShoppingCart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const icons = [Palette, Factory, Lightbulb, ShoppingCart];

export default function Services() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-[clamp(80px,12vh,160px)] bg-[#111111]">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase">
              {t.services.label}
            </span>
            <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[#f5f5f5] leading-[1.2] tracking-[-0.01em] mb-4">
            {t.services.title}
          </h2>
          <p className="text-[#a3a3a3] text-[1.125rem] leading-[1.7] max-w-[600px] mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className={`group bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-10 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[var(--gold)]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[1.25rem] font-semibold text-[#f5f5f5] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#a3a3a3] text-[0.95rem] leading-[1.6]">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
