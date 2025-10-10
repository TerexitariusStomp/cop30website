import React from 'react';
import Image from 'next/image';

const LocationSection: React.FC = () => {
  const listItems = [
    "Camping & Glamping Zones",
    "Indigenous Village & Village of Love",
    "Altar of Intentions - Art Installation for Prayer, Ceremonies & Structured Water",
    "HUBiomaH – Innovation and Bioeconomy",
    "Startup Societies Village – Ethical AI, Web3 and DAO",
    "G.A.I.A. Village – Articulation of Autonomous Territories and EcoVillage Network",
    "AMAzone Guardians' Camp – Regenerative Leadership Training",
  ];

  return (
    <div className="bg-background-primary">
      <div className="container mx-auto py-24 px-6 md:px-8">
        <h2 className="text-center font-display text-4xl text-text-primary mb-16">
          Location: AMAzone Village
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">
              Venue Details
            </h3>
            <div className="space-y-6 text-base text-text-secondary leading-relaxed">
              <p>
                <strong className="font-semibold text-text-primary">Venue:</strong> Espaço Nautiko – Guamá Riverfront, Belém (PA) – next door to UFPA
              </p>
              <p>
                The venue will be a living TAZ(Temporary Autonomous Zone), featuring camping, glamping, a main stage, restaurants, art gallery, wellness tent, plenary, exhibition booths, multimedia art, and community areas. The site will include <strong className="font-semibold text-text-primary">waste management and greywater treatment</strong> .
              </p>
              <div className="mt-8">
                <img
                  src="https://hackmd.io/_uploads/SyUBG1U6xl.jpg"
                  alt="Venue image"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-body text-[1.75rem] leading-tight font-medium text-text-primary mb-6">
              Camps & Thematic Villages
            </h3>
            <div className="space-y-4 text-base text-text-secondary leading-relaxed">
              <p>
                The territory will be divided into villages and experience zones, including:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-3 marker:text-accent-coral marker:text-xl">
                {listItems.map((item, index) => (
                  <li key={index} className="pl-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;