import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();
  const missionItems = [
    t("mission.items.0"),
    t("mission.items.1"),
    t("mission.items.2"),
    t("mission.items.3"),
    t("mission.items.4"),
    t("mission.items.5"),
    t("mission.items.6"),
    t("mission.items.7"),
  ];

  return (
    <section className="bg-background-primary py-24 sm:py-32" style={{ backgroundImage: `url('https://hackmd.io/_uploads/By8SzkI6le.jpg')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[42px] leading-tight text-accent-coral">
            {t('mission.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-primary">
            {t('mission.lead')}
          </p>
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="bg-background-secondary border border-border-subtle rounded-lg p-8">
            <div className="flex flex-col items-center gap-4">
              {missionItems.map((item, index) => (
                <div key={index} className="text-xl text-center text-[#D4C5A9]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
