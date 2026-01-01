import LightPillar from "./LightPillar";
import BlurText from "./BlurText";

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden font-outfit">
      {/* WebGL Background */}
      <LightPillar
        topColor="#8C7EF7"
        bottomColor="#000000"
        pillarRotation={15}
        intensity={1.2}
        glowAmount={0.006}
        pillarWidth={2.5}
        pillarHeight={0.5}
        rotationSpeed={0.2}
      />

      {/* TOP LEFT: Name Block */}
      <div className="absolute top-16 md:top-24 lg:top-32 left-8 md:left-16 lg:left-24 z-20">
        <div className="flex flex-col items-start">
          <BlurText
            text="TARUN"
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl"
            delay={100}
            animateBy="letters"
            stepDuration={0.8}
          />
          <BlurText
            text="SASIREKHA"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-400 mt-[-5px] md:mt-[-10px]"
            delay={300}
            animateBy="letters"
            stepDuration={0.8}
          />
        </div>
      </div>

      {/* BOTTOM RIGHT: Title Block */}
      <div className="absolute bottom-16 md:bottom-24 lg:bottom-32 right-8 md:right-16 lg:right-24 z-20">
        <div className="flex flex-col items-end">
          <BlurText
            text="ELECTRICAL"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90"
            delay={600}
            animateBy="words"
            direction="bottom"
            stepDuration={1}
          />
          <BlurText
            text="ENGINEER"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-purple-400"
            delay={800}
            animateBy="words"
            direction="bottom"
            stepDuration={1}
          />

          {/* Subtitle / Harvard Tag */}
          <div className="mt-4 inline-flex items-center gap-3 opacity-80">
            <span className="text-base md:text-lg font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300 uppercase">@HARVARD</span>
            <span className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-blue-500"></span>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[5]" />
    </section>
  );
};

export default PortfolioHero;
