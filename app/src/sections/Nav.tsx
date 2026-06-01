import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export default function Nav() {
  const { t, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-[rgba(10,10,10,0.6)] backdrop-blur-md'
      } border-b border-white/[0.08]`}
    >
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="flex h-[72px] items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick('#hero');
            }}
            className="flex items-baseline gap-1"
          >
            <span className="text-[var(--gold)] text-xl font-bold tracking-tight">NBT</span>
            <span className="text-[#f5f5f5] text-[0.75rem] font-semibold tracking-[0.15em]">
              COLLECTIBLES
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="relative text-[#a3a3a3] text-[0.875rem] font-medium tracking-[0.01em] hover:text-[#f5f5f5] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-[var(--gold)] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}

            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-[#a3a3a3] text-[0.8rem] font-medium hover:text-[var(--gold)] transition-colors duration-300 border border-white/[0.08] rounded-full px-3 py-1.5"
            >
              <Globe size={14} />
              {t.lang}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              className="bg-[var(--gold)] text-[#0a0a0a] px-6 py-2.5 rounded-full text-[0.875rem] font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.2)]"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-[#a3a3a3] text-[0.75rem] font-medium hover:text-[var(--gold)] transition-colors border border-white/[0.08] rounded-full px-2.5 py-1"
            >
              <Globe size={13} />
              {t.lang}
            </button>
            <button
              className="text-[#f5f5f5]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/[0.08]">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className="text-[#a3a3a3] text-[1rem] font-medium hover:text-[var(--gold)] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contact');
              }}
              className="bg-[var(--gold)] text-[#0a0a0a] px-6 py-3 rounded-full text-[0.875rem] font-semibold text-center mt-2"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
