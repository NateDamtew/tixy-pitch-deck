import SlideLayout from "../SlideLayout";
import { TrendingUp, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: TrendingUp,
    title: "Performance-Based",
    desc: "You only pay when you sell. No upfront costs, no monthly fees — just a percentage per ticket sold.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "End-to-end encrypted payments, QR ticketing, and real-time analytics you can trust.",
  },
  {
    icon: Zap,
    title: "Scale With You",
    desc: "From 100-person workshops to 50,000-seat festivals — Tixy grows as you grow.",
  },
];

const Slide13WhyTixyPricing = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p
        className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Why Tixy
      </motion.p>
      <motion.h2
        className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Built for Africa's <span className="text-gradient-tixy">Event Ecosystem</span>
      </motion.h2>
      <motion.p
        className="text-[24px] text-muted-foreground mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Fair, flexible, and powerful — a ticketing platform designed for how organizers actually work.
      </motion.p>

      <div className="flex gap-10 flex-1">
        {points.map((p, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-3xl border border-tixy-card-border bg-tixy-card p-12 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-tixy flex items-center justify-center mb-8">
              <p.icon className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <h3 className="text-[30px] font-display font-semibold text-foreground mb-4">
              {p.title}
            </h3>
            <p className="text-[20px] text-muted-foreground leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide13WhyTixyPricing;
