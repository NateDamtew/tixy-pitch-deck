import SlideLayout from "../SlideLayout";
import { QrCode, Wallet, BarChart3, Zap, ShieldCheck, Store } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Wallet, title: "Load Bonos", desc: "Attendees purchase digital credits once at entry or online before the event." },
  { icon: QrCode, title: "Scan & Pay", desc: "Vendors scan the attendee's unique QR code to instantly deduct Bonos." },
  { icon: BarChart3, title: "Track Everything", desc: "Organizers monitor vendor sales, transactions, and spending in real time." },
];

const benefits = [
  { icon: Zap, label: "Faster Transactions" },
  { icon: ShieldCheck, label: "No Cash Handling" },
  { icon: Store, label: "Vendor Insights" },
  { icon: BarChart3, label: "Real-Time Data" },
];

const Slide11Bono = () => (
  <SlideLayout>
    <div className="flex h-full">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-[140px] py-[100px]">
        <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Cashless Events
        </motion.p>
        <motion.h2 className="text-[60px] font-display font-bold text-foreground leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Meet <span className="text-gradient-tixy">Bono</span>
        </motion.h2>
        <motion.p className="text-[22px] text-muted-foreground mb-14 leading-relaxed max-w-[640px]"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          Your built-in cashless bar & vendor payment system. Attendees buy digital credits, vendors scan QR codes, organizers see everything.
        </motion.p>

        <div className="flex flex-col gap-10">
          {steps.map((s, i) => (
            <motion.div key={i} className="flex items-start gap-6"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}>
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-tixy flex items-center justify-center relative">
                <s.icon className="w-8 h-8" style={{ color: "white" }} />
                <span className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-tixy-cyan text-background text-[13px] font-display font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="text-[26px] font-display font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-[18px] text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right visual — mock phone with QR */}
      <div className="w-[680px] flex items-center justify-center relative">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-tixy opacity-[0.08] blur-[100px]" />

        <motion.div className="w-[360px] h-[640px] rounded-[40px] border-2 border-tixy-card-border bg-tixy-card flex flex-col items-center pt-12 pb-8 px-8 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <div className="w-32 h-6 bg-background rounded-b-2xl" />
          </div>

          <p className="text-[14px] text-muted-foreground font-display mt-4 mb-2">Your Balance</p>
          <motion.p className="text-[48px] font-display font-bold text-foreground"
            initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
            250 <span className="text-[24px] text-tixy-cyan">Bonos</span>
          </motion.p>

          {/* QR placeholder */}
          <motion.div className="w-[200px] h-[200px] rounded-2xl bg-secondary flex items-center justify-center my-8 border border-tixy-card-border"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <QrCode className="w-28 h-28 text-tixy-blue" />
          </motion.div>

          <p className="text-[13px] text-muted-foreground text-center mb-6">Show this QR to any vendor</p>

          {/* Recent tx */}
          <div className="w-full space-y-3">
            {[{ item: "🍺 Beer", amt: "-15" }, { item: "🍔 Burger", amt: "-30" }].map((tx, i) => (
              <motion.div key={i} className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}>
                <span className="text-[15px] text-foreground">{tx.item}</span>
                <span className="text-[15px] font-display font-semibold text-tixy-cyan">{tx.amt}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefit pills */}
        <div className="absolute bottom-[80px] right-[40px] flex flex-col gap-3">
          {benefits.map((b, i) => (
            <motion.div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl border border-tixy-card-border bg-tixy-card"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}>
              <b.icon className="w-5 h-5 text-tixy-cyan" />
              <span className="text-[14px] font-display text-foreground">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide11Bono;
