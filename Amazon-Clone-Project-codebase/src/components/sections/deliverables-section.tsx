import React from 'react';
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

const DeliverableItem = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="flex flex-col sm:flex-row items-start gap-6">
    <div className="flex-shrink-0 w-16 h-16 bg-[#E89B7C] rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-[#1f3d3d]" />
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold font-body text-text-primary">{title}</h3>
      <p className="mt-2 text-base text-text-secondary leading-relaxed">{description}</p>
    </div>
  </div>
);

const DeliverablesSection = () => {
  return (
    <section style={{ backgroundColor: '#E89B7C' }} className="py-24 sm:py-32">
      <div className="container">
        <div className="bg-[#1f3d3d] rounded-2xl shadow-lg p-12">
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
              />
            ))}
          </div>
          <div className="mt-12">
            <Image
              src="/images/photo2.png"
              alt="BIOHMA pavilion"
              width={800}
              height={300}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;