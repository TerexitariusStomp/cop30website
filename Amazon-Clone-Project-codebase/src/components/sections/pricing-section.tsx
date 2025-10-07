import React from 'react';

interface TicketTier {
  category: React.ReactNode;
  value: string;
  includes: string;
  isLink?: boolean;
}

const ticketData: TicketTier[] = [
  {
    category: "AMAzone Pass",
    value: "FREE",
    includes: "General access + open experiences",
    isLink: true,
  },
  {
    category: "Camping",
    value: "30 (personal tent) / 50 (our tent) / 70 (with tent + inflatable mattress) per day",
    includes: "Collective space + bathroom + community kitchen",
  },
  {
    category: "Glamping",
    value: "100 / day",
    includes: "Equipped tent + energy + comfort",
  },
  {
    category: "Motorhome / Trailer",
    value: "50 / day",
    includes: "Parking with water and energy",
  },
  {
    category: "Lecture / Show Space",
    value: "600 / day",
    includes: "Stage + sound + staff",
  },
  {
    category: "Booth / Exhibition",
    value: "2000 (Nov 5–22 package)",
    includes: "3x3m space tent + power + promotion",
  },
  {
    category: (
      <>
        Art Exhibition*
        <span className="block text-xs font-normal text-text-secondary mt-1">
          (upon approval by the curatorial board)
        </span>
      </>
    ),
    value: "1,000 / 15 days of exibition",
    includes: "Pavillon of Art + 2 cocktails + communication",
  },
  {
    category: "Restaurants / Food Hubs",
    value: "2,000 + % of sales",
    includes: "Fixed space + media visibility",
  },
  {
    category: "Sponsorship Packages",
    value: "5k – 500k",
    includes: "Activations, panels, and COP30 branding",
  },
];

const PricingSection = () => {
  return (
    <div className="bg-background-primary text-text-primary py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-display text-4xl lg:text-5xl text-center text-text-primary mb-12 lg:mb-16">
          Values and Tickets
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] border-collapse text-left">
            <thead className="bg-[#3a5454]">
              <tr>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">Category</th>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">Value (U$)</th>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">Includes</th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((tier, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border-subtle odd:bg-transparent even:bg-white/[.03]"
                >
                  <td className={`p-4 align-top font-semibold text-sm md:text-base ${tier.isLink ? 'text-accent-coral' : 'text-text-primary'}`}>
                    {tier.isLink ? (
                      <a href="#" className="underline hover:opacity-80 transition-opacity">
                        {tier.category}
                      </a>
                    ) : (
                      tier.category
                    )}
                  </td>
                  <td className="p-4 align-top text-sm md:text-base text-text-primary">
                    {tier.value}
                  </td>
                  <td className="p-4 align-top text-sm md:text-base text-text-primary">
                    {tier.includes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;