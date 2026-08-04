"use client";

import { useState } from "react";
import Bookshelf from "@/components/Bookshelf";
import { X } from "lucide-react";
import type { TocItem } from "@/lib/mock-data";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<TocItem | null>(null);

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-4 bg-[url('/07.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] mix-blend-overlay" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}
      ></div>
      
      {/* Left Pane: Bookshelf */}
      <div className={`relative z-10 h-full flex flex-col justify-center transition-all duration-500 ease-in-out ${selectedItem ? 'w-full md:w-1/2 pr-0 md:pr-8' : 'w-full'}`}>
        <Bookshelf onSelectContent={setSelectedItem} />
      </div>

      {/* Right Pane: Content (Internal) */}
      {selectedItem && (
        <div className="fixed md:relative inset-4 md:inset-auto z-50 md:z-10 w-auto md:w-1/2 h-auto md:h-[calc(100vh-2rem)] flex flex-col bg-[url('/bbg02.jpg')] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden border border-black/10 transition-all duration-500 ease-in-out animate-in fade-in slide-in-from-bottom-8 md:slide-in-from-right-8">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-black/5 bg-transparent">
            <span className="text-sm font-medium text-gray-500 truncate pr-4">{selectedItem.label}</span>
            <button 
              onClick={() => setSelectedItem(null)}
              className="p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          <div className="w-full flex-1 overflow-y-auto p-6 md:p-14 lg:p-20 custom-scrollbar">
            <article className="max-w-prose mx-auto">
              <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-tight mb-8 md:mb-12 leading-snug text-gray-900 break-keep">{selectedItem.label}</h1>
              <div className="font-sans text-base md:text-lg leading-relaxed text-gray-700 whitespace-pre-wrap">
                {selectedItem.content}
              </div>
            </article>
          </div>
        </div>
      )}
    </main>
  );
}
