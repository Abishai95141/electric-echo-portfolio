import LightPillar from './LightPillar';
import BlurText from './BlurText';

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

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center">
        {/* Left Side - Name (45% width, pushed right with gap from center) */}
        <div className="relative z-20 w-full lg:w-[45%] flex flex-col items-center lg:items-end justify-center px-8 py-12 lg:py-0 lg:pr-32">
          <div className="text-center lg:text-right">
            <BlurText
              text="TARUN"
              animateBy="letters"
              delay={80}
              stepDuration={1.0}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground"
            />
            <BlurText
              text="SASIREKHA"
              animateBy="letters"
              delay={60}
              stepDuration={1.0}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-purple-300 bg-clip-text text-transparent mt-2"
            />
          </div>
        </div>

        {/* Center Gap (10% empty space for the light pillar) */}
        <div className="hidden lg:block lg:w-[10%]" />

        {/* Right Side - Title (45% width, pushed left with gap from center) */}
        <div className="relative z-20 w-full lg:w-[45%] flex flex-col items-center lg:items-start justify-center px-8 py-12 lg:py-0 lg:pl-32">
          <div className="text-center lg:text-left">
            <BlurText
              text="ELECTRICAL"
              direction="bottom"
              animateBy="words"
              delay={150}
              stepDuration={1.0}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            />
            <BlurText
              text="ENGINEER"
              direction="bottom"
              animateBy="words"
              delay={200}
              stepDuration={1.0}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-1"
            />
            
            {/* Harvard Badge */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground" />
              <BlurText
                text="@HARVARD"
                direction="bottom"
                animateBy="letters"
                delay={40}
                stepDuration={0.8}
                className="text-sm sm:text-base tracking-[0.3em] text-muted-foreground font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none z-[5]" />
    </section>
  );
};

export default PortfolioHero;
