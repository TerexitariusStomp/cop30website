import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-background-primary py-12 mt-16">
      {/* No overlay needed without background image */}
      
      <div className="container relative z-10">
        <h2 className="font-display text-white text-[2.5rem] leading-none mb-8 drop-shadow-lg">
          {t('vision.title')}
        </h2>
        <div className="bg-background-secondary rounded-lg p-6 max-w-4xl">
          <p className="text-text-primary text-xl font-light leading-relaxed">
            {t('vision.body')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
