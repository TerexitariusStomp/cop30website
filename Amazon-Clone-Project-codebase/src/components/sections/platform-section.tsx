import { HeartPulse, MapPin, Users, Sparkles, Leaf, ShoppingBag, Radio } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: HeartPulse,
    title: "Social Impact",
    description: "Gamified impact social network",
  },
  {
    icon: MapPin,
    title: "Map ad Dev Projects",
    description: "Dashboard to map and develop projects, actions, communities and events during and beyond COP30",
  },
  {
    icon: Users,
    title: "DAO Governance",
    description: "Participatory DAO governance system",
  },
  {
    icon: Sparkles,
    title: "Symbolic Exchange",
    description: "Symbolic exchange and donation system",
  },
  {
    icon: Leaf,
    title: "Green Assets",
    description: "Issuance and commercialization of green assets",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Bioeconomy marketplace and regenerative project crowdfunding",
  },
  {
    icon: Radio,
    title: "Digital Learning",
    description: "Streaming, online courses, and communities",
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-[rgba(42,74,74,0.5)] p-8 rounded-lg border border-white/10 flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-2">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="text-xl font-semibold text-text-primary">{title}</h4>
      <p className="text-text-secondary text-[0.95rem] leading-relaxed">{description}</p>
    </div>
  );
};

const PlatformSection = () => {
  return (
    <section id="platform" className="py-24 sm:py-32 bg-background-primary">
      <div className="container">
        <h2 className="text-[42px] font-light text-text-primary mb-6">
          <a href="http://AMAzone.network" className="text-primary underline decoration-primary underline-offset-4 hover:opacity-80">
            AMAzone.network
          </a>
          <span> Platform</span>
        </h2>

        <p className="text-lg text-text-primary max-w-4xl mb-12">
          The <a href="http://AMAzone.network" className="text-accent-orange hover:opacity-80 underline">AMAzone.network</a> is the <span className="text-primary">phygital plataform</span> of the movement and the <a href="#" className="text-accent-orange hover:opacity-80 underline">permanent ecosystem</a> of the community.
        </p>

        <h3 className="text-xl text-text-primary mb-10">
          Main Features:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;