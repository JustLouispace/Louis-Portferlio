import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Louis1images from "@/assets/images/Louis1-images.jpg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32  md:py-48 lg:py-60 bg-gradient-to-b from-yellow-950 to-gray-950 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] md:size-[720px] lg:size-[820px]  hero-ring"></div>
      <div className="size-[820px] md:size-[1020px] lg:size-[1220px] hero-ring"></div>
      <div className="size-[1020px] md:size-[1320px] lg:size-[1620px] hero-ring"></div>
      <div className="size-[1220px] md:size-[1620px] lg:size-[2020px] hero-ring"></div>
      <HeroOrbit size={1200} rotation={-45}>
        <StarIcon className="size-28 text-yellow-300 " />
      </HeroOrbit>
      <HeroOrbit size={400} rotation={-15}>
        <StarIcon className="size-10 text-yellow-300/5 " />
      </HeroOrbit>
      <HeroOrbit size={1000} rotation={-25}>
        <StarIcon className="size-12 text-yellow-300/5 " />
      </HeroOrbit>
      <HeroOrbit size={500} rotation={15}>
        <StarIcon className="size-17 text-yellow-300 " />
      </HeroOrbit>
      <HeroOrbit size={1100} rotation={85}>
        <StarIcon className="size-17 text-yellow-300 " />
      </HeroOrbit>
      <HeroOrbit size={1100} rotation={125}>
        <StarIcon className="size-15 text-yellow-300 " />
      </HeroOrbit>
      <HeroOrbit size={1100} rotation={145}>
        <StarIcon className="size-20 text-yellow-300/5 " />
      </HeroOrbit>
      <HeroOrbit size={900} rotation={215}>
        <StarIcon className="size-14 text-yellow-300/5 " />
      </HeroOrbit>

      <div className="container z-10">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 md:w-48 md:h-48 lg:w-72 lg:h-72 relative">
            <Image
              src={Louis1images}
              alt="Person peeking from behind laptop"
              layout="fill" // ทำให้ภาพปรับตามขนาด container
              objectFit="cover" // ทำให้ภาพถูกตัดขอบเพื่อคงสัดส่วน
              className="rounded-full size-10 border border-white/90 shadow-[0_0_20px_rgba(72,187,255,0.6)]"
            />
          </div>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg mt-3">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">Available for New Project</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>😀</span>
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
