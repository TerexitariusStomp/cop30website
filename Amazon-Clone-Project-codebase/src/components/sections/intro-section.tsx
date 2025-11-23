import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const IntroSection = () => {
  const { t } = useLanguage();
  const paragraphKeys = Array.from({ length: 6 }, (_, index) => `intro.paragraph.${index + 1}`);
  const paragraphs = paragraphKeys
    .map((key) => ({ key, text: t(key) }))
    .filter(({ key, text }) => text && text !== key && text.trim().length > 0)
    .map(({ text }) => text);

  return (
    <section className="relative isolate overflow-hidden bg-background-primary py-24 sm:py-32">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/a3df5ydei145m46/011703b718f4415d970644b183860572/original/ae65513d-3168-4f6d-b890-656785ecda48.png"
          alt={t('intro.alt')}
          layout="fill"
          objectFit="contain"
          quality={80}
          unoptimized
        />
        <div className="absolute inset-0 bg-background-primary/80" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 space-y-6 text-lg leading-loose text-text-primary">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
