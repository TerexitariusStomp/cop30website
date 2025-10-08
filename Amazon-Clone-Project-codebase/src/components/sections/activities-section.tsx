import Image from 'next/image';

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
  const learningItems = [
    'Workshops, lectures, and masterclasses',
    'Vision councils and forums',
    'Thematic panels and project launches',
  ];

  const showcaseItems = [
    'Fairs, exhibitions, and showcases',
    'Regenerative hackathons and impact bootcamps',
  ];

  const cultureItems = [
    'Concerts, ceremonies, rituals, and night experiences',
    'Healing spaces and integrative practices',
    'Boat rides',
    'Videomapping & multisensory dinners and experiences',
    'Ecstatic Dance, Contact and Improvisation',
  ];

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          <div className="relative w-full min-h-[400px] lg:min-h-[750px] rounded-lg overflow-hidden">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/photo-1603260913204-7c37bdec19bd-2.webp"
              alt="People in canoes on a river in a forest setting"
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
              Activities and Experiences
            </h2>
            <p className="text-lg text-text-primary mb-8 leading-relaxed">
              The AMAzone COOP30 is an immersive gathering that unites{' '}
              <span className="text-primary font-semibold">body, mind, and spirit</span>, science and art,
              ancestry and technology. During the event, there will be:
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ActivityCard title="Learning & Knowledge" items={learningItems} />
                <ActivityCard title="Showcase & Innovation" items={showcaseItems} />
              </div>
              <div>
                <ActivityCard title="Culture & Healing" items={cultureItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;