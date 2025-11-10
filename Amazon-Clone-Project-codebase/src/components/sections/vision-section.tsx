import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-background-primary py-12 mt-16" style={{ backgroundImage: `url('https://hackmd.io/_uploads/By8SzkI6le.jpg')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container relative z-10">
        <h2 className="font-display text-white text-[2.5rem] leading-none mb-8 drop-shadow-lg">
          {t('vision.title')}
        </h2>
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 max-w-4xl">
          <p className="text-white text-xl font-light leading-relaxed drop-shadow-md">
            {t('vision.body')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
