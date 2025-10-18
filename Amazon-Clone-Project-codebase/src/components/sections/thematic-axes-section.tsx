import React from 'react';
import {
  Sprout,
  Trees,
  Recycle,
  Landmark,
  Carrot,
  Blocks,
  Palette,
  Users,
  Tent,
  Handshake,
  Building2,
  BrainCircuit,
  UtensilsCrossed,
  Droplet,
  UsersRound,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

type ThematicAxe = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const makeAxes = (t: (k: string) => string): ThematicAxe[] => [
  { icon: Sprout, title: t('axes.1'), description: '' },
  { icon: Trees, title: t('axes.2'), description: '' },
  { icon: Recycle, title: t('axes.3'), description: '' },
  { icon: Landmark, title: t('axes.4'), description: '' },
  { icon: Carrot, title: t('axes.5'), description: '' },
  { icon: Blocks, title: t('axes.6'), description: '' },
  { icon: Palette, title: t('axes.7'), description: '' },
  { icon: Users, title: t('axes.8'), description: '' },
  { icon: Tent, title: t('axes.9'), description: '' },
  { icon: Handshake, title: t('axes.10'), description: '' },
  { icon: Building2, title: t('axes.11'), description: '' },
  { icon: BrainCircuit, title: t('axes.12'), description: '' },
  { icon: UtensilsCrossed, title: t('axes.13'), description: '' },
  { icon: Droplet, title: t('axes.14'), description: '' },
  { icon: UsersRound, title: t('axes.15'), description: '' },
];

const ThematicAxesSection = () => {
  const { t } = useLanguage();
  const thematicAxes = makeAxes(t);
  return (
    <section className="bg-background-primary text-text-primary py-24 sm:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-[2.625rem] leading-[1.3] text-text-primary text-center mb-12">{t('axes.title')}</h2>
          <p className="text-lg leading-8 text-text-secondary text-center max-w-md mx-auto mb-12">
            {t('axes.lead.prefix')}
            <span className="text-accent-orange underline">{t('axes.lead.span')}</span>
            {t('axes.lead.suffix')}
          </p>
          <div className="space-y-8">
            {thematicAxes.map((axe, index) => (
              <div key={index} className="flex flex-col p-6 rounded-lg transition-colors duration-300 hover:bg-background-secondary">
                <div className="mb-6">
                  <axe.icon
                    className="h-12 w-12 text-primary"
                    aria-hidden="true"
                    strokeWidth="1.5"
                  />
                </div>
                <h3 className="text-xl font-semibold leading-7 text-foreground">
                  {axe.title + (axe.description ? ' ' + axe.description : '')}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThematicAxesSection;
