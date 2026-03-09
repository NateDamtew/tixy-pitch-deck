import SlideLayout from "../SlideLayout";
import { Zap, BarChart3, Crown } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  {
    icon: Zap, tier: "Small Events", range: "50 – 300 attendees",
    features: ["Quick onboarding in minutes", "Digital entry & QR scanning", "Basic sales reporting", "ArifPay integration"],
    accent: "hsl(210,100%,50%)",
  },
  {
    icon: BarChart3, tier: "Medium Events", range: "300 – 1,500 attendees",
    features: ["Multi-door check-in support", "Detailed analytics dashboard", "Promoter tracking system", "Priority email support"],
    accent: "hsl(200,100%,50%)",
    featured: true,
  },
  {
    icon: Crown, tier: "Large Events", range: "1,500+ attendees",
    features: ["Advanced infrastructure scaling", "Priority 24/7 support", "Custom integration options", "Dedicated account manager"],
    accent: "hsl(190,100%,50%)",
  },
];

const Slide08Tiers = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Scalable Partnerships
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        A Tier for <span className="text-gradient-tixy">Every Event</span>
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-16"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Same 5% commission across all tiers. More attendees = more features.
      </motion.p>

      <div className="flex-1 grid grid-cols-3 gap-10">
        {tiers.map((t, i) => (
          <motion.div key={i}
            className={`rounded-3xl border p-10 flex flex-col ${t.featured ? "border-tixy-blue glow-tixy bg-tixy-card" : "border-tixy-card-border bg-tixy-card"}`}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: t.accent }}>
              <t.icon className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <h3 className="text-[30px] font-display font-bold text-foreground mb-2">{t.tier}</h3>
            <p className="text-[18px] font-display mb-8" style={{ color: t.accent }}>{t.range}</p>
            <div className="flex flex-col gap-4 flex-1">
              {t.features.map((f, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: t.accent }} />
                  <span className="text-[18px] text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide08Tiers;
