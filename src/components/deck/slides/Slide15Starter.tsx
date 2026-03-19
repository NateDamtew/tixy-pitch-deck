import SlideLayout from "../SlideLayout";
import { Users, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { title: "Event Creation & Management", desc: "Build and manage your events end-to-end from one dashboard." },
    { title: "Tixy Marketplace Distribution", desc: "Your events get discovered by thousands of active buyers on the Tixy marketplace." },
    { title: "Secure Payment Processing", desc: "Accept payments with confidence. Instant settlements, zero hassle." },
    { title: "QR Tickets & Check-in", desc: "Generate QR tickets automatically. Fast, reliable scanning at the door." },
    { title: "Email Confirmations", desc: "Automated booking confirmations sent to every ticket buyer." },
    { title: "Multiple Ticket Tiers", desc: "Create VIP, Early Bird, General Admission — as many tiers as you need." },
    { title: "Promo Codes & Discounts", desc: "Drive sales with flexible discount campaigns and promo codes." },
    { title: "Bono Cashless System", desc: "Enable cashless vendor payments at your events with Bono integration." },
];

const limitations = [
    "No custom event page",
    "No invite-only events",
    "No team roles",
    "No vendor management",
];

const Slide15Starter = () => (
    <SlideLayout>
        <div className="flex flex-col h-full px-[140px] py-[80px]">
            <div className="flex items-center justify-between mb-[50px]">
                <div>
                    <motion.p
                        className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Starter Package
                    </motion.p>
                    <motion.h2
                        className="text-[56px] font-display font-bold text-foreground leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Launch Your <span className="text-gradient-tixy">First Event</span>
                    </motion.h2>
                </div>
                <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-end gap-2 justify-end">
                        <span className="text-[72px] font-display font-bold leading-none text-foreground">10%</span>
                        <span className="text-[20px] mb-3 text-tixy-cyan">per ticket</span>
                    </div>
                    <div className="flex gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-tixy-cyan" />
                            <span className="text-[16px] text-muted-foreground">Up to 1,500</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5 text-tixy-cyan" />
                            <span className="text-[16px] text-muted-foreground">Tixy Marketplace</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-4 gap-5 flex-1">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        className="rounded-2xl border border-tixy-card-border bg-tixy-card p-7 flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                    >
                        <h3 className="text-[20px] font-display font-semibold text-foreground mb-3">{f.title}</h3>
                        <p className="text-[16px] text-muted-foreground leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="flex items-center gap-8 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <span className="text-[16px] font-display font-medium text-muted-foreground">Limitations:</span>
                {limitations.map((l, i) => (
                    <span
                        key={i}
                        className="text-[15px] px-4 py-1.5 rounded-full bg-secondary text-muted-foreground"
                    >
                        {l}
                    </span>
                ))}
            </motion.div>
        </div>
    </SlideLayout>
);

export default Slide15Starter;
