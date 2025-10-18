import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-background-primary py-12 mt-16" style={{ backgroundImage: `url('https://hackmd.io/_uploads/By8SzkI6le.jpg')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
      <div className="container">
        <h2 className="font-display text-primary text-[2.5rem] leading-none mb-8">
          {t('vision.title')}
        </h2>
        <p className="text-text-primary/90 text-xl max-w-4xl font-light leading-relaxed">
          {t('vision.body')}
        </p>
      </div>
    </section>
  );
};

export default VisionSection;
