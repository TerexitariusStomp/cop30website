import React from 'react';

type Milestone = {
  number: string;
  date: string;
  content: React.ReactNode;
  align: 'left' | 'right';
};

const milestones: Milestone[] = [
  {
    number: "1",
    date: "October 23–24 – São Paulo",
    content: (
      <>
        <p>
          <strong className="font-bold text-text-primary">PATH to COOP30</strong> – Caravans Gathering Pre-COP at Path Festival.
        </p>
        <a href="https://festivalpath.com.br/" target="_blank" rel="noopener noreferrer" className="text-accent-orange underline hover:opacity-80 transition-opacity mt-2 inline-block break-all">
          https://festivalpath.com.br/
        </a>
      </>
    ),
    align: "left",
  },
  {
    number: "2",
    date: "November 1 – Belém",
    content: (
      <p>
        Launch of the AMAzone.network platform: a gamified phygital platform to map and develop projects in network; promote events, courses, training, crowdfunding, marketplace, and streaming with <span className="text-text-primary">onchain (Web3)</span> integration.
      </p>
    ),
    align: "right",
  },
  {
    number: "3",
    date: "November 5–21 – Belém (TAZ)",
    content: (
      <p>
        <strong className="font-bold text-text-primary">AMAzone COOP30 – Temporary Autonomous Zone:</strong> A Regenerative Future Territory; a cultural, scientific, and regenerative village integrated with the Indigenous Camp and neighboring the People's Summit.
      </p>
    ),
    align: "left",
  },
  {
    number: "4",
    date: "November 23–29 – Breves – Marajó Island (PAZ)",
    content: (
      <p>
        <strong className="font-bold text-text-primary">AMAzone POC30 – Permaculture Autonomous Zone:</strong> A permacultural autonomous zone where we will test regenerative practices and present data through a <strong className="font-bold text-text-primary">DeSci (Decentralized Science)</strong> methodology. Formation of the 0r1Gen Think & DAO Tank and training of the <strong className="font-bold text-text-primary">AMAzone Guardians</strong>, who will be agents of conservation and restoration of the Amazon Biome, integrated with the creation of the <strong className="font-bold text-text-primary">BiomaH Credit</strong>, endorsed by Dr. Carlos Nobre.
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
  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl text-text-primary md:text-5xl">
          Road Map to AMAz<span className="font-bold">one</span>
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