import SlideLayout from "../SlideLayout";
import { WifiOff, CheckCircle2, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: WifiOff, label: "Internet drops", desc: "Tixy switches to offline mode automatically. No manual action needed." },
  { icon: CheckCircle2, label: "Scans continue", desc: "QR codes validate instantly using cached ticket data on the device." },
  { icon: RefreshCw, label: "Auto-sync", desc: "When connectivity returns, all scans sync seamlessly to your dashboard." },
];

const Slide04Offline = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Operational Excellence
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-4"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        The Internet Fails; <span className="text-gradient-tixy">Tixy Doesn't.</span>
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-20"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Offline-ready check-ins keep your doors moving no matter what.
      </motion.p>

      <div className="flex-1 flex items-center gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} className="flex-1 flex flex-col items-center text-center gap-8"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}>
            <div className="w-28 h-28 rounded-3xl bg-gradient-tixy flex items-center justify-center glow-tixy">
              <s.icon className="w-14 h-14" style={{ color: "white" }} />
            </div>
            {i < steps.length - 1 && (
              <div className="absolute" style={{ left: `${33 * (i + 1)}%`, top: "50%" }}>
              </div>
            )}
            <h3 className="text-[30px] font-display font-bold text-foreground">{s.label}</h3>
            <p className="text-[20px] text-muted-foreground leading-relaxed max-w-[400px]">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-12 mx-auto px-12 py-5 rounded-2xl border border-tixy-card-border bg-tixy-card text-[20px] text-muted-foreground text-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        ✅ Zero downtime at check-in — <span className="text-foreground font-semibold">even with zero internet</span>
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide04Offline;
