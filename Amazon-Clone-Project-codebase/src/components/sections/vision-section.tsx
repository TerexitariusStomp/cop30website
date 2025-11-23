import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { t } = useLanguage();
  const itemKeys = Array.from({ length: 12 }, (_, index) => `vision.items.${index}`);
  const visionItems = itemKeys
    .map((key) => ({ key, text: t(key) }))
    .filter(({ key, text }) => text && text !== key && text.trim().length > 0)
    .map(({ text }) => text);
  const footer = t('vision.footer');
  return (
    <section className="relative bg-background-primary py-12 mt-16">
      {/* No overlay needed without background image */}
      
      <div className="container relative z-10">
        <h2 className="font-display text-white text-[2.5rem] leading-none mb-8 drop-shadow-lg">
          {t('vision.title')}
        </h2>
        <div className="bg-background-secondary rounded-lg p-6 max-w-4xl space-y-4">
          <p className="text-text-primary text-xl font-light leading-relaxed">
            {t('vision.body')}
          </p>
          {visionItems.length > 0 && (
            <ul className="list-disc list-inside text-text-primary text-lg space-y-2">
              {visionItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          {footer && footer !== 'vision.footer' && (
            <p className="text-text-primary text-lg leading-relaxed">{footer}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
