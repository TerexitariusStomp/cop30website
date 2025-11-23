import React from 'react';
import {
  Sprout,
  Trees,
  Recycle,
  Landmark,
  Carrot,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type PocCategory = {
  icon: React.ElementType;
  title: string;
  description?: string;
  items: string[];
};

const collectItems = (t: (k: string) => string, prefix: string, maxItems = 12) => {
  const entries: string[] = [];
  for (let index = 1; index <= maxItems; index++) {
    const key = `${prefix}.items.${index}`;
    const value = t(key);
    if (value && value !== key && value.trim().length > 0) {
      entries.push(value);
    }
  }
  return entries;
};

const makeCategories = (t: (k: string) => string): PocCategory[] => [
  {
    icon: Sprout,
    title: t('pocs.section.1.title'),
    description: t('pocs.section.1.range'),
    items: collectItems(t, 'pocs.section.1', 10),
  },
  {
    icon: Trees,
    title: t('pocs.section.2.title'),
    description: t('pocs.section.2.range'),
    items: collectItems(t, 'pocs.section.2', 6),
  },
  {
    icon: Recycle,
    title: t('pocs.section.3.title'),
    description: t('pocs.section.3.range'),
    items: collectItems(t, 'pocs.section.3', 6),
  },
  {
    icon: Landmark,
    title: t('pocs.section.4.title'),
    description: t('pocs.section.4.range'),
    items: collectItems(t, 'pocs.section.4', 6),
  },
  {
    icon: Carrot,
    title: t('pocs.section.5.title'),
    description: t('pocs.section.5.range'),
    items: collectItems(t, 'pocs.section.5', 6),
  },
];

const ThematicAxesSection = () => {
  const { t } = useLanguage();
  const categories = makeCategories(t);
  return (
    <section className="bg-background-primary text-text-primary py-24 sm:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-[2.625rem] leading-[1.3] text-text-primary text-center mb-12">{t('axes.title')}</h2>
          <p className="text-lg leading-8 text-text-secondary text-center max-w-3xl mx-auto mb-12">
            {t('axes.lead.prefix')}
            <span className="text-accent-orange underline">{t('axes.lead.span')}</span>
            {t('axes.lead.suffix')}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col p-6 rounded-lg transition-colors duration-300 hover:bg-background-secondary">
                <div className="flex items-center gap-4 mb-4">
                  <category.icon className="h-10 w-10 text-primary" aria-hidden="true" strokeWidth="1.5" />
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-foreground">
                      {category.title}
                    </h3>
                    {category.description && category.description !== `pocs.section.${index + 1}.range` && (
                      <p className="text-sm text-text-secondary">{category.description}</p>
                    )}
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-text-primary">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAxesSection;
