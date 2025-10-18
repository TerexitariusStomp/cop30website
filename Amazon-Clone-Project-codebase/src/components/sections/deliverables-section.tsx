import React from 'react';
import Image from 'next/image';
import { Gamepad2, Network, Sprout, Shield, Archive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const makeDeliverables = (t: (k: string) => string) => [
  { icon: Gamepad2, title: t('deliverable.1.title'), description: t('deliverable.1.desc') },
  { icon: Network, title: t('deliverable.2.title'), description: t('deliverable.2.desc') },
  { icon: Sprout, title: t('deliverable.3.title'), description: t('deliverable.3.desc') },
  { icon: Shield, title: t('deliverable.4.title'), description: t('deliverable.4.desc') },
  { icon: Archive, title: t('deliverable.5.title'), description: t('deliverable.5.desc') },
];

const DeliverableItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col lg:flex-row items-start gap-6">
    <div className="flex-shrink-0 w-16 h-16 bg-[#E89B7C] rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-[#1f3d3d]" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold font-body text-text-primary">{title}</h3>
      <p className="mt-2 text-base text-text-secondary leading-relaxed">{description}</p>
    </div>
  </div>
);

const DeliverablesSection = () => {
  const { t } = useLanguage();
  const deliverables = makeDeliverables(t);
  return (
    <section style={{ backgroundImage: `url('https://hackmd.io/_uploads/SkIBGk8Tee.jpg')`, backgroundColor: '#E89B7C', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }} className="py-24 sm:py-32">
      <div className="container">
        <div className="bg-[#1f3d3d]/90 rounded-2xl shadow-lg p-12 backdrop-blur-sm">
          <h2 className="text-center font-display text-[2.5rem] leading-tight text-text-primary mb-8">{t('deliverables.title')}</h2>
          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <DeliverableItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
