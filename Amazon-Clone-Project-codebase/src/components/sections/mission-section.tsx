import React from 'react';

const MissionSection = () => {
  const missionItems = [
    "Regenerative Design",
    "Holistic Management",
    "Systemic Thinking",
    "Art and Activism",
    "Bioeconomy",
    "Conscious AI, Web3 & Technology",
    "Open Innovation",
    "Ancestral Knowledge",
  ];

  return (
    <section className="bg-background-primary py-24 sm:py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-[42px] leading-tight text-accent-coral">
            *Mission
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-primary">
            To activate autonomous territories(lands without borders) and build a{' '}
            <strong className="font-bold">phygital (physical + digital)</strong>{' '}
            network of{' '}
            <span className="text-accent-orange">
              Guardians of G.A.I.A. (Great Alliance of Integrity &amp; Autonomy)
            </span>
            , integrating;
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