import React from 'react';
import Image from 'next/image';
import { Gamepad2, Network, Sprout, Shield, Archive } from 'lucide-react';

const deliverables = [
  {
    icon: Gamepad2,
    title: "AMAzone Think & DAO Tank",
    description: "Decentralized governance of the ecosystem",
  },
  {
    icon: Network,
    title: "Regenerative Confederation of G.A.I.A",
    description: "(Great Alliance for Integrity and Autonomy) — Network of cooperatives, associations, and movements",
  },
  {
    icon: Sprout,
    title: "BiomaH Credits",
    description: "New metric and asset based on holistic land management and data mined by humans and AI",
  },
  {
    icon: Shield,
    title: "AMAzone Guardians Network",
    description: "Training and certification of regenerative leaders to protect and originate BiomaH credits and green assets",
  },
  {
    icon: Archive,
    title: "AMAzone Cartography- Living Archive of the Amazon Communities",
    description: "Data, art, medicines and stories from the Amazon territories",
  },
];

const DeliverableItem = ({ icon: Icon, title, description, showImage = false }: { icon: React.ElementType; title: string; description: string; showImage?: boolean }) => (
  <div className="flex flex-col lg:flex-row items-start gap-6">
    <div className="flex-shrink-0 w-16 h-16 bg-[#E89B7C] rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-[#1f3d3d]" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold font-body text-text-primary">{title}</h3>
      <p className="mt-2 text-base text-text-secondary leading-relaxed">{description}</p>
    </div>
    {showImage && (
      <div className="flex-shrink-0">
        <img
          src="https://hackmd.io/_uploads/ByLT24r6ex.jpg"
          alt="Deliverables image"
          className="w-32 h-32 object-contain rounded-lg"
        />
      </div>
    )}
  </div>
);

const DeliverablesSection = () => {
  return (
    <section style={{ backgroundImage: `url('https://hackmd.io/_uploads/H1ITnEr6lx.jpg')`, backgroundColor: '#E89B7C', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'multiply' }} className="py-24 sm:py-32">
      <div className="container">
        <div className="bg-[#1f3d3d]/90 rounded-2xl shadow-lg p-12 backdrop-blur-sm">
          <h2 className="text-center font-display text-[2.5rem] leading-tight text-text-primary mb-16">
            Deliverables and Legacy
          </h2>
          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <DeliverableItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                showImage={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;