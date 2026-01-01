import { motion } from "framer-motion";
import BlurText from "./BlurText";
import SkillsMarquee from "./SkillsMarquee";

const skillCategories = [
  {
    title: "Hardware Design",
    skills: ["Verilog", "SystemVerilog", "FPGA (Vivado)", "VLSI", "CMOS", "PCB Layout", "Analog Design", "Digital Design", "I²C/SPI/UART/CAN", "Power Integrity", "MIPS Processor"]
  },
  {
    title: "Lab & Validation",
    skills: ["Oscilloscope", "Multimeter", "Logic Analyzer", "Circuit Debugging", "Soldering & Rework", "3D CAD"]
  },
  {
    title: "Fabrication",
    skills: ["MEMS", "Lithography", "Thin-Film Deposition", "Etching", "Digital Fabrication", "KLayout", "Cleanroom"]
  },
  {
    title: "Programming",
    skills: ["MATLAB", "LTSpice", "COMSOL", "Python", "C++", "Git", "Fusion 360"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen w-full bg-black overflow-hidden font-outfit">
      {/* Purple Ambient Glow Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(140, 126, 247, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 20% 50%, rgba(140, 126, 247, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(140, 126, 247, 0.04) 0%, transparent 40%)
          `
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32">
          
          {/* Section Header */}
          <div className="mb-16 lg:mb-20">
            <BlurText
              text="ABOUT"
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white/90"
              delay={100}
              animateBy="letters"
              direction="bottom"
              stepDuration={0.6}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="h-[2px] w-20 bg-gradient-to-r from-purple-500 to-purple-400/50 mt-6 origin-left"
            />
          </div>

          {/* Bio + Currently Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio Text - Takes 2 columns */}
            <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/85 leading-relaxed font-light">
                I am an Electrical Engineering undergraduate at{" "}
                <span className="text-purple-400 font-normal">Harvard University</span>{" "}
                building at the intersection of quantum physics and digital logic.
              </p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
                My work spans the full hardware stack—from fabricating MEMS sensors in the cleanroom to synthesizing CPU architectures on FPGAs.
              </p>
            </motion.div>

            {/* Currently Card */}
            <motion.div 
              className="relative group"
              variants={itemVariants}
            >
              <div className="absolute -inset-px bg-gradient-to-b from-purple-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-xs font-medium tracking-widest uppercase text-purple-400/80">
                    Currently
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Harvard Quantum Initiative
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  Designing hardware-efficient decoders for Quantum LDPC codes, bridging theoretical quantum error correction and practical implementation.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 -mx-6 md:-mx-12 lg:-mx-20"
          >
            <div className="border-y border-white/[0.06] py-2">
              <SkillsMarquee />
            </div>
          </motion.div>

          {/* Skill Categories Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={category.title}
                className="space-y-4"
                variants={itemVariants}
              >
                <h4 className="text-xs font-medium tracking-widest uppercase text-purple-400/80 pb-3 border-b border-white/[0.06]">
                  {category.title}
                </h4>
                <ul className="space-y-2.5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skill}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200 cursor-default flex items-center gap-2 group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + (catIndex * 0.1) + (skillIndex * 0.03),
                        ease: "easeOut"
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500/40 group-hover:bg-purple-400 transition-colors duration-200" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
