import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";

const data = [
  { name: "Legacy Platform A", rate: "20%", kept: "800,000", lost: "200,000", color: "hsl(0,60%,50%)" },
  { name: "Legacy Platform B", rate: "15%", kept: "850,000", lost: "150,000", color: "hsl(30,70%,50%)" },
  { name: "Tixy", rate: "5%", kept: "950,000", lost: "50,000", color: "hsl(190,100%,50%)" },
];

const Slide03Commission = () => (
  <SlideLayout>
    <div className="flex flex-col h-full px-[140px] py-[100px]">
      <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        The Advantage
      </motion.p>
      <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-6"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        The <span className="text-gradient-tixy">5% Commission</span> Model
      </motion.h2>
      <motion.p className="text-[24px] text-muted-foreground mb-14"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
        Per 1,000 tickets at 1,000 ETB each — here's what you keep.
      </motion.p>

      <div className="flex-1 flex flex-col gap-8">
        {data.map((d, i) => (
          <motion.div key={i}
            className="flex items-center gap-10 p-8 rounded-2xl border border-tixy-card-border bg-tixy-card"
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}>
            <div className="w-[260px] shrink-0">
              <p className="text-[22px] font-display font-semibold text-foreground">{d.name}</p>
              <p className="text-[18px] text-muted-foreground">Commission: {d.rate}</p>
            </div>
            <div className="flex-1 relative h-16 rounded-xl overflow-hidden bg-secondary">
              <motion.div
                className="h-full rounded-xl"
                style={{ background: d.color }}
                initial={{ width: 0 }}
                animate={{ width: `${parseInt(d.kept.replace(/,/g, "")) / 10000}%` }}
                transition={{ delay: 0.6 + i * 0.2, duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="w-[280px] text-right">
              <p className="text-[32px] font-display font-bold" style={{ color: d.color }}>{d.kept} ETB</p>
              <p className="text-[16px] text-muted-foreground">You keep</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-10 text-center text-[22px] text-muted-foreground"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        With Tixy, you save <span className="text-gradient-tixy font-bold text-[26px]">150,000 ETB</span> more than legacy platforms per 1,000 tickets.
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide03Commission;
