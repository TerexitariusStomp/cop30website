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

        <h3 className="font-display text-[1.75rem] leading-tight text-accent-coral mb-4 text-center">
          Registration and More Information soon at:
        </h3>

        <div className="flex flex-col gap-1 mb-12 text-center">
          <a href="http://www.amazone.network/taz" target="_blank" rel="noopener noreferrer" className="text-xl text-text-primary no-underline hover:text-accent-coral transition-colors">
            www.amazone.network/taz
          </a>
          <a href="http://www.amazone.network/paz" target="_blank" rel="noopener noreferrer" className="text-xl text-text-primary no-underline hover:text-accent-coral transition-colors">
            www.amazone.network/paz
          </a>
        </div>

        <p className="font-display text-5xl font-thin tracking-widest text-white/10 uppercase mb-4 text-center">
          Join-COOPerate-Regenerate
        </p>

        <p className="text-xl text-text-primary max-w-2xl mb-8 text-center">
          Come to gather and let's build this regenerative future in common unity.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#"
            className="inline-block bg-button-primary text-text-primary px-8 py-3 rounded-md font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Join the Network
          </a>
          <a
            href="#"
            className="inline-block bg-transparent border-2 border-border-subtle text-text-primary px-8 py-3 rounded-md font-semibold text-base hover:bg-white/10 transition-colors"
          >
            Register Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default ClosingQuoteSection;