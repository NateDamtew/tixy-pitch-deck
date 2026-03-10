import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Grid3X3, Download, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import ScaledSlide from "./ScaledSlide";
import Slide01Cover from "./slides/Slide01Cover";
import Slide02Problem from "./slides/Slide02Problem";
import Slide03Commission from "./slides/Slide03Commission";
import Slide04Offline from "./slides/Slide04Offline";
import Slide05ArifPay from "./slides/Slide05ArifPay";
import Slide06Promoter from "./slides/Slide06Promoter";
import Slide07Dashboard from "./slides/Slide07Dashboard";
import Slide08Tiers from "./slides/Slide08Tiers";
import Slide09Marketing from "./slides/Slide09Marketing";
import Slide10CTA from "./slides/Slide10CTA";
import Slide11Bono from "./slides/Slide11Bono";
import Slide12WhyTixy from "./slides/Slide12WhyTixy";

const slides = [
  Slide01Cover,        // 1. Hook
  Slide02Problem,      // 2. Pain points
  Slide03Commission,   // 3. The Solution — Platform overview
  Slide07Dashboard,    // 4. Show the product — visual proof
  Slide11Bono,         // 5. Cashless wow factor
  Slide04Offline,      // 6. Reliability
  Slide05ArifPay,      // 7. Local payments
  Slide06Promoter,     // 8. Growth engine
  Slide08Tiers,        // 9. Scalable partnerships
  Slide09Marketing,    // 10. Bonus value — help them sell
  Slide12WhyTixy,      // 11. Summary — why Tixy
  Slide10CTA,          // 12. Call to action
];

const slideLabels = [
  "Cover", "The Problem", "The Platform", "Mission Control",
  "Bono", "Offline Mode", "Payments", "Promoter Engine",
  "Tiers", "Marketing", "Why Tixy", "Get Started",
];

const PitchDeck = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCurrent(c => Math.min(c + 1, slides.length - 1)), []);
  const prev = useCallback(() => setCurrent(c => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && isFullscreen) {
        document.exitFullscreen?.();
      }
      if (e.key === "g") setShowGrid(g => !g);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const enterFullscreen = () => {
    document.documentElement.requestFullscreen?.();
  };

  const handleDownloadPDF = useCallback(async () => {
    setIsGeneratingPDF(true);
    setIsPrintMode(true);

    // Wait for slides to render
    await new Promise(r => setTimeout(r, 800));

    try {
      const container = printRef.current;
      if (!container) return;

      const slideEls = container.querySelectorAll<HTMLElement>(".print-slide-inner");
      const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

      for (let i = 0; i < slideEls.length; i++) {
        const canvas = await html2canvas(slideEls[i], {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: null,
          width: 1920,
          height: 1080,
        });

        const imgData = canvas.toDataURL("image/png");
        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(imgData, "PNG", 0, 0, 1920, 1080);
      }

      pdf.save("Tixy-Pitch-Deck.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setIsPrintMode(false);
      setIsGeneratingPDF(false);
    }
  }, []);

  const CurrentSlide = slides[current];

  if (isPrintMode) {
    return (
      <div className="print-deck">
        {slides.map((Slide, i) => (
          <div key={i} className="print-slide">
            <div className="print-slide-inner">
              <Slide />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (showGrid) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="text-2xl font-display font-bold text-foreground">All Slides</h2>
          <button onClick={() => setShowGrid(false)}
            className="px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-display hover:bg-tixy-card transition-colors">
            ← Back to Presentation
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {slides.map((Slide, i) => (
            <button key={i} onClick={() => { setCurrent(i); setShowGrid(false); }}
              className={`group relative rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${i === current ? "border-tixy-blue glow-tixy" : "border-tixy-card-border hover:border-muted-foreground"}`}>
              <div className="aspect-video">
                <ScaledSlide><Slide /></ScaledSlide>
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-3">
                <p className="text-xs font-display text-muted-foreground">
                  <span className="text-tixy-cyan font-bold">{i + 1}</span> · {slideLabels[i]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      {/* Toolbar */}
      {!isFullscreen && (
        <div className="h-14 border-b border-border flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-sm font-display font-bold text-gradient-tixy">Tixy Pitch Deck</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground font-display">{slideLabels[current]}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowGrid(true)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              title="Grid view (G)">
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button onClick={handleDownloadPDF}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              title="Download as PDF">
              <Download className="w-4 h-4" />
            </button>
            <button onClick={enterFullscreen}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              title="Fullscreen">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Slide area */}
      <div className="flex-1 relative" onClick={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x > rect.width / 2) next(); else prev();
      }}>
        <AnimatePresence mode="wait">
          <motion.div key={current} className="absolute inset-0"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <ScaledSlide className="w-full h-full">
              <CurrentSlide />
            </ScaledSlide>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      {!isFullscreen && (
        <div className="h-16 border-t border-border flex items-center justify-center gap-6 shrink-0">
          <button onClick={prev} disabled={current === 0}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-30">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-tixy-blue w-6" : "bg-secondary hover:bg-muted-foreground"}`} />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-display min-w-[60px] text-center">
            {current + 1} / {slides.length}
          </span>
          <button onClick={next} disabled={current === slides.length - 1}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-30">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PitchDeck;
