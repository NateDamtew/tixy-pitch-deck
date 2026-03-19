import SlideLayout from "../SlideLayout";
import { Globe, LayoutDashboard, Palette, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Palette,
    title: "Fully Branded Event Pages",
    desc: "Your event, your brand. Custom landing pages with embedded ticket purchasing — no redirects, no third-party feel.",
  },
  {
    icon: LayoutDashboard,
    title: "Complete Admin Dashboard",
    desc: "Manage event details, ticket types, guest lists, merchandise, and sales reporting — all from one powerful backend.",
  },
  {
    icon: Globe,
    title: "Seamless End-to-End Experience",
    desc: "From discovery to check-in, your attendees get a frictionless journey. Clean frontend, powerful backend.",
  },
  {
    icon: ShoppingBag,
    title: "Merchandise & Add-Ons",
    desc: "Sell merch, VIP upgrades, and extras alongside tickets. One checkout, one platform, more revenue per fan.",
  },
];

const Slide03Commission = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        The Platform
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Your <span className="text-gradient-tixy">All-in-One</span> Event Ecosystem
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-14"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        The frontend stays clean and on-brand. Tixy powers the full operational side.
      </motion.p>

      <div className="grid grid-cols-2 gap-8 flex-1">
        {features.map((f, i) => (
          <motion.div key={i}
            className="flex gap-6 p-8 rounded-2xl border border-tixy-card-border bg-tixy-card"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}>
            <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-tixy flex items-center justify-center">
              <f.icon className="w-7 h-7" style={{ color: "white" }} />
            </div>
            <div>
              <h3 className="text-[26px] font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-[19px] text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>


    </div>
  </SlideLayout>
);

export default Slide03Commission;
