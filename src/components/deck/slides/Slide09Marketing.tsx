import SlideLayout from "../SlideLayout";
import { Star, Share2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Slide09Marketing = () => (
  <SlideLayout>
    <div className="flex h-full">
      <div className="flex-1 flex flex-col justify-center px-[140px] py-[100px]">
        <motion.p className="text-tixy-cyan text-[20px] font-display font-semibold tracking-[4px] uppercase mb-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          The Tixy Bonus
        </motion.p>
        <motion.h2 className="text-[56px] font-display font-bold text-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          We Help You <span className="text-gradient-tixy">Sell Out</span>
        </motion.h2>
        <motion.p className="text-[22px] text-muted-foreground mb-14 leading-relaxed"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          Your event doesn't just live on your channels.<br />
          It gets amplified across the Tixy ecosystem.
        </motion.p>

        <div className="flex flex-col gap-10">
          {[
            { icon: Star, title: "Featured Placement", desc: "Your event showcased on the Tixy homepage and app to thousands of active fans looking for events." },
            { icon: Share2, title: "Social Media Exposure", desc: "Cross-promotion on Tixy's growing social channels. Your event reaches audiences beyond your own." },
            { icon: TrendingUp, title: "Discovery Algorithm", desc: "Tixy's recommendation engine surfaces your event to fans based on interests, location, and history." },
          ].map((item, i) => (
            <motion.div key={i} className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}>
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-tixy flex items-center justify-center">
                <item.icon className="w-7 h-7" style={{ color: "white" }} />
              </div>
              <div>
                <h3 className="text-[26px] font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-[19px] text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right visual - phone mockup */}
      <div className="w-[650px] flex items-center justify-center relative">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-tixy opacity-[0.06] blur-[80px]" />
        <motion.div className="w-[340px] h-[640px] rounded-[40px] border-2 border-tixy-card-border bg-tixy-card overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}>
          {/* Status bar */}
          <div className="h-10 flex items-center justify-center">
            <div className="w-24 h-5 rounded-full bg-secondary" />
          </div>
          {/* Content */}
          <div className="flex-1 p-5 space-y-4">
            <p className="text-[14px] text-muted-foreground font-display">Featured Events</p>
            {[
              { title: "Addis Music Festival", date: "Mar 15", tag: "🔥 Trending" },
              { title: "Jazz Night Harrar", date: "Mar 22", tag: "⭐ Featured" },
              { title: "DJ Nate Live", date: "Apr 1", tag: "🎯 For You" },
            ].map((e, i) => (
              <motion.div key={i} className="rounded-xl bg-secondary p-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}>
                <div className="h-20 rounded-lg bg-gradient-tixy opacity-60 mb-3" />
                <p className="text-[14px] text-foreground font-semibold">{e.title}</p>
                <div className="flex justify-between mt-1">
                  <span className="text-[12px] text-muted-foreground">{e.date}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-tixy-card text-tixy-cyan">{e.tag}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide09Marketing;
