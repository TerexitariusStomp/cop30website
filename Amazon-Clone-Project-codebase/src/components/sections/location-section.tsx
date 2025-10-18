import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationSection: React.FC = () => {
  const { t } = useLanguage();
  const listItems = [
    t('location.item.1'),
    t('location.item.2'),
    t('location.item.3'),
    t('location.item.4'),
    t('location.item.5'),
    t('location.item.6'),
    t('location.item.7'),
  ];

  return (
    <div className="bg-background-primary">
      <div className="container mx-auto py-24 px-6 md:px-8">
        <h2 className="text-center font-display text-4xl text-text-primary mb-16">{t('location.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">{t('location.venue.title')}</h3>
            <div className="space-y-6 text-base text-text-secondary leading-relaxed">
              <p>
                <strong className="font-semibold text-text-primary">{t('location.venue.title').split(' ')[0]}:</strong> {t('location.venue.line1')}
              </p>
              <p>
                {t('location.venue.line2')}
                <strong className="font-semibold text-text-primary">{t('location.venue.line2.strong')}</strong>.
              </p>
              <div className="mt-8">
                <img
                  src="https://hackmd.io/_uploads/SyUBG1U6xl.jpg"
                  alt={t('location.image.alt')}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">{t('location.camps.title')}</h3>
            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>{t('location.camps.intro')}</p>
              <ul className="list-disc list-outside pl-5 space-y-3 marker:text-accent-coral marker:text-xl">
                {listItems.map((item, index) => (
                  <li key={index} className="pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
