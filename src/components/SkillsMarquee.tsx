import { motion } from "framer-motion";

const allSkills = [
  "Verilog", "SystemVerilog", "FPGA", "VLSI", "CMOS", "PCB Layout", 
  "Analog Design", "Digital Design", "I²C/SPI/UART", "Power Integrity",
  "Oscilloscope", "Multimeter", "Logic Analyzer", "Circuit Debugging",
  "MEMS", "Lithography", "Thin-Film Deposition", "Etching", "Cleanroom",
  "Python", "C++", "MATLAB", "LTSpice", "COMSOL", "Git", "Fusion 360"
];

const SkillsMarquee = () => {
  // Duplicate for seamless loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradient fades on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Subtle purple glow behind marquee */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
      
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-white/60 text-sm md:text-base font-light tracking-wide hover:text-purple-400 transition-colors duration-300 cursor-default">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
