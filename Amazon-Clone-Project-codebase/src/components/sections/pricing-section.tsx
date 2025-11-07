import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TicketTier {
  category: React.ReactNode;
  value: string;
  includes: string;
  isLink?: boolean;
}

const ticketDataEn: TicketTier[] = [
  { category: 'Stand / Exhibition', value: 'R$10,000 (11–21 Nov package)', includes: '3x3m tent + power + promotion' },
  {
    category: (
      <>
        Art Exhibition*
        <span className="block text-xs font-normal text-text-secondary mt-1">
          (subject to curatorial approval)
        </span>
      </>
    ),
    value: 'R$5,000 / 11 days',
    includes: 'Art Pavilion + 2 cocktails + communication',
  },
  { category: 'Restaurants / Food Hubs', value: 'R$10,000 + % of sales', includes: 'Fixed space + media visibility' },
  { category: 'Sponsorship Packages', value: 'R$30,000 to R$2,000,000', includes: 'Activations, panels, and COP30 branding' },
];

const ticketDataPt: TicketTier[] = [
  { category: 'Estande / Exposição', value: 'R$10.000 (pacote 11–21 Nov)', includes: 'Tenda 3x3m + energia + promoção' },
  {
    category: (
      <>
        Exposição de Arte*
        <span className="block text-xs font-normal text-text-secondary mt-1">
          (mediante aprovação curatorial)
        </span>
      </>
    ),
    value: 'R$5.000 / 11 dias',
    includes: 'Pavilhão de Arte + 2 coquetéis + comunicação',
  },
  { category: 'Restaurantes / Hubs de Alimentação', value: 'R$10.000 + % das vendas', includes: 'Espaço fixo + visibilidade na mídia' },
  { category: 'Pacotes de Patrocínio', value: 'R$30.000 a R$2.000.000', includes: 'Ativações, painéis e branding COP30' },
];

const PricingSection = () => {
  const { t, language } = useLanguage();
  const ticketData = language === 'pt' ? ticketDataPt : ticketDataEn;
  return (
    <div className="bg-background-primary text-text-primary py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="font-display text-4xl lg:text-5xl text-center text-text-primary mb-12 lg:mb-16">
          {t('pricing.title')}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[768px] border-collapse text-left">
            <thead className="bg-[#3a5454]">
              <tr>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">
                  {t('pricing.th.category')}
                </th>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">
                  {t('pricing.th.value')}
                </th>
                <th scope="col" className="p-4 text-base font-semibold text-text-primary">
                  {t('pricing.th.includes')}
                </th>
              </tr>
            </thead>
            <tbody>
              {ticketData.map((tier, index) => (
                <tr key={index} className="border-b border-border-subtle odd:bg-transparent even:bg-white/[.03]">
                  <td
                    className={`p-4 align-top font-semibold text-sm md:text-base ${
                      tier.isLink ? 'text-accent-coral' : 'text-text-primary'
                    }`}
                  >
                    {tier.isLink ? (
                      <a href="#" className="underline hover:opacity-80 transition-opacity">
                        {tier.category}
                      </a>
                    ) : (
                      tier.category
                    )}
                  </td>
                  <td className="p-4 align-top text-sm md:text-base text-text-primary">{tier.value}</td>
                  <td className="p-4 align-top text-sm md:text-base text-text-primary">{tier.includes}</td>
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
