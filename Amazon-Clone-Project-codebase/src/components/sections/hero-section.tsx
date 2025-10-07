import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-primary">
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/80 to-background-primary" />
      
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/ae65513d-3168-4f6d-b890-656785ecda48-1.png"
          alt="AMAZONE hexagonal tech-tree logo"
          width={350}
          height={300}
          className="mb-8"
          priority
        />
        <h1 className="font-display text-5xl uppercase tracking-[0.15em] text-text-primary">
          AMAZONE
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;