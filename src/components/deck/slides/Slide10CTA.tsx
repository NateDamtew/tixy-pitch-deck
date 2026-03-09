import SlideLayout from "../SlideLayout";
import tixyLogo from "@/assets/tixy-logo.png";
import { CalendarPlus, Layers, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: CalendarPlus, step: "1", title: "Create Your Event", desc: "Name, date, venue — done in under 2 minutes." },
  { icon: Layers, step: "2", title: "Set Your Tiers", desc: "VIP, Regular, Early Bird — you decide the pricing." },
  { icon: Rocket, step: "3", title: "Start Selling", desc: "Share your link. Watch tickets fly. Get paid instantly." },
];

const Slide10CTA = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full px-[200px] text-center">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-tixy opacity-[0.06] blur-[120px]" />

      <motion.img src={tixyLogo} alt="Tixy" className="w-[200px] mb-10"
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />

      <motion.h2 className="text-[64px] font-display font-bold text-foreground leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Go Live in <span className="text-gradient-tixy">Minutes</span>
      </motion.h2>
      <motion.p className="text-[26px] text-muted-foreground mb-16"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        Three steps. Zero hassle. Full control.
      </motion.p>

      <div className="flex gap-12 mb-16">
        {steps.map((s, i) => (
          <motion.div key={i} className="flex-1 flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}>
            <div className="w-20 h-20 rounded-2xl bg-gradient-tixy flex items-center justify-center glow-tixy">
              <s.icon className="w-10 h-10" style={{ color: "white" }} />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-tixy-blue flex items-center justify-center text-[20px] font-display font-bold text-tixy-cyan">
              {s.step}
            </div>
            <h3 className="text-[26px] font-display font-bold text-foreground">{s.title}</h3>
            <p className="text-[18px] text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="px-16 py-6 rounded-full bg-gradient-tixy text-[28px] font-display font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform"
        style={{ color: "white" }}
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}>
        Start Your Free Event →
      </motion.div>

      <motion.p className="mt-8 text-[18px] text-muted-foreground"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
        Questions? Reach us at <span className="text-tixy-cyan">hello@tixy.et</span>
      </motion.p>
    </div>
  </SlideLayout>
);

export default Slide10CTA;
