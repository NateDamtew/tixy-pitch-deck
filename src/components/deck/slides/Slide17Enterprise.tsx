import SlideLayout from "../SlideLayout";
import { Users, Calendar, Crown } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { title: "White-Labeled Platform", desc: "A fully branded ticketing platform that looks and feels like yours." },
    { title: "Custom Domain Hosting", desc: "Host on your own domain — complete brand ownership." },
    { title: "Your Own Marketplace", desc: "Build and run your own event marketplace with multiple organizers." },
    { title: "Host Other Organizers", desc: "Allow other event creators to sell tickets through your platform." },
    { title: "Custom Payment Gateway", desc: "Integrate your preferred payment provider for full control." },
    { title: "Advanced Reporting", desc: "Enterprise-grade analytics, exports, and custom dashboards." },
    { title: "Dedicated Tech Support", desc: "A dedicated team to help you launch, scale, and optimize." },
    { title: "Custom Integrations", desc: "Tailored API integrations to fit your existing tech stack." },
];

const goldAccent = "hsl(40 100% 60%)";

const Slide17Enterprise = () => (
    <SlideLayout>
        <div className="flex flex-col h-full px-[140px] py-[80px]">
            <div className="flex items-center justify-between mb-[50px]">
                <div>
                    <motion.p
                        className="text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4 flex items-center gap-3"
                        style={{ color: goldAccent }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Crown className="w-5 h-5" style={{ color: goldAccent }} />
                        Enterprise Package
                    </motion.p>
                    <motion.h2
                        className="text-[56px] font-display font-bold text-foreground leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Your Platform, <span style={{ color: goldAccent }}>Your Rules</span>
                    </motion.h2>
                </div>
                <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-end gap-2 justify-end">
                        <span className="text-[72px] font-display font-bold leading-none text-foreground">5%</span>
                        <span className="text-[20px] mb-3 text-tixy-cyan">per ticket</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-4 items-end">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" style={{ color: goldAccent }} />
                            <span className="text-[16px] text-muted-foreground">5,000+ attendees</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" style={{ color: goldAccent }} />
                            <span className="text-[16px] text-muted-foreground">12+ events/year</span>
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

            <motion.p
                className="text-[17px] mt-6 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                Ideal for festivals, ticketing companies, large venues, and national organizers
            </motion.p>
        </div>
    </SlideLayout>
);

export default Slide17Enterprise;
