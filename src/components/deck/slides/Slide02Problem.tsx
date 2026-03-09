import SlideLayout from "../SlideLayout";
import { AlertTriangle, Wifi, ClipboardList, Clock } from "lucide-react";
import { motion } from "framer-motion";

const painPoints = [
  { icon: AlertTriangle, title: "15–20% Commissions", desc: "Legacy platforms eat your profits before you see them." },
  { icon: Wifi, title: "Internet Failures at the Door", desc: "One dropped signal = chaos at check-in. Lost revenue, angry fans." },
  { icon: ClipboardList, title: "Manual Promoter Tracking", desc: "Spreadsheets, DMs, and guesswork. No visibility into who's actually selling." },
  { icon: Clock, title: "Delayed Payouts", desc: "Waiting days or weeks to access your own money after the event." },
];

const Slide02Problem = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        The Problem
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-16"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
        The Organizer's Burden
      </motion.h2>
      <div className="grid grid-cols-2 gap-10 flex-1">
        {painPoints.map((p, i) => (
          <motion.div
            key={i}
            className="flex gap-8 p-10 rounded-2xl border border-tixy-card-border bg-tixy-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          >
            <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-tixy flex items-center justify-center">
              <p.icon className="w-8 h-8" style={{ color: "white" }} />
            </div>
            <div>
              <h3 className="text-[28px] font-display font-semibold text-foreground mb-3">{p.title}</h3>
              <p className="text-[20px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide02Problem;
