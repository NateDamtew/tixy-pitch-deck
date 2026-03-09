import SlideLayout from "../SlideLayout";
import { Activity, DollarSign, Users, Database } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Activity, label: "Real-Time Sales", value: "2,847", sub: "tickets sold today" },
  { icon: DollarSign, label: "Revenue", value: "1.4M ETB", sub: "total event revenue" },
  { icon: Users, label: "Attendees", value: "3,210", sub: "checked in" },
  { icon: Database, label: "Data Ownership", value: "100%", sub: "your customer list" },
];

const Slide07Dashboard = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Mission Control
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        Your <span className="text-gradient-tixy">Dashboard</span>
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-14"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Everything you need. Nothing you don't. You own every data point.
      </motion.p>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-8 mb-12">
        {stats.map((s, i) => (
          <motion.div key={i} className="rounded-2xl border border-tixy-card-border bg-tixy-card p-8 text-center"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}>
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-tixy flex items-center justify-center">
              <s.icon className="w-7 h-7" style={{ color: "white" }} />
            </div>
            <p className="text-[36px] font-display font-bold text-foreground">{s.value}</p>
            <p className="text-[16px] text-muted-foreground mt-1">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      {/* Mock dashboard */}
      <motion.div className="flex-1 rounded-3xl border border-tixy-card-border bg-tixy-card overflow-hidden flex"
        initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}>
        {/* Sidebar */}
        <div className="w-[220px] border-r border-tixy-card-border p-6 flex flex-col gap-3">
          {["Overview", "Sales", "Attendees", "Promoters", "Settings"].map((item, i) => (
            <div key={i} className={`h-10 rounded-lg flex items-center px-4 text-[15px] ${i === 0 ? "bg-gradient-tixy font-semibold" : "text-muted-foreground hover:bg-secondary"}`}
              style={i === 0 ? { color: "white" } : {}}>
              {item}
            </div>
          ))}
        </div>
        {/* Chart area */}
        <div className="flex-1 p-8 flex flex-col gap-6">
          <div className="flex gap-6 flex-1">
            <div className="flex-1 rounded-xl bg-secondary p-6 flex flex-col justify-end gap-2">
              <div className="flex items-end gap-3 h-full">
                {[40, 65, 45, 80, 60, 90, 75, 95, 85, 70].map((h, i) => (
                  <motion.div key={i} className="flex-1 rounded-t-md bg-gradient-tixy"
                    initial={{ height: 0 }} animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.4 }} />
                ))}
              </div>
              <p className="text-[14px] text-muted-foreground mt-2">Sales over time</p>
            </div>
            <div className="w-[280px] rounded-xl bg-secondary p-6 flex flex-col justify-between">
              <p className="text-[14px] text-muted-foreground">Revenue split</p>
              <div className="w-32 h-32 mx-auto rounded-full border-[12px] border-tixy-blue" style={{ borderTopColor: "hsl(190,100%,50%)", borderRightColor: "hsl(190,100%,50%)" }} />
              <div className="flex justify-between text-[13px] text-muted-foreground">
                <span>● VIP 35%</span>
                <span>● Regular 65%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide07Dashboard;
