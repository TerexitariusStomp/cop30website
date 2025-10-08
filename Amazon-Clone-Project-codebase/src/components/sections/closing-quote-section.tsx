import Image from 'next/image';

const ClosingQuoteSection = () => {
  return (
    <section className="bg-background-secondary py-16">
      <div className="max-w-[900px] mx-auto px-6 flex flex-col items-center">
        
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/ae65513d-3168-4f6d-b890-656785ecda48-1.png"
          alt="AMAzone COOP30 Logo"
          width={200}
          height={200}
          className="mb-12"
        />

        <blockquote className="text-2xl italic text-text-primary max-w-3xl w-full mb-12 border-l-[3px] border-accent-coral pl-6 text-left">
          "AMAzone COOP30 is the hope that genuine and regenerative cooperation will come to life in Belém."
        </blockquote>


        <p className="font-display text-5xl font-thin tracking-widest text-white/10 uppercase mb-4 text-center">
          Join-COOPerate-Regenerate
        </p>

        <p className="text-xl text-text-primary max-w-2xl mb-8 text-center">
          Come together and let's build this regenerative future in common unity.
        </p>


      </div>
    </section>
  );
};

export default ClosingQuoteSection;