import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ClosingQuoteSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-background-secondary py-16">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center">
        
        <Image
          src="/logo.jpg"
          alt={t('closing.alt')}
          width={200}
          height={200}
          className="mb-12"
        />

        <blockquote className="text-2xl italic text-text-primary max-w-3xl w-full mb-12 border-l-[3px] border-accent-coral pl-6 text-left">
          "{t('closing.blockquote')}"
        </blockquote>


        <p className="font-display text-5xl font-thin tracking-widest text-white/10 uppercase mb-4 text-center">{t('closing.banner')}</p>

        <p className="text-xl text-text-primary max-w-2xl mb-8 text-center">{t('closing.cta')}</p>


      </div>
    </section>
  );
};

export default ClosingQuoteSection;
