"use client";

import { useState, useEffect } from "react";
import QuoteFeed from "@/components/QuoteFeed";
import AddQuoteModal from "@/components/AddQuoteModal";
import { Plus, BookOpen } from "lucide-react";

export default function Home() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fullText = "Sometimes, a sentence feels like a piece of luck";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullText.length) {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 70);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  const handleQuoteAdded = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source src="/24.mp4" type="video/mp4" />
      </video>

      {/* Fine SVG Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Main Headline - Full Width Top */}
      <div className="relative z-10 w-full pt-12 md:pt-16 pb-8 overflow-hidden flex justify-center px-2">
        <h2 
          className="w-full text-center font-serif text-[#5D4037]/90 leading-none whitespace-nowrap tracking-tight"
          style={{ fontSize: "clamp(12px, 3.8vw, 120px)" }}
        >
          <span className="relative inline-block text-left">
            {/* Invisible full text to reserve space */}
            <span className="opacity-0 pointer-events-none">{fullText}</span>
            {/* Visible typing text */}
            <span className="absolute top-0 left-0 whitespace-nowrap bg-[linear-gradient(transparent_45%,_rgba(255,255,255,0.7)_45%,_rgba(255,255,255,0.7)_85%,_transparent_85%)] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              {displayedText}
              <span className={`inline-block w-[0.05em] h-[0.8em] bg-[#5D4037]/70 ml-[2px] align-baseline transition-opacity duration-1000 ${isTyping ? 'animate-pulse opacity-100' : 'opacity-0'}`}></span>
            </span>
          </span>
        </h2>
      </div>

      {/* Floating Add Button - Bottom Center */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => setIsAddModalOpen(true)}
          style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
          className="flex items-center space-x-2 bg-[#2D4A22]/90 backdrop-blur-md text-white px-8 py-5 hover:bg-[#1A2F13] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <Plus size={20} />
          <span className="text-base font-medium">조각 남기기</span>
        </button>
      </div>

      <div className="relative z-10 w-full">
        <QuoteFeed refreshTrigger={refreshTrigger} />
      </div>

      <AddQuoteModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdded={handleQuoteAdded}
      />
    </main>
  );
}
