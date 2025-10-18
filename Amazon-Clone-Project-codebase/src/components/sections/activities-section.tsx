import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const ActivityCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-background-secondary border border-border-subtle rounded-lg p-6 h-full">
    <h3 className="font-semibold text-text-primary text-2xl mb-4" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>
      {title}
    </h3>
    <ul className="list-disc list-inside space-y-2 text-text-primary text-base">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ActivitiesSection = () => {
  const { t } = useLanguage();
  const learningItems = [t('activities.item.1'), t('activities.item.2'), t('activities.item.3')];
  const showcaseItems = [t('activities.item.4'), t('activities.item.5')];
  const cultureItems = [
    t('activities.item.6'),
    t('activities.item.7'),
    t('activities.item.8'),
    t('activities.item.9'),
    t('activities.item.10'),
  ];

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          <div className="relative w-full min-h-[400px] lg:min-h-[750px] rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/photo-1603260913204-7c37bdec19bd-2.webp"
              alt={t('activities.image.alt')}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col">
            <h2 
              className="text-text-primary mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', lineHeight: 1.3 }}
            >
              {t('activities.title')}
            </h2>
            <p className="text-lg text-text-primary mb-8 leading-relaxed">
              {t('activities.lead')}
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActivityCard title={t('activities.group.learning')} items={learningItems} />
                <ActivityCard title={t('activities.group.showcase')} items={showcaseItems} />
              </div>
              <div>
                <ActivityCard title={t('activities.group.culture')} items={cultureItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
