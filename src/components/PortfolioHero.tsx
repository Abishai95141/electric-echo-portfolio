import LightPillar from "./LightPillar";
import BlurText from "./BlurText";
import { motion } from "framer-motion";
import tarunPortrait from "@/assets/tarun-portrait.jpg";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden font-outfit">
      {/* WebGL Background */}
      <LightPillar
        topColor="#8C7EF7"
        bottomColor="#000000"
        pillarRotation={15}
        intensity={0.4}
        glowAmount={0.003}
        pillarWidth={2.0}
        pillarHeight={0.4}
        rotationSpeed={0.2}
      />

      {/* TOP LEFT: Title Block */}
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

      {/* BOTTOM RIGHT: Portrait + Name Block */}
      <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 right-8 md:right-16 lg:right-24 z-20">
        <div className="flex flex-col items-end relative">
          {/* Portrait Image with blur animation */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="mb-4 md:mb-6"
          >
            <img
              src={tarunPortrait}
              alt="Tarun Sasirekha"
              className="w-40 h-52 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover object-top rounded-lg shadow-2xl shadow-purple-500/20"
            />
          </motion.div>

          {/* Name Text */}
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

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[5]" />
    </section>
  );
};

export default PortfolioHero;
