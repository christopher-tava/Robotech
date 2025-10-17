import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
