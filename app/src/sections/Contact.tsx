import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n/I18nContext';

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

async function submitContact(_data: { name: string; email: string; message: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true, message: 'sent' };
}

export default function Contact() {
  const { t } = useI18n();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: () => {
      setFormData({ name: '', email: '', message: '' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    mutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-[clamp(80px,12vh,160px)] bg-[#111111]">
      <div className="mx-auto max-w-[1280px] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-[0.75rem] font-semibold tracking-[0.08em] uppercase">
              {t.contact.label}
            </span>
            <span className="w-[40px] h-[1px] bg-[var(--gold)]" />
          </div>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold text-[#f5f5f5] leading-[1.2] tracking-[-0.01em] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-[#a3a3a3] text-[1.125rem] leading-[1.7] max-w-[600px] mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
          <div
            ref={leftRef}
            className={`flex flex-col gap-6 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {t.contact.info.map((info) => {
              const Icon = iconMap[info.icon] || MapPin;
              return (
                <div
                  key={info.title}
                  className="flex items-start gap-4 bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f5] font-semibold text-[1rem] mb-1">
                      {info.title}
                    </h4>
                    <p className="text-[#a3a3a3] text-[0.95rem] leading-[1.6]">
                      {info.detail}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="rounded-xl overflow-hidden border border-white/[0.08] mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0234567890123!2d98.39012345678901!3d7.890123456789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjAvNTAg4LiL4Lit4LiiIDMg4LqK4LiZ4Lij4LiZ4LiU4Lix4Liq4Lii4Li14Liq4LiU4LiU4LmJ4Liy4LiH4LiE4Li34LiZ4LiU4Lix4LiZ4Lix4LiZ4LiX4Lix4LiZ4LiU4LiU4LiU4LiU4LiU4LiU4Lid4Li14LiZ4LiU4LmM4Lil4Lix4LiZ4LiU4LiU4Lil4Li04Liq4LiU4LiU4Lid4Li14LiZ4LiU4LmM4Lil4Li14Liq4LiU4LiU4Lid4Li14LiZ4LiU4LmM!5e0!3m2!1sth!2sth!4v1234567890123!5m2!1sth!2sth"
                width="100%"
                height="300"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NBT Collectibles Location"
              />
            </div>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a] border border-white/[0.08] rounded-xl p-8"
            >
              <h3 className="text-[#f5f5f5] font-semibold text-[1.25rem] mb-6">
                {t.contact.formTitle}
              </h3>

              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-[#737373] text-[0.875rem] font-medium mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f5] text-[0.95rem] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                    placeholder={t.contact.namePlaceholder}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#737373] text-[0.875rem] font-medium mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f5] text-[0.95rem] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all"
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#737373] text-[0.875rem] font-medium mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-[#0a0a0a] border border-white/[0.08] rounded-lg px-4 py-3 text-[#f5f5f5] text-[0.95rem] placeholder:text-[#737373] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none"
                    placeholder={t.contact.messagePlaceholder}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-[var(--gold)] text-[#0a0a0a] py-4 rounded-full text-[0.875rem] font-semibold hover:bg-[var(--gold-light)] transition-all duration-300 shadow-[0_4px_20px_rgba(201,168,76,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {t.contact.submitting}
                    </>
                  ) : (
                    t.contact.submit
                  )}
                </button>

                {mutation.isSuccess && (
                  <div className="flex items-center gap-2 text-emerald-400 text-[0.875rem] bg-emerald-400/10 rounded-lg px-4 py-3">
                    <CheckCircle size={16} />
                    {t.contact.success}
                  </div>
                )}

                {mutation.isError && (
                  <div className="text-red-400 text-[0.875rem] bg-red-400/10 rounded-lg px-4 py-3">
                    {t.contact.error}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
