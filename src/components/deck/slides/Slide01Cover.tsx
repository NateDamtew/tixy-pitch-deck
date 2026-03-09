import SlideLayout from "../SlideLayout";
import tixyLogo from "@/assets/tixy-logo.png";
import { motion } from "framer-motion";

const Slide01Cover = () => (
  <SlideLayout>
    {/* Large glow orb */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gradient-tixy opacity-[0.07] blur-[120px]" />
    
    <div className="flex flex-col items-center justify-center h-full gap-12 px-40">
      <motion.img
        src={tixyLogo}
        alt="Tixy Logo"
        className="w-[320px] drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        className="text-[72px] font-display font-bold text-center leading-tight text-gradient-tixy"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Run Smarter Events.<br />Keep More Revenue.
      </motion.h1>
      <motion.p
        className="text-[28px] text-muted-foreground text-center max-w-[1100px] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        The high-performance ticketing and management ecosystem<br />
        built for Ethiopian organizers.
      </motion.p>
      <motion.div
        className="mt-8 px-10 py-4 rounded-full bg-gradient-tixy text-[22px] font-display font-semibold tracking-wide"
        style={{ color: "white" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        The Organizer's Command Center
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide01Cover;
