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
    <section id="about" className="relative min-h-screen w-full overflow-hidden font-outfit">
      {/* Top gradient fade for smooth transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 py-24 lg:py-32 pt-40 lg:pt-48">
        
        {/* Glowing Container */}
        <motion.div 
          className="glowing-container p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
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
              className="h-[2px] w-20 bg-gradient-to-r from-[#8C7EF7] to-[#8C7EF7]/50 mt-6 origin-left"
            />
          </div>

          {/* Bio + Currently Grid */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio Text - Takes 2 columns */}
            <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                I am an Electrical Engineering undergraduate at{" "}
                <span className="text-[#8C7EF7] font-normal">Harvard University</span>{" "}
                building at the intersection of quantum physics and digital logic.
              </p>
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl">
                My work spans the full hardware stack—from fabricating MEMS sensors in the cleanroom to synthesizing CPU architectures on FPGAs.
              </p>
            </motion.div>

            {/* Currently Card */}
            <motion.div 
              className="relative group"
              variants={itemVariants}
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#8C7EF7]/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 rounded-xl border border-[#8C7EF7]/20 bg-black/40 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#8C7EF7] animate-pulse" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[#8C7EF7]/80">
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
            className="mb-16 -mx-8 md:-mx-12 lg:-mx-16"
          >
            <div className="border-y border-[#8C7EF7]/10 py-2">
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
                <h4 className="text-xs font-medium tracking-widest uppercase text-[#8C7EF7]/80 pb-3 border-b border-[#8C7EF7]/10">
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
                      <span className="w-1 h-1 rounded-full bg-[#8C7EF7]/40 group-hover:bg-[#8C7EF7] transition-colors duration-200" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom gradient for section end */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-[1] pointer-events-none" />
    </section>
  );
};

export default AboutSection;
