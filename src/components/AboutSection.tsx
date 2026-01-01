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
      {/* Layer 0: Purple Ambient Glow Background */}
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

      {/* Main Content - 3 Column Layout */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px_1fr] gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Title & Bio */}
            <div className="space-y-8 order-2 lg:order-1">
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

            {/* Center Column: Seamless LaserFlow */}
            <div className="hidden lg:flex justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="relative w-[200px] h-[650px] overflow-hidden"
              >
                {/* LaserFlow - seamlessly integrated */}
                <LaserFlow
                  color="#8C7EF7"
                  fogIntensity={0.5}
                  verticalSizing={4.0}
                  horizontalSizing={0.2}
                  wispDensity={1.2}
                  wispIntensity={5.0}
                  flowSpeed={0.25}
                  mouseTiltStrength={0.01}
                  verticalBeamOffset={-0.3}
                />
                
                {/* Soft fade masks to blend into background */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 15%),
                      linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 20%),
                      linear-gradient(to right, rgb(0, 0, 0) 0%, transparent 15%, transparent 85%, rgb(0, 0, 0) 100%)
                    `
                  }}
                />
              </motion.div>
            </div>

            {/* Right Column: Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-3">
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
