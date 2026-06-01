import { useI18n } from '../i18n/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  const links = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.products, href: '#products' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#111111] border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-[var(--gold)] text-xl font-bold tracking-tight">NBT</span>
              <span className="text-[#f5f5f5] text-[0.75rem] font-semibold tracking-[0.15em]">
                COLLECTIBLES
              </span>
            </div>
            <p className="text-[#a3a3a3] text-[0.95rem] leading-[1.7]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-[#f5f5f5] font-semibold text-[1rem] mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="text-[#a3a3a3] text-[0.95rem] hover:text-[var(--gold)] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#f5f5f5] font-semibold text-[1rem] mb-4">
              {t.footer.contactInfo}
            </h4>
            <div className="flex flex-col gap-3 text-[#a3a3a3] text-[0.95rem] leading-[1.7]">
              <p>
                20/50 หมู่ที่ 3 ซอยทรงคุณอุทิศ
                <br />
                ถนนเจ้าฟ้าตะวันออก ตำบลวิชิต
                <br />
                อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000
              </p>
              <p>info@nbt.co.th</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)] py-6 text-center flex flex-col items-center gap-4">
          <p className="text-[#737373] text-[0.875rem]">
            {t.footer.copyright}
          </p>
          <a
            href="https://dbdregistered.dbd.go.th/api/public/shopinfo?param=FE111D1EA31E222BDAC84D91DEB8D8CA1FCD5454A1DACF0517578F91C8E65520"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://dbdregistered.dbd.go.th/api/public/banner?param=FE111D1EA31E222BDAC84D91DEB8D8CA1FCD5454A1DACF0517578F91C8E65520"
              alt="DBD Registered"
              className="h-[55px] w-auto rounded-md"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
