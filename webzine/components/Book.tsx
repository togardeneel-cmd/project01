"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Book, TocItem } from "@/lib/mock-data";

type BookProps = {
  book: Book;
  isExpanded: boolean;
  onToggle: () => void;
  onSelectContent?: (item: TocItem) => void;
};

const COLOR_MAP = {
  ivory: "bg-[var(--color-ivory)] text-[var(--color-bookshelf)]",
  sand: "bg-[var(--color-sand)] text-[var(--color-bookshelf)]",
  olive: "bg-[var(--color-olive)] text-[var(--color-ivory)]",
  garnet: "bg-[var(--color-garnet)] text-[var(--color-ivory)]",
};

// Use ease-in-out or cubic-bezier(0.2, 0.6, 0.25, 1) as requested. No bounce.
const SPRING_TRANSITION: Transition = {
  type: "tween",
  ease: [0.2, 0.6, 0.25, 1],
  duration: 0.6,
};

export default function BookComponent({ book, isExpanded, onToggle, onSelectContent }: BookProps) {
  const [showToc, setShowToc] = useState(false);

  // If the book is closed by the parent, ensure TOC is also closed
  useEffect(() => {
    if (!isExpanded) {
      setShowToc(false);
    }
  }, [isExpanded]);

  const handleBookClick = () => {
    if (!isExpanded) {
      onToggle(); // expand
    }
  };

  const colorClass = COLOR_MAP[book.colorType];
  const isDarkColor = book.colorType === "olive" || book.colorType === "garnet";

  return (
    <motion.div
      layout
      transition={SPRING_TRANSITION}
      onClick={handleBookClick}
      className={`
        relative flex overflow-hidden
        rounded-2xl shadow-[var(--shadow-warm-ring)]
        hover:brightness-105 transition-all
        ${colorClass}
        ${isExpanded ? "flex-1 cursor-default" : "h-16 w-full md:h-auto md:w-24 hover:shadow-lg cursor-pointer flex-shrink-0"}
      `}
    >
      {/* 1단계: 책등 (Spine) */}
      <AnimatePresence mode="wait">
        {!isExpanded && (
          <motion.div
            key={`spine-${book.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex flex-row md:flex-col items-center justify-between md:justify-center py-0 px-6 md:py-10 md:px-4"
          >
            <div 
              className="font-serif text-lg md:text-xl tracking-widest whitespace-nowrap md:[writing-mode:vertical-rl] md:[text-orientation:mixed]"
            >
              {book.title}
            </div>
            
            <div 
              className="font-sans text-sm tracking-widest whitespace-nowrap md:mt-auto opacity-70 md:[writing-mode:vertical-rl] md:[text-orientation:mixed]"
            >
              {book.author}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2단계: 표지 (Cover) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key={`cover-${book.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute inset-0 flex flex-col p-8 md:p-14 w-full h-full"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className={`absolute top-6 right-6 p-2 rounded-full transition-colors z-20 ${isDarkColor ? 'hover:bg-black/20 text-[var(--color-ivory)]' : 'hover:bg-black/10 text-[var(--color-bookshelf)]'}`}
              aria-label="Close book"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <div className="flex-1 flex flex-col justify-center max-w-2xl relative z-10">
              <motion.h2 
                layoutId={`title-${book.id}`} 
                className="font-serif text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] mb-6"
              >
                {book.title}
              </motion.h2>
              <motion.p 
                layoutId={`author-${book.id}`} 
                className="text-xl md:text-2xl font-sans opacity-80"
              >
                {book.author}
              </motion.p>
            </div>

            {/* Abstract Decorative Element */}
            <div className="absolute bottom-12 right-12 opacity-15 pointer-events-none transform -rotate-12 scale-150 origin-bottom-right">
              {book.colorType === 'ivory' && (
                <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                </svg>
              )}
              {book.colorType === 'sand' && (
                <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="50" />
                </svg>
              )}
              {book.colorType === 'olive' && (
                <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="0" y="0" width="100" height="100" rx="20" />
                </svg>
              )}
              {book.colorType === 'garnet' && (
                <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0 100 Q 50 0 100 100 Z" />
                </svg>
              )}
            </div>

            {/* TOC Button */}
            {!showToc && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowToc(true);
                }}
                className={`
                  self-start mt-8 px-8 py-3.5 rounded-lg font-sans text-[15px] font-medium tracking-wide
                  border shadow-sm hover:shadow transition-all z-10
                  ${isDarkColor 
                    ? "border-white/20 bg-white/10 hover:bg-white/20 text-white" 
                    : "border-[var(--color-ring)] bg-white/40 hover:bg-white text-[var(--color-bookshelf)]"}
                `}
              >
                목차 보기
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3단계: 목차 (TOC Panel) */}
      <AnimatePresence>
        {isExpanded && showToc && (
          <motion.div
            initial={{ y: "100%", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0.5 }}
            transition={{ type: "tween", ease: [0.2, 0.6, 0.25, 1], duration: 0.5 }}
            className={`
              absolute bottom-0 left-0 w-full h-[65%] md:h-[75%] z-20
              rounded-t-3xl border-t shadow-2xl p-8 md:p-14 overflow-y-auto
              ${isDarkColor ? 'bg-[var(--color-bookshelf)] border-white/10 text-[var(--color-ivory)]' : 'bg-[var(--color-ivory)] border-[var(--color-hairline)] text-[var(--color-bookshelf)]'}
            `}
          >
            <div className="flex justify-between items-center mb-10">
              <h3 className="font-serif text-3xl font-medium tracking-tight">목차</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowToc(false);
                }}
                className={`p-2 rounded-full transition-colors ${isDarkColor ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}
              >
                <X size={24} />
              </button>
            </div>
            
            <ul className="flex flex-col border-t border-[var(--color-hairline)]">
              {book.toc.map((item, index) => (
                <li key={index} className={`border-b ${isDarkColor ? 'border-white/10' : 'border-[var(--color-hairline)]'}`}>
                  <a
                    href="#"
                    className={`
                      flex items-center justify-between py-6 group
                      hover:px-4 transition-all duration-300
                      ${isDarkColor ? 'hover:bg-white/5' : 'hover:bg-black/5'}
                      `}
                      onClick={(e) => {
                        if (onSelectContent) {
                          e.preventDefault();
                          e.stopPropagation();
                          onSelectContent(item);
                        } else {
                          e.stopPropagation();
                        }
                      }}
                  >
                    <span className="font-sans text-lg font-medium">{item.label}</span>
                    <ExternalLink size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-muted)]" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
