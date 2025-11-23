import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const collectActivities = (t: (key: string) => string, maxItems: number) => {
  const entries: string[] = [];
  for (let index = 1; index <= maxItems; index++) {
    const key = `activities.items.${index}`;
    const value = t(key);
    if (value && value !== key && value.trim().length > 0) {
      entries.push(value);
    }
  }
  return entries;
};

const PricingSection = () => {
  const { t } = useLanguage();
  const activities = collectActivities(t, 16);
  return (
    <div className="bg-background-primary text-text-primary py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-4xl lg:text-5xl text-text-primary mb-6">
            {t('activities.title')}
          </h2>
          <p className="text-lg text-text-secondary">
            {t('activities.lead')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="bg-background-secondary rounded-lg p-6 border border-border-subtle/40">
              <p className="text-base text-text-primary">{activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
