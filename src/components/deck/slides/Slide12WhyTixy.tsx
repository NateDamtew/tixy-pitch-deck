import SlideLayout from "../SlideLayout";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { title: "Fully Branded Experience", desc: "Your event, your brand — not a generic ticketing page." },
  { title: "Offline-Ready Check-ins", desc: "Never miss a scan, even when the internet drops." },
  { title: "Cashless Payments with Bono", desc: "Faster vendor transactions, zero cash handling, full visibility." },
  { title: "Local & International Payments", desc: "Built-in payment processing with flexibility to integrate your preferred gateway based on your needs." },
  { title: "Promoter Tracking Engine", desc: "Turn word-of-mouth into measurable, data-backed sales." },
  { title: "Complete Data Ownership", desc: "You own your attendee list, sales data, and event insights." },
  { title: "Tier-Based Commission", desc: "Fair, performance-based pricing — we only earn when you do. No upfront costs, no monthly fees." },
  { title: "Usher & Technical Support", desc: "On-ground ushers to assist with check-ins plus full technical support before, during, and after your event." },
];

const Slide12WhyTixy = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[90px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        The Bottom Line
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Why Organizers Choose <span className="text-gradient-tixy">Tixy</span>
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-14"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Everything you need. Nothing you don't. One platform to run it all.
      </motion.p>

      <div className="grid grid-cols-2 gap-x-16 gap-y-8 flex-1">
        {reasons.map((r, i) => (
          <motion.div key={i} className="flex items-start gap-5"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}>
            <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-tixy flex items-center justify-center mt-1">
              <CheckCircle2 className="w-5 h-5" style={{ color: "white" }} />
            </div>
            <div>
              <h3 className="text-[26px] font-display font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-[19px] text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide12WhyTixy;
