import BlurText from "./BlurText";
import { motion } from "framer-motion";
import tarunHeroBg from "@/assets/tarun-hero-bg.jpg";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-outfit">
      {/* Portrait image with lighten blend to show light rays through */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(30px)", scale: 1.05 }}
        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute inset-0 z-[5] flex items-center justify-center"
        style={{ mixBlendMode: "lighten" }}
      >
        <img
          src={tarunHeroBg}
          alt="Tarun Sasirekha"
          className="h-full w-auto max-w-none object-cover object-center"
        />
      </motion.div>

      {/* TOP LEFT - Title Block */}
      <div className="absolute top-16 md:top-24 lg:top-32 left-8 md:left-16 lg:left-24 z-20">
        <div className="flex flex-col items-start relative">
          <BlurText
            text="ELECTRICAL"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90"
            delay={600}
            animateBy="words"
            direction="bottom"
            stepDuration={1.0}
          />
          <BlurText
            text="ENGINEER"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-400"
            delay={800}
            animateBy="words"
            direction="bottom"
            stepDuration={1.0}
          />

          {/* Subtitle / Harvard Tag */}
          <div className="mt-4 inline-flex items-center gap-3 opacity-80">
            <span className="text-base md:text-lg font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 uppercase">@HARVARD</span>
            <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </div>
        </div>
      </div>

      {/* BOTTOM RIGHT - Name Block */}
      <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 right-8 md:right-16 lg:right-24 z-20">
        <div className="flex flex-col items-end relative">
          <BlurText
            text="TARUN"
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white drop-shadow-2xl"
            delay={100}
            animateBy="letters"
            stepDuration={1.0}
          />
          <BlurText
            text="SASIREKHA"
            className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-purple-400 mt-[-5px] md:mt-[-8px]"
            delay={300}
            animateBy="letters"
            stepDuration={1.0}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default PortfolioHero;
