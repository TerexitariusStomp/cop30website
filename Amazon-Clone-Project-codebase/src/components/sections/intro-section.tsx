import Image from 'next/image';

const IntroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background-primary py-24 sm:py-32">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/a3df5ydei145m46/011703b718f4415d970644b183860572/original/ae65513d-3168-4f6d-b890-656785ecda48.png"
          alt="Wooden boats on a calm river, evoking a sense of tranquility and connection to nature."
          layout="fill"
          objectFit="cover"
          quality={80}
          unoptimized
        />
        <div className="absolute inset-0 bg-background-primary/80" />
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <p className="text-lg leading-loose text-text-primary">
            The AMAzone COOP30 is a Temporary Autonomous Zone (TAZ) connected to the
            People's Summit and the Indigenous and Quilombola Camp at COP30, located
            on the Guamá River, in Belém (PA), from November 5th to 22nd, 2025. We
            are a living bridge between ancestry and innovation, bringing together
            cooperatives, associations, startups, artists, activists, scientists,
            impact investors, and communities in an experience of{' '}
            <span className="text-accent-coral">
              cooperation, regeneration and culture
            </span>
            .
          </p>

          <blockquote className="mt-8">
            <p className="text-xl">
              "Here, integrity is the axis, autonomy is the path, and love is the
              law."
            </p>
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-block rounded-md bg-button-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Join the Network
            </a>
            <a
              href="#"
              className="inline-block rounded-md border-2 border-accent-coral bg-transparent px-8 py-3 text-base font-semibold text-accent-coral shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-accent-coral/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Connected Boat Initiatives
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.global-impact-alliance.org/cop30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-accent-coral bg-transparent px-4 py-2 text-sm font-medium text-accent-coral shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-accent-coral/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Global Impact Alliance COP30
              </a>
              <a
                href="https://www.instagram.com/reel/DBCyMFJuM5o/?igsh=MXE1YzhyNmtoOXpnMg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-accent-coral bg-transparent px-4 py-2 text-sm font-medium text-accent-coral shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-accent-coral/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Hope Boat Initiative
              </a>
              <a
                href="/cop30website/pdf/Hope Boat COP30 - FAS 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-accent-coral bg-transparent px-4 py-2 text-sm font-medium text-accent-coral shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-accent-coral/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Hope Boat COP30 PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;