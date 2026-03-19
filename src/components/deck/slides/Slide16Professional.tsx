import SlideLayout from "../SlideLayout";
import { Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    { title: "Custom Event Subdomain", desc: "Get yourbrand.tixy.events — a dedicated, branded ticketing page." },
    { title: "Invite-Only Events", desc: "Create exclusive, private events with controlled guest access." },
    { title: "Advanced Analytics", desc: "Deep insights into sales performance, audience behavior, and trends." },
    { title: "Staff Roles & Team Access", desc: "Assign team members with role-based permissions and access control." },
    { title: "Vendor Management Tools", desc: "Manage vendors, track payments, and coordinate logistics in one place." },
    { title: "Priority Support", desc: "Get faster response times and dedicated support when you need it." },
    { title: "Visibility Control", desc: "Choose to list on the marketplace or keep events fully private." },
    { title: "Everything in Starter", desc: "All Starter features included — marketplace, QR, payments, and more." },
];

const Slide16Professional = () => (
    <SlideLayout>
        <div className="flex flex-col h-full px-[140px] py-[80px]">
            <div className="flex items-center justify-between mb-[50px]">
                <div>
                    <motion.p
                        className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        ⭐ Professional Package
                    </motion.p>
                    <motion.h2
                        className="text-[56px] font-display font-bold text-foreground leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Scale With <span className="text-gradient-tixy">Confidence</span>
                    </motion.h2>
                </div>
                <motion.div
                    className="text-right"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-end gap-2 justify-end">
                        <span className="text-[72px] font-display font-bold leading-none text-foreground">7%</span>
                        <span className="text-[20px] mb-3 text-tixy-cyan">per ticket</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-4 items-end">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-tixy-cyan" />
                            <span className="text-[16px] text-muted-foreground">Up to 5,000</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-tixy-cyan" />
                            <span className="text-[16px] text-muted-foreground">1–2 events/month</span>
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
                Ideal for event agencies, venues, concert promoters, and clubs
            </motion.p>
        </div>
    </SlideLayout>
);

export default Slide16Professional;
