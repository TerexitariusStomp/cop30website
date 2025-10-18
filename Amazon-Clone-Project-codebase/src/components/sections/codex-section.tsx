import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const makeCodex = (t: (k: string) => string) => [
  t('codex.list.1'), t('codex.list.2'), t('codex.list.3'), t('codex.list.4'), t('codex.list.5'), t('codex.list.6'), t('codex.list.7'), t('codex.list.8'), t('codex.list.9'), t('codex.list.10'), t('codex.list.11'), t('codex.list.12'), t('codex.list.13'), t('codex.list.14'), t('codex.list.15'), t('codex.list.16'), t('codex.list.17'),
];

const CodexSection = () => {
  const { t } = useLanguage();
  const codexItems = makeCodex(t);
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[2.5rem] leading-tight text-text-primary mb-8">{t('codex.title')}</h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">{t('codex.subtitle')}</p>
          <p className="text-base text-text-secondary max-w-4xl mx-auto mt-4">{t('codex.p1')}</p>
          <p className="text-base text-text-secondary max-w-4xl mx-auto mt-4">{t('codex.p2')}</p>
          <div className="flex justify-center my-8">
            <img
              src="https://hackmd.io/_uploads/Hy7voJ8plg.jpg"
              alt="Codex image"
              className="w-48 h-48 object-contain rounded-lg"
            />
          </div>
        </div>

        <div className="bg-background-secondary border border-border-subtle rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">{t('codex.subtitle')}</h3>
          <ol className="list-decimal list-inside space-y-4 text-text-primary">
            {codexItems.map((item, index) => (
              <li key={index} className="text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg italic text-text-primary max-w-3xl mx-auto">"{t('codex.quote')}"</p>
        </div>
      </div>
    </section>
  );
};

export default CodexSection;
