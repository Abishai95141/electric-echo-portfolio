import { motion } from "framer-motion";
import BlurText from "./BlurText";
import MagicBento, { BentoCard } from "./MagicBento";

const skillCategories = {
  hardware: ["Verilog", "SystemVerilog", "FPGA (Vivado)", "VLSI", "CMOS", "PCB Layout", "Analog Design", "Digital Design", "I²C/SPI/UART/CAN", "Power Integrity", "MIPS Processor"],
  lab: ["Oscilloscope", "Multimeter", "Logic Analyzer", "Circuit Debugging", "Soldering & Rework", "3D CAD"],
  fabrication: ["MEMS", "Lithography", "Thin-Film Deposition", "Etching", "Digital Fabrication", "KLayout", "Cleanroom"],
  programming: ["MATLAB", "LTSpice", "COMSOL", "Python", "C++", "Git", "Fusion 360"]
};

const SkillTag = ({ skill }: { skill: string }) => (
  <span className="text-xs text-white/70 bg-white/5 px-2 py-1 rounded-md hover:bg-purple-500/20 hover:text-white transition-colors duration-200">
    {skill}
  </span>
);

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden font-outfit">
      {/* Purple Ambient Glow Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(140, 126, 247, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 50% 30%, rgba(140, 126, 247, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(140, 126, 247, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(140, 126, 247, 0.05) 0%, transparent 40%)
          `
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24">
          
          {/* Section Header */}
          <div className="mb-12">
            <BlurText
              text="ABOUT"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90"
              delay={200}
              animateBy="letters"
              direction="bottom"
              stepDuration={0.8}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="h-[2px] w-24 bg-gradient-to-r from-purple-500 to-blue-500 mt-4 origin-left"
            />
          </div>

          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MagicBento
              enableSpotlight={true}
              enableBorderGlow={true}
              enableStars={true}
              enableMagnetism={true}
              clickEffect={true}
              enableTilt={false}
              glowColor="140, 126, 247"
              spotlightRadius={350}
              particleCount={8}
            >
              {/* Bio Card - Large */}
              <BentoCard
                label="About Me"
                color="#0a0515"
                className="lg:col-span-2 lg:row-span-2"
              >
                <div className="space-y-4">
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    I am an Electrical Engineering undergraduate at <span className="text-purple-400 font-medium">Harvard University</span> building at the intersection of quantum physics and digital logic.
                  </p>
                  <p className="text-base text-white/60 leading-relaxed">
                    My work spans the full hardware stack—from fabricating MEMS sensors in the cleanroom to synthesizing CPU architectures on FPGAs.
                  </p>
                </div>
              </BentoCard>

              {/* Current Focus Card */}
              <BentoCard
                label="Currently"
                color="#0a0515"
                className="lg:col-span-2"
              >
                <div className="mt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">Harvard Quantum Initiative</h3>
                  <p className="text-sm text-white/60">
                    Designing hardware-efficient decoders for Quantum LDPC codes, bridging the gap between theoretical quantum error correction and practical implementation.
                  </p>
                </div>
              </BentoCard>

              {/* Hardware Design Card */}
              <BentoCard
                label="Hardware Design"
                color="#0a0515"
                className="lg:col-span-2"
              >
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillCategories.hardware.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </BentoCard>

              {/* Lab & Validation Card */}
              <BentoCard
                label="Lab & Validation"
                color="#0a0515"
              >
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillCategories.lab.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </BentoCard>

              {/* Fabrication Card */}
              <BentoCard
                label="Fabrication"
                color="#0a0515"
              >
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillCategories.fabrication.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </BentoCard>

              {/* Programming Card */}
              <BentoCard
                label="Programming & Tools"
                color="#0a0515"
              >
                <div className="flex flex-wrap gap-2 mt-2">
                  {skillCategories.programming.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                  ))}
                </div>
              </BentoCard>
            </MagicBento>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
