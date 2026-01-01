import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PortfolioHero from '@/components/PortfolioHero';
import AboutSection from '@/components/AboutSection';
import LaserFlow from '@/components/LaserFlow';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Global LaserFlow Background - Fixed position, spans entire viewport */}
      <div className="fixed inset-0 z-0">
        <LaserFlow
          color="#8C7EF7"
          verticalBeamOffset={0.25}
          verticalSizing={4.0}
          horizontalSizing={0.5}
          fogIntensity={0.55}
          wispIntensity={4.0}
          flowSpeed={0.3}
          wispSpeed={12.0}
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ opacity: heroOpacity }}
        className="relative z-10"
      >
        <PortfolioHero />
      </motion.div>

      {/* About Section */}
      <div className="relative z-20">
        <AboutSection />
      </div>
    </div>
  );
};

export default Index;
