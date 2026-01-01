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
        {/* Left Side - Name */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center px-8 lg:px-16 py-12 lg:py-0 lg:pr-24">
          <div className="text-right">
            <BlurText
              text="TARUN"
              animateBy="letters"
              delay={50}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent"
            />
            <BlurText
              text="SASIREKHA"
              animateBy="letters"
              delay={40}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent mt-2"
            />
          </div>
        </div>

        {/* Right Side - Title */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-8 lg:px-16 py-12 lg:py-0 lg:pl-24">
          <div className="text-left">
            <BlurText
              text="ELECTRICAL"
              direction="bottom"
              animateBy="words"
              delay={100}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            />
            <BlurText
              text="ENGINEER"
              direction="bottom"
              animateBy="words"
              delay={150}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mt-1"
            />
            
            {/* Harvard Badge */}
            <div className="flex items-center gap-4 mt-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-muted-foreground" />
              <BlurText
                text="@HARVARD"
                direction="bottom"
                animateBy="letters"
                delay={30}
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
