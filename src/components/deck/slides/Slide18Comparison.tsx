import SlideLayout from "../SlideLayout";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
    { name: "Starter", fee: "10%", size: "Up to 1,500", color: "hsl(210 100% 55%)" },
    { name: "Professional", fee: "7%", size: "Up to 5,000", color: "hsl(195 100% 50%)" },
    { name: "Enterprise", fee: "5%", size: "5,000+", color: "hsl(40 100% 55%)" },
];

const features = [
    { name: "Event creation & management", s: true, p: true, e: true },
    { name: "Tixy marketplace listing", s: true, p: true, e: true },
    { name: "QR ticketing & check-in", s: true, p: true, e: true },
    { name: "Bono cashless system", s: true, p: true, e: true },
    { name: "Promo codes & discounts", s: true, p: true, e: true },
    { name: "Custom subdomain", s: false, p: true, e: true },
    { name: "Invite-only events", s: false, p: true, e: true },
    { name: "Staff roles & team access", s: false, p: true, e: true },
    { name: "Vendor management", s: false, p: true, e: true },
    { name: "Advanced analytics", s: false, p: true, e: true },
    { name: "White-label platform", s: false, p: false, e: true },
    { name: "Custom domain", s: false, p: false, e: true },
    { name: "Host other organizers", s: false, p: false, e: true },
    { name: "Custom payment gateway", s: false, p: false, e: true },
    { name: "Dedicated support", s: false, p: false, e: true },
];

const Slide18Comparison = () => (
    <SlideLayout>
        <div className="flex flex-col h-full px-[100px] py-[70px]">
            <motion.p
                className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                At a Glance
            </motion.p>
            <motion.h2
                className="text-[52px] font-display font-bold text-foreground leading-tight mb-[40px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                Package <span className="text-gradient-tixy">Comparison</span>
            </motion.h2>

            <motion.div
                className="flex-1 rounded-2xl overflow-hidden border border-tixy-card-border bg-tixy-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
            >
                <div className="grid grid-cols-4 gap-0">
                    {/* Header */}
                    <div className="py-5 px-6 bg-secondary" />
                    {packages.map((p) => (
                        <div key={p.name} className="text-center py-5 px-4 bg-secondary">
                            <div className="text-[22px] font-display font-bold" style={{ color: p.color }}>{p.name}</div>
                            <div className="text-[32px] font-display font-bold text-foreground mt-1">{p.fee}</div>
                            <div className="text-[14px] text-muted-foreground">{p.size}</div>
                        </div>
                    ))}

                    {/* Rows */}
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="contents"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 + i * 0.03 }}
                        >
                            <div
                                className="py-3 px-6 text-[16px] flex items-center text-muted-foreground"
                                style={{ background: i % 2 === 0 ? "hsl(220 16% 14%)" : "transparent" }}
                            >
                                {f.name}
                            </div>
                            {[f.s, f.p, f.e].map((val, j) => (
                                <div
                                    key={j}
                                    className="py-3 px-4 flex items-center justify-center"
                                    style={{ background: i % 2 === 0 ? "hsl(220 16% 14%)" : "transparent" }}
                                >
                                    {val ? (
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center"
                                            style={{ background: `${packages[j].color}22` }}
                                        >
                                            <Check className="w-4 h-4" style={{ color: packages[j].color }} />
                                        </div>
                                    ) : (
                                        <span className="text-muted-foreground opacity-30">—</span>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </SlideLayout>
);

export default Slide18Comparison;
