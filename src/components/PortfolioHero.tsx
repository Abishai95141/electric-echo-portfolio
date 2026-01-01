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

      {/* 2. Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-48">
        {/* TOP: Name Block (Stacked Left) */}
        <div className="flex flex-col items-start">
          <BlurText
            text="TARUN"
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl"
            delay={100}
            animateBy="letters"
            stepDuration={0.8}
          />
          <BlurText
            text="SASIREKHA"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-300 mt-[-5px] md:mt-[-15px]"
            delay={300}
            animateBy="letters"
            stepDuration={0.8}
          />
        </div>

        {/* BOTTOM LEFT (Relative to Tarun): Title Block */}
        <div className="mt-8 md:mt-12 ml-2 md:ml-4 flex flex-col items-start">
          <BlurText
            text="ELECTRICAL"
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/80"
            delay={600}
            animateBy="words"
            direction="bottom"
            stepDuration={1}
          />
          <BlurText
            text="ENGINEERING"
            /* FIXED: Added Purple Accent as requested */
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
            delay={800}
            animateBy="words"
            direction="bottom"
            stepDuration={1}
          />

          {/* Subtitle / Harvard Tag */}
          <div className="mt-6 inline-flex items-center gap-3 opacity-70">
            <span className="h-[2px] w-12 bg-purple-500"></span>
            <span className="text-lg md:text-xl font-light tracking-[0.2em] text-purple-200 uppercase">@HARVARD</span>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[5]" />
    </section>
  );
};

export default PortfolioHero;
