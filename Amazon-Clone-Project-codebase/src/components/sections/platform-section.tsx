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
    title: "Map & Develop Projects",
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
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, image }) => {
  return (
    <div className="bg-[rgba(42,74,74,0.5)] p-8 rounded-lg border border-white/10 flex flex-col items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mb-2">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="text-xl font-semibold text-text-primary">{title}</h4>
      <p className="text-text-secondary text-[0.95rem] leading-relaxed">{description}</p>
      {image && (
        <div className="mt-auto">
          <img
            src={image}
            alt={`${title} image`}
            className="w-16 h-16 object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

const PlatformSection = () => {
  return (
    <section id="platform" className="py-24 sm:py-32 bg-background-primary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[42px] font-light text-text-primary mb-6">
              AMAzone.network Platform
            </h2>
            <p className="text-lg text-text-primary">
              The AMAzone.network is the <span className="text-primary">phygital platform</span> of the movement and the permanent ecosystem of the community.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://hackmd.io/_uploads/BJIBz1Uplx.jpg"
              alt="AMAzona network platform"
              className="w-full h-auto rounded-lg object-contain max-w-md"
            />
          </div>
        </div>

        <h3 className="text-xl text-text-primary mb-10">
          Main Features:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
          <div className="absolute bottom-0 right-0">
            <img
              src="https://hackmd.io/_uploads/HJLBGk8Tlg.jpg"
              alt="Platform additional image"
              className="w-32 h-32 object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;