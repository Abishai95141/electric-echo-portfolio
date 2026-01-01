import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PortfolioHero from '@/components/PortfolioHero';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const aboutY = useTransform(scrollYProgress, [0.2, 0.5], ["20%", "0%"]);
  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="sticky top-0 z-10"
      >
        <PortfolioHero />
      </motion.div>

      {/* About Section with Parallax Reveal */}
      <motion.div 
        style={{ y: aboutY, opacity: aboutOpacity }}
        className="relative z-20"
      >
        <AboutSection />
      </motion.div>
    </div>
  );
};

export default Index;
