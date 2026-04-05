import { motion } from "framer-motion";
import LegoScene from "./LegoScene";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <LegoScene />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[1]" />
      
      <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-medium"
        >
          3D Interactive Showroom
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient-gold">Doozy</span>
          <span className="text-foreground">Lego</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          The dawn breaks over your workbench. Precision-engineered bricks hold infinite potential.
          <span className="text-foreground font-medium"> Real building is rare. Keep creating.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalog"
            className="px-8 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-base transition-all hover:glow-gold"
          >
            Begin Your Build
          </a>
          <a
            href="#catalog"
            className="px-8 py-3.5 rounded-md border border-primary/30 text-primary font-medium text-base transition-all hover:border-primary/60 hover:bg-primary/5"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
