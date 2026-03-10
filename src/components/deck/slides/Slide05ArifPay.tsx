import SlideLayout from "../SlideLayout";
import { Shield, Zap, Plug } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Plug, title: "Any Provider, One Platform", desc: "Integrate Chapa, ArifPay, StarPay, AfroPay, LakiPay — or all of them. Your choice." },
  { icon: Shield, title: "Secure Payments", desc: "Bank-grade encryption for every transaction. Your fans' data is always protected." },
  { icon: Zap, title: "Instant Confirmations", desc: "Ticket purchase confirmed in seconds. No delays, no friction." },
];

const providers = ["Chapa", "ArifPay", "StarPay", "AfroPay", "LakiPay", "TeleBirr"];

const Slide05ArifPay = () => (
  <SlideLayout>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center px-[140px] py-[100px]">
        <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Payments That Fit
        </motion.p>
        <motion.h2 className="text-[56px] font-display font-bold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          Every Local <span className="text-gradient-tixy">Payment Gateway</span>
        </motion.h2>
        <motion.p className="text-[22px] text-muted-foreground mb-14 leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          Don't lock yourself into one provider.<br />
          Tixy connects to the gateways your fans already use.
        </motion.p>

        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <motion.div key={i} className="flex items-start gap-6"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}>
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-tixy flex items-center justify-center">
                <f.icon className="w-7 h-7" style={{ color: "white" }} />
              </div>
              <div>
                <h3 className="text-[26px] font-display font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-[19px] text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right visual — provider grid */}
      <div className="w-[700px] flex items-center justify-center relative">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-tixy opacity-[0.08] blur-[100px]" />
        <motion.div className="w-[420px] h-[520px] rounded-3xl border border-tixy-card-border bg-tixy-card p-10 flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          <div className="w-24 h-24 rounded-2xl bg-gradient-tixy flex items-center justify-center animate-pulse-glow">
            <span className="text-[48px]">🔌</span>
          </div>
          <p className="text-[28px] font-display font-bold text-foreground">Payment Hub</p>
          <div className="w-full grid grid-cols-2 gap-4">
            {providers.map((name, i) => (
              <motion.div key={name}
                className="h-14 rounded-xl bg-secondary flex items-center justify-center text-[17px] font-display font-medium text-foreground"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}>
                {name}
              </motion.div>
            ))}
          </div>
          <div className="h-14 w-full rounded-xl bg-gradient-tixy flex items-center justify-center text-[18px] font-display font-semibold" style={{ color: "white" }}>
            Pay Now — 500 ETB
          </div>
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide05ArifPay;
