import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nContext';

export default function Products() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="products" className="py-[clamp(80px,12vh,160px)] bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase">
              {t.products.label}
            </span>
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[#f5f5f5] leading-[1.2] tracking-[-0.01em] mb-4">
            {t.products.title}
          </h2>
          <p className="text-[#a3a3a3] text-[1.125rem] leading-[1.7] max-w-[600px]">
            {t.products.subtitle}
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((product, i) => (
            <div
              key={product.name}
              className={`group bg-[#111111] border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[var(--gold)] text-[0.75rem] font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-[1.125rem] font-semibold text-[#f5f5f5] mt-2">
                  {product.name}
                </h3>
                <p className="text-[#a3a3a3] text-[0.875rem] leading-[1.6] mt-2">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
