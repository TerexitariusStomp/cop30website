import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background-primary">
      
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9dbff3c-828d-4087-a500-734899d703f7-amazone-coop30-on77bsx-gamma-site/assets/images/ae65513d-3168-4f6d-b890-656785ecda48-1.png"
          alt={t("hero.alt")}
          width={400}
          height={350}
          className="mb-10"
          priority
        />
        <h1 className="font-display text-6xl uppercase tracking-[0.2em] text-text-primary mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-xl text-text-primary font-light tracking-wide">
          {t("hero.tagline")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
