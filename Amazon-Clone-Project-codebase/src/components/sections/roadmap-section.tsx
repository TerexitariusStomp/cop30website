import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Milestone = {
  number: string;
  date: string;
  content: React.ReactNode;
  align: 'left' | 'right';
};

const makeMilestones = (t: (k: string) => string): Milestone[] => [
  {
    number: "1",
    date: t("roadmap.1.date"),
    content: (
      <>
        <p>
          <strong className="font-bold text-text-primary">PATH to COOP30</strong> – {t("roadmap.1.content")}
        </p>
        <a href={t("roadmap.1.link")} target="_blank" rel="noopener noreferrer" className="text-accent-orange underline hover:opacity-80 transition-opacity mt-2 inline-block break-all">
          {t("roadmap.1.link")}
        </a>
      </>
    ),
    align: "left",
  },
  {
    number: "2",
    date: t("roadmap.2.date"),
    content: (
      <p>
        {t("roadmap.2.content").replace("onchain (Web3)", "")}<span className="text-text-primary">onchain (Web3)</span>{" "}
      </p>
    ),
    align: "right",
  },
  {
    number: "3",
    date: t("roadmap.3.date"),
    content: (
      <p>
        <strong className="font-bold text-text-primary">AMAzone COOP30 – Temporary Autonomous Zone:</strong> {t("roadmap.3.content")}
      </p>
    ),
    align: "left",
  },
  {
    number: "4",
    date: t("roadmap.4.date"),
    content: (
      <p>
        <strong className="font-bold text-text-primary">AMAzone POC30 – Permaculture Autonomous Zone:</strong> {t("roadmap.4.content")}
      </p>
    ),
    align: "right",
  },
];

const MilestoneItem = ({ date, content, number, align }: Milestone) => {
  const isLeft = align === 'left';

  const ContentBlock = () => (
    <>
      <p className="text-lg text-text-primary">{date}</p>
      <div className="mt-2 text-base leading-relaxed text-text-secondary">
        {content}
      </div>
    </>
  );

  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-x-6 md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
      {/* Desktop: Left Column */}
      {isLeft ? (
        <div className="hidden text-right md:block">
          <ContentBlock />
        </div>
      ) : (
        <div className="hidden md:block" /> /* Spacer */
      )}

      {/* Center Marker */}
      <div className="z-10 flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-primary-foreground">
          {number}
        </div>
      </div>

      {/* Desktop: Right Column / Mobile: Main Content Column */}
      <div className={isLeft ? 'md:hidden' : ''}>
        <ContentBlock />
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  const { t } = useLanguage();
  const milestones = makeMilestones(t);
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl text-text-primary md:text-5xl">
          {t('roadmap.title')}
        </h2>
        <div className="relative mt-20">
          <div
            className="absolute top-6 bottom-6 left-6 w-0.5 bg-primary/80 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-y-16">
            {milestones.map((item) => (
              <MilestoneItem key={item.number} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
