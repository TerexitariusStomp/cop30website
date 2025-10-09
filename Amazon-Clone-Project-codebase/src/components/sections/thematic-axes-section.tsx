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
    title: 'Ecological Jurisprudence, Rights of Nature, common use of the land, sea and space. Autonomous Beings & Territories',
    description: ''
  },
  {
    icon: Trees,
    title: 'Preservation and Restoration of Forests, Mangroves, Savannas, Oceans, and Ecosystems',
    description: ''
  },
  {
    icon: Recycle,
    title: 'Circular Bioconomy, Commons, Holistic Management, Minimalism & Post-Growth',
    description: ''
  },
  {
    icon: Landmark,
    title: 'Bioregional Funds, Natural Capital, Regenerative Finance (ReFi) and Green Asset Generation',
    description: ''
  },
  {
    icon: Carrot,
    title: 'Health Food sovereignty, Agriforestry, Syntropic Farming, Regenerative Cattle and Family Agriculture',
    description: ''
  },
  {
    icon: Blocks,
    title: 'Liquid Democracy, Gamification(Play2Earn), XR & Blockchain',
    description: ''
  },
  {
    icon: Palette,
    title: 'Art, Culture, and Living Learning(Free Education)',
    description: ''
  },
  {
    icon: Users,
    title: 'Gender equanimity, youth and social development',
    description: ''
  },
  {
    icon: Tent,
    title: 'Indigenous Culture, Wisdom, Healings, Land and Space rights',
    description: ''
  },
  {
    icon: Handshake,
    title: 'Conflict Resolution,  Dialogues for Peace (Ahimsa),  Roerich Pact and Banner of Peace',
    description: ''
  },
  {
    icon: Building2,
    title: 'Smart, Sustainable & Regenerative Cities, Ecovillages and Neighborhoods',
    description: ''
  },
  {
    icon: BrainCircuit,
    title: 'Conscious; AI, Data Centers, Space exploration and Quantum Computing',
    description: ''
  },
  {
    icon: UtensilsCrossed,
    title: 'Integral Health, Medicines, Practices, Wellness and Self-Knowledge,',
    description: ''
  },
  {
    icon: Droplet,
    title: 'Sanitation credits, Water treatment & management',
    description: ''
  },
  {
    icon: UsersRound,
    title: 'Platform cooperativism, bioregionalism, systemic change and network societies',
    description: ''
  },
];

const ThematicAxesSection = () => {
  return (
    <div className="bg-background-primary text-text-primary">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[2.625rem] leading-[1.3] text-text-primary text-center mb-12">
            Thematic Axes
          </h2>
          <div className="flex items-center justify-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="https://hackmd.io/_uploads/S1U6n4Hagl.jpg"
                alt="Left thematic image"
                className="w-32 h-32 object-contain rounded-lg"
              />
            </div>
            <p className="text-lg leading-8 text-text-secondary text-center max-w-md">
              The AMAzone COOP30 program integrates the central themes of{' '}
              <span className="text-accent-orange underline">
                glocal regeneration
              </span>
              :
            </p>
            <div className="flex-shrink-0">
              <img
                src="https://hackmd.io/_uploads/r1Iph4B6xe.jpg"
                alt="Right thematic image"
                className="w-32 h-32 object-contain rounded-lg"
              />
            </div>
          </div>
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
                {axe.title + (axe.description ? ' ' + axe.description : '')}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThematicAxesSection;