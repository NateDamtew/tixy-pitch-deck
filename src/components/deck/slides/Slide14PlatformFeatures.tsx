import SlideLayout from "../SlideLayout";
import { QrCode, CreditCard, Ticket, BarChart3, Mail, Tag } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Ticket, title: "Multiple Ticket Tiers", desc: "Create VIP, Early Bird, General & custom tiers for maximum flexibility." },
    { icon: Tag, title: "Promo Codes & Discounts", desc: "Drive sales with targeted discount campaigns and shareable promo codes." },
    { icon: QrCode, title: "QR Ticket Scanning", desc: "Fast, reliable check-in at scale — works offline too." },
    { icon: CreditCard, title: "Bono Cashless Payments", desc: "Seamless cashless vendor payments at your events." },
    { icon: BarChart3, title: "Online Payment Processing", desc: "Secure transactions with instant settlements to your account." },
    { icon: Mail, title: "Buyer Confirmations", desc: "Automated email confirmations with tickets for every purchase." },
];

const Slide14PlatformFeatures = () => (
    <SlideLayout>
        <div className="flex flex-col h-full px-[140px] py-[100px]">
            <motion.p
                className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                Core Platform
            </motion.p>
            <motion.h2
                className="text-[60px] font-display font-bold text-foreground leading-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Key Platform <span className="text-gradient-tixy">Features</span>
            </motion.h2>
            <motion.p
                className="text-[24px] text-muted-foreground mb-14"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
            >
                Available across all packages
            </motion.p>

            <div className="grid grid-cols-3 gap-8 flex-1">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="rounded-3xl border border-tixy-card-border bg-tixy-card p-10 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-tixy flex items-center justify-center mb-6">
                            <f.icon className="w-7 h-7" style={{ color: "white" }} />
                        </div>
                        <h3 className="text-[24px] font-display font-semibold text-foreground mb-3">
                            {f.title}
                        </h3>
                        <p className="text-[18px] text-muted-foreground leading-relaxed">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </SlideLayout>
);

export default Slide14PlatformFeatures;
