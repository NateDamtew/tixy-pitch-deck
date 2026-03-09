import SlideLayout from "../SlideLayout";
import { Link2, BarChart3, Users } from "lucide-react";
import { motion } from "framer-motion";

const Slide06Promoter = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Growth Engine
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        The <span className="text-gradient-tixy">Promoter Engine</span>
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-16"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Turn word-of-mouth into a measurable, data-backed sales force.
      </motion.p>

      <div className="flex-1 flex gap-10">
        {/* Flow diagram */}
        <div className="flex-1 flex flex-col gap-8">
          {[
            { icon: Link2, step: "01", title: "Unique Tracking Links", desc: "Each promoter gets a branded link. Every click, every sale — tracked." },
            { icon: BarChart3, step: "02", title: "Real-Time Analytics", desc: "See who's selling, how much, and where. Make data-driven decisions on commissions." },
            { icon: Users, step: "03", title: "Partnership Model", desc: "Set custom commission tiers. Reward your best promoters. Scale your reach." },
          ].map((item, i) => (
            <motion.div key={i} className="flex gap-8 items-start"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}>
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-tixy flex items-center justify-center">
                  <item.icon className="w-8 h-8" style={{ color: "white" }} />
                </div>
                {i < 2 && <div className="w-0.5 h-12 bg-gradient-tixy opacity-30" />}
              </div>
              <div>
                <p className="text-[16px] text-tixy-cyan font-display font-semibold mb-1">Step {item.step}</p>
                <h3 className="text-[28px] font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-[20px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual card */}
        <motion.div className="w-[550px] rounded-3xl border border-tixy-card-border bg-tixy-card p-10"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}>
          <p className="text-[18px] text-muted-foreground font-display mb-6">Promoter Dashboard Preview</p>
          <div className="space-y-5">
            {[
              { name: "Abebe M.", sales: 142, revenue: "71,000", bar: 95 },
              { name: "Sara T.", sales: 98, revenue: "49,000", bar: 65 },
              { name: "Dawit K.", sales: 67, revenue: "33,500", bar: 45 },
              { name: "Helen A.", sales: 45, revenue: "22,500", bar: 30 },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-tixy flex items-center justify-center text-[14px] font-bold" style={{ color: "white" }}>
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-[16px] text-foreground font-medium">{p.name}</span>
                    <span className="text-[14px] text-muted-foreground">{p.sales} tickets · {p.revenue} ETB</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div className="h-full rounded-full bg-gradient-tixy"
                      initial={{ width: 0 }} animate={{ width: `${p.bar}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide06Promoter;
