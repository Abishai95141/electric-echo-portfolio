import { motion } from "framer-motion";
import BlurText from "./BlurText";
import LaserFlow from "./LaserFlow";

const skillCategories = [
  {
    title: "Hardware Design",
    skills: ["Verilog", "SystemVerilog", "FPGA (Vivado)", "VLSI", "CMOS", "PCB Layout", "Analog Design", "Digital Design", "I²C/SPI/UART/CAN"]
  },
  {
    title: "Lab & Validation",
    skills: ["Oscilloscope", "Multimeter", "Logic Analyzer", "Circuit Debugging", "Soldering & Rework", "3D CAD"]
  },
  {
    title: "Fabrication",
    skills: ["MEMS", "Lithography", "Thin-Film Deposition", "Etching", "KLayout", "Cleanroom"]
  },
  {
    title: "Programming",
    skills: ["MATLAB", "LTSpice", "COMSOL", "Python", "C++", "Git", "Fusion 360"]
  }
];

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden font-outfit">
      {/* Layer 1: LaserFlow Background */}
      <div className="absolute inset-0 z-[1]">
        <LaserFlow
          color="#8C7EF7"
          fogIntensity={0.3}
          verticalSizing={2.5}
          horizontalSizing={0.3}
          wispDensity={0.8}
          wispIntensity={3.0}
          flowSpeed={0.25}
          mouseTiltStrength={0.02}
          verticalBeamOffset={-0.2}
        />
      </div>

      {/* Layer 2: Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Title & Bio */}
            <div className="space-y-8">
              <div>
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

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed"
              >
                I am an Electrical Engineering undergraduate at Harvard University building at the intersection of quantum physics and digital logic.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg text-white/60 leading-relaxed"
              >
                Currently, I am a researcher at the <span className="text-purple-400">Harvard Quantum Initiative</span>, designing hardware-efficient decoders for Quantum LDPC codes. My work spans the full hardware stack—from fabricating MEMS sensors in the cleanroom to synthesizing CPU architectures on FPGAs.
              </motion.p>
            </div>

            {/* Right Column: Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h3 className="text-sm font-semibold tracking-wider text-purple-400 uppercase mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md hover:bg-purple-500/20 hover:text-white/80 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
