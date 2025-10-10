import React from 'react';

const VisionSection = () => {
  return (
    <section className="bg-background-primary py-12 mt-16" style={{ backgroundImage: `url('https://hackmd.io/_uploads/S1IBzkITll.jpg')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
      <div className="container">
        <h2 className="font-display text-primary text-[2.5rem] leading-none mb-8">
          Vision
        </h2>
        <p className="text-text-primary/90 text-xl max-w-4xl font-light leading-relaxed">
          The AMA<span className="font-bold">ZONE</span> Village is a socio-cultural experiment that demonstrates, in practice, how <strong className="font-semibold text-text-primary">good living, permaculture, science, art, technology and spirituality</strong> can walk together towards a regenerative future. It is a living demonstration of how the indigenous and intentional communities can inspire a future model based on <strong className="font-semibold text-text-primary">integrity, autonomy, resilience and interdependence.</strong>
        </p>
      </div>
    </section>
  );
};

export default VisionSection;