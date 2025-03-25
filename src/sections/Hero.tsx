import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Louis1images from "@/assets/images/Louis1-images.jpg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
import { ScrollButtons } from "@/components/ScrollBtn";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-32 md:py-48 lg:py-60 bg-gradient-to-b from-yellow-950 to-gray-950 relative z-0 overflow-x-clip">
      {/* Grain background */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      
      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[620, 820, 1020, 1220].map((size, i) => (
          <div 
            key={i}
            className={`absolute rounded-full border border-white/10 animate-pulse`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Central large star */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <StarIcon className="size-24 text-yellow-300 animate-pulse-slow" />
      </div>

      {/* Animated star orbits */}
      {/* Large outer stars */}
      <HeroOrbit size={1200} rotation={-45} duration={120} pulse>
        <StarIcon className="size-28 text-yellow-300/80 animate-pulse" />
      </HeroOrbit>
      <HeroOrbit size={1300} rotation={25} duration={150} reverse>
        <StarIcon className="size-20 text-yellow-300/60" />
      </HeroOrbit>

      {/* Medium stars */}
      <HeroOrbit size={800} rotation={-15} duration={90} twinkle>
        <StarIcon className="size-16 text-yellow-300/70" />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={45} duration={110} reverse twinkle>
        <StarIcon className="size-12 text-yellow-300/50" />
      </HeroOrbit>
      <HeroOrbit size={1000} rotation={-25} duration={130}>
        <StarIcon className="size-14 text-yellow-300/40" />
      </HeroOrbit>
      <HeroOrbit size={1000} rotation={-50} duration={45}>
        <StarIcon className="size-14 text-yellow-300/40" />
      </HeroOrbit>

      {/* Small stars */}
      <HeroOrbit size={400} rotation={15} duration={80} reverse twinkle>
        <StarIcon className="size-8 text-yellow-300/30" />
      </HeroOrbit>
      <HeroOrbit size={500} rotation={-35} duration={100} twinkle>
        <StarIcon className="size-10 text-yellow-300/40" />
      </HeroOrbit>
      <HeroOrbit size={600} rotation={55} duration={70} reverse>
        <StarIcon className="size-6 text-yellow-300/20" />
      </HeroOrbit>

      {/* Additional small twinkling stars */}
      {Array.from({ length: 12 }).map((_, i) => (
        <HeroOrbit 
          key={`small-${i}`}
          size={300 + Math.random() * 1000} 
          rotation={Math.random() * 360}
          duration={80 + Math.random() * 100}
          reverse={Math.random() > 0.5}
          twinkle
        >
          <StarIcon className={`size-${Math.floor(4 + Math.random() * 6)} text-yellow-300/${Math.floor(10 + Math.random() * 30)}`} />
        </HeroOrbit>
      ))}

      {/* Content */}
      <div className="container z-10 relative">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 relative">
            <Image
              src={Louis1images}
              alt="Person peeking from behind laptop"
              layout="fill"
              objectFit="cover"
              className="rounded-full size-10 border border-white/90 shadow-[0_0_20px_rgba(72,187,255,0.6)] animate-float"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg mt-3">
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse-fast"></div>
            <div className="text-sm font-medium">Available for New Project</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi my name is Louis
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            This is my portfolio website, showcasing my work. I developed it entirely myself. Thanks for visiting—hope we get to work together!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <ScrollButtons />
        </div>
      </div>
    </div>
  );
};