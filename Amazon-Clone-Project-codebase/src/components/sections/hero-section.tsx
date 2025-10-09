import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://hackmd.io/_uploads/B1Lp3VB6gl.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/ae65513d-3168-4f6d-b890-656785ecda48-1.png"
          alt="AMAZONE hexagonal tech-tree logo"
          width={400}
          height={350}
          className="mb-10"
          priority
          style={{ filter: 'drop-shadow(1px 1px 2px rgb(151,147,136))' }}
        />
        <h1
          className="font-display text-6xl uppercase tracking-[0.2em] text-text-primary mb-4"
          style={{ textShadow: '1px 1px 2px rgb(151,147,136)' }}
        >
          AMAZONE COOP30
        </h1>
        <p
          className="text-xl text-text-primary font-light tracking-wide"
          style={{ textShadow: '1px 1px 2px rgb(151,147,136)' }}
        >
          In autonomy, we trust
        </p>
      </div>
    </section>
  );
};

export default HeroSection;