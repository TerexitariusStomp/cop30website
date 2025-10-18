import { HeartPulse, MapPin, Users, Sparkles, Leaf, ShoppingBag, Radio } from 'lucide-react';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

const makeFeatures = (t: (k: string) => string): Feature[] => [
  { icon: HeartPulse, title: t("platform.feature.impact.title"), description: t("platform.feature.impact.desc") },
  { icon: MapPin, title: t("platform.feature.map.title"), description: t("platform.feature.map.desc") },
  { icon: Users, title: t("platform.feature.dao.title"), description: t("platform.feature.dao.desc") },
  { icon: Sparkles, title: t("platform.feature.exchange.title"), description: t("platform.feature.exchange.desc") },
  { icon: Leaf, title: t("platform.feature.green.title"), description: t("platform.feature.green.desc") },
  { icon: ShoppingBag, title: t("platform.feature.market.title"), description: t("platform.feature.market.desc") },
  { icon: Radio, title: t("platform.feature.learning.title"), description: t("platform.feature.learning.desc") },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="bg-[rgba(42,74,74,0.5)] p-8 rounded-lg border border-white/10 flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-2">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="text-xl font-semibold text-text-primary">{title}</h4>
      <p className="text-text-secondary text-[0.95rem] leading-relaxed">{description}</p>
      {image && (
        <div className="mt-auto">
          <img
            src={image}
            alt={`${title} image`}
            className="w-16 h-16 object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

const PlatformSection = () => {
  const { t } = useLanguage();
  const features = makeFeatures(t);
  return (
    <section id="platform" className="py-24 sm:py-32 bg-background-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[42px] font-light text-text-primary mb-6">{t('platform.title')}</h2>
            <p className="text-lg text-text-primary">
              {t('platform.lead').replace('phygital', '')}
              <span className="text-primary">phygital</span> {""}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://hackmd.io/_uploads/BJIBz1Uplx.jpg"
              alt={t('platform.image.alt')}
              className="w-full h-auto rounded-lg object-contain max-w-md"
            />
          </div>
        </div>

        <h3 className="text-xl text-text-primary mb-10">{t('platform.features')}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
          <div className="absolute bottom-0 right-0">
            <img
              src="https://hackmd.io/_uploads/HJLBGk8Tlg.jpg"
              alt={t('platform.image.extra.alt')}
              className="w-32 h-32 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
