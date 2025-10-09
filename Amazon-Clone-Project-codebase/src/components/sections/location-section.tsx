import React from 'react';
import { BookOpen, BrainCircuit, Globe, Leaf, Palette, Tent, UsersRound } from 'lucide-react';

const LocationSection: React.FC = () => {
type LocationItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const locations: LocationItem[] = [
  {
    icon: Tent,
    title: "Camping & Glamping Zones",
    description: ""
  },
  {
    icon: UsersRound,
    title: "Indigenous Village & Village of Love",
    description: ""
  },
  {
    icon: Palette,
    title: "Altar of Intentions - Art Installation for Prayer, Ceremonies & Structured Water",
    description: ""
  },
  {
    icon: Leaf,
    title: "HUBiomaH – Innovation and Bioeconomy",
    description: ""
  },
  {
    icon: BrainCircuit,
    title: "Startup Societies Village – Ethical AI, Web3 and DAO",
    description: ""
  },
  {
    icon: Globe,
    title: "G.A.I.A. Village – Articulation of Autonomous Territories and EcoVillage Network",
    description: ""
  },
  {
    icon: BookOpen,
    title: "AMAzone Guardians' Camp – Regenerative Leadership Training",
    description: ""
  },
];

  return (
    <div className="bg-background-primary text-text-primary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2.625rem] leading-[1.3] text-text-primary">
            Location: AMAzone Village
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Venue: Espaço Nautiko – Guamá Riverfront, Belém (PA) – next door to UFPA<br />
            The venue will be a living TAZ (Temporary Autonomous Zone), featuring camping, glamping, a main stage, restaurants, art gallery, wellness tent, plenary, exhibition booths, multimedia art, and community areas. The site will include waste management and greywater treatment.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, index) => (
            <div key={index} className="flex flex-col p-6 rounded-lg transition-colors duration-300 hover:bg-background-secondary">
              <div className="mb-6">
                <loc.icon
                  className="h-12 w-12 text-primary"
                  aria-hidden="true"
                  strokeWidth="1.5"
                />
              </div>
              <h3 className="text-xl font-semibold leading-7 text-foreground">
                {loc.title}
              </h3>
              {loc.description && (
                <p className="mt-2 flex-auto text-base leading-7 text-muted-foreground">
                  {loc.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;