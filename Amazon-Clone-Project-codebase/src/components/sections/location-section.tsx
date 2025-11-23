import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const collectStrings = (t: (key: string) => string, prefix: string, maxItems: number) => {
  const values: string[] = [];
  for (let index = 1; index <= maxItems; index++) {
    const key = `${prefix}.${index}`;
    const value = t(key);
    if (value && value !== key && value.trim().length > 0) {
      values.push(value);
    }
  }
  return values;
};

const LocationSection: React.FC = () => {
  const { t } = useLanguage();
  const aboutParagraphs = collectStrings(t, 'location.about.paragraph', 4);
  const callParagraphs = collectStrings(t, 'location.call.paragraph', 4);
  const callHighlights = collectStrings(t, 'location.call.list', 4);

  return (
    <div className="bg-background-primary">
      <div className="container mx-auto py-24 px-6 md:px-8">
        <h2 className="text-center font-display text-4xl text-text-primary mb-16">{t('location.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">{t('location.about.title')}</h3>
            <div className="space-y-8 text-base text-text-secondary leading-relaxed">
              {aboutParagraphs.map((paragraph, index) => (
                <div key={index} className="space-y-4">
                  <p>{paragraph}</p>
                  {index === 1 && (
                    <img
                      src="/yucca.jpg"
                      alt={t('location.image.yucca.alt')}
                      className="w-full h-auto rounded-lg object-cover shadow-md"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">{t('location.call.title')}</h3>
            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              {callParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {callHighlights.length > 0 && (
                <ul className="list-disc list-outside pl-5 space-y-3 marker:text-accent-coral marker:text-xl">
                  {callHighlights.map((highlight, index) => (
                    <li key={index} className="pl-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
