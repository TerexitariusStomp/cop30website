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

type ThematicAxe = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const thematicAxes: ThematicAxe[] = [
  {
    icon: Sprout,
    title: 'Ecological Jurisprudence',
    description:
      'Rights of Nature, common use of the land, sea and space. Autonomous Beings & Territories',
  },
  {
    icon: Trees,
    title: 'Preservation and Restoration of Forests',
    description: 'Mangroves, Savannas, Oceans, and Ecosystems',
  },
  {
    icon: Recycle,
    title: 'Circular Bioeconomy',
    description: 'Commons, Holistic Management, Minimalism & Post-Growth',
  },
  {
    icon: Landmark,
    title: 'Bioregional Funds',
    description:
      'Natural Capital, Regenerative Finance (ReFi) and Green Asset Generation',
  },
  {
    icon: Carrot,
    title: 'Health, Food Sovereignty',
    description:
      'Agroforestry, Syntropic Farming, Regenerative Cattle, and Family Agriculture',
  },
  {
    icon: Blocks,
    title: 'Liquid Democracy',
    description: 'Gamification (Play2Earn), XR & Blockchain',
  },
  {
    icon: Palette,
    title: 'Art, Culture, and Living Learning',
    description: '(Free Education)',
  },
  {
    icon: Users,
    title: 'Gender Equanimity',
    description: 'Youth and Social Development',
  },
  {
    icon: Tent,
    title: 'Indigenous Culture',
    description: 'Wisdom, Healings, Land and Space Rights',
  },
  {
    icon: Handshake,
    title: 'Conflict Resolution',
    description:
      'Dialogues for Peace (Ahimsa), Roerich Pact and Banner of Peace',
  },
  {
    icon: Building2,
    title: 'Smart, Sustainable & Regenerative Cities',
    description: 'Ecovillages and Neighborhoods',
  },
  {
    icon: BrainCircuit,
    title: 'Conscious AI',
    description: 'Data Centers, Space Exploration, and Quantum Computing',
  },
  {
    icon: UtensilsCrossed,
    title: 'Integral Health',
    description: 'Medicines, Practices, Wellness, and Self-Knowledge',
  },
  {
    icon: Droplet,
    title: 'Sanitation Credits',
    description: 'Water Treatment & Management',
  },
  {
    icon: UsersRound,
    title: 'Platform Cooperativism',
    description: 'Bioregionalism, Systemic Change, and Network Societies',
  },
];

const ThematicAxesSection = () => {
  return (
    <div className="bg-background-primary text-text-primary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[2.625rem] leading-[1.3] text-text-primary">
            Thematic Axes
          </h2>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            The AMAzone COOP30 program integrates the central themes of{' '}
            <span className="text-accent-orange underline">
              glocal regeneration
            </span>
            :
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
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
                {axe.title}
              </h3>
              <p className="mt-2 flex-auto text-base leading-7 text-muted-foreground">
                {axe.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThematicAxesSection;