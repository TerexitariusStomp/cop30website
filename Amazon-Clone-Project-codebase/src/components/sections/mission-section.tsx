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
    <section className="relative bg-background-primary py-24 sm:py-32" style={{ backgroundImage: `url('/mission-domes.jpg')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 mb-6">
            <h2 className="font-display text-[42px] leading-tight text-white drop-shadow-lg">
              {t('mission.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white drop-shadow-md">
              {t('mission.lead')}
            </p>
          </div>
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="bg-black/70 backdrop-blur-sm border border-white/20 rounded-lg p-8">
            <div className="flex flex-col items-center gap-4">
              {missionItems.map((item, index) => (
                <div key={index} className="text-xl text-center text-white drop-shadow-md">
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
