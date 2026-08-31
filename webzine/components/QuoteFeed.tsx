"use client";

import { useEffect, useState, useRef } from "react";
import { Quote, getQuotes } from "@/lib/storage";
import { Search } from "lucide-react";
import QuoteCard from "./QuoteCard";
import QuoteDetailModal from "./QuoteDetailModal";

interface QuoteFeedProps {
  refreshTrigger: number;
}

interface Position {
  top: string;
  left: string;
  rotate: number;
  scale: number;
  zIndex: number;
}

export default function QuoteFeed({ refreshTrigger }: QuoteFeedProps) {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [hoveredBookTitle, setHoveredBookTitle] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const fetchedQuotes = await getQuotes();
      const filtered = fetchedQuotes.filter(q => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        if (searchType === "all") {
          return (
            q.bookTitle.toLowerCase().includes(query) ||
            q.bookAuthor.toLowerCase().includes(query) ||
            q.content.toLowerCase().includes(query)
          );
        } else if (searchType === "bookTitle") {
          return q.bookTitle.toLowerCase().includes(query);
        } else if (searchType === "bookAuthor") {
          return q.bookAuthor.toLowerCase().includes(query);
        } else if (searchType === "content") {
          return q.content.toLowerCase().includes(query);
        }
        return true;
      });
      setQuotes(filtered);

      // Generate random positions and styles for the "scattered" field effect
      const isMobile = window.innerWidth < 768;
      const newPositions = filtered.map((_, i) => {
        const topBase = isMobile ? i * 250 : Math.random() * 800;
        const topOffset = isMobile ? Math.random() * 50 : 0;
        const leftRange = isMobile ? 20 : 75;
        const leftOffset = isMobile ? 5 : 5;
        return {
          top: isMobile ? `${topBase + topOffset}px` : `${Math.random() * 60 + 5}%`,
          left: `${Math.random() * leftRange + leftOffset}%`,
          rotate: (Math.random() - 0.5) * 40,
          scale: 0.85 + Math.random() * 0.3,
          zIndex: Math.floor(Math.random() * 50),
        };
      });
      setPositions(newPositions);
    })();
  }, [refreshTrigger, searchQuery, searchType]);

  return (
    <div className="w-full relative min-h-[150vh] md:min-h-[1000px] overflow-x-hidden pb-32" ref={containerRef}>
      
      {/* Search Bar */}
      <div className="w-full max-w-xl mx-auto px-4 pt-4 pb-12 z-20 relative">
        <div className="flex bg-white/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-white/50 p-1">
          <select 
            className="bg-transparent border-none outline-none text-green-950 font-medium text-sm px-3 py-2 cursor-pointer"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="all">전체</option>
            <option value="bookTitle">책 제목</option>
            <option value="bookAuthor">저자</option>
            <option value="content">문장</option>
          </select>
          <div className="w-px bg-white/50 mx-1 my-2"></div>
          <input 
            type="text"
            placeholder="검색어를 입력하세요..."
            className="flex-1 bg-transparent border-none outline-none text-green-950 placeholder:text-green-900/50 px-3 py-2 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="px-3 text-green-900/70 hover:text-green-950 transition-colors">
            <Search size={18} />
          </button>
        </div>
      </div>
      {quotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-32 text-center w-full z-10 relative">
          <p className="text-xl text-gray-500 font-serif mb-4">아직 들판에 네잎클로버가 없습니다.</p>
          <p className="text-gray-400 text-sm">우측 상단의 버튼을 눌러 첫 번째 행운을 심어보세요.</p>
        </div>
      ) : (
        <>
          {quotes.map((quote, index) => {
            const pos = positions[index];
            if (!pos) return null; // wait for positions to be generated
            
            return (
              <div
                key={quote.id}
                className="absolute transition-all duration-300"
                style={{
                  top: pos.top,
                  left: pos.left,
                  zIndex: hoveredBookTitle === quote.bookTitle ? 100 : pos.zIndex,
                }}
              >
                <QuoteCard
                  quote={quote}
                  index={index}
                  initialRotate={pos.rotate}
                  initialScale={pos.scale}
                  isHighlighted={hoveredBookTitle === quote.bookTitle}
                  isDimmed={hoveredBookTitle !== null && hoveredBookTitle !== quote.bookTitle}
                  onHoverStart={() => setHoveredBookTitle(quote.bookTitle)}
                  onHoverEnd={() => setHoveredBookTitle(null)}
                  onClick={() => setSelectedQuote(quote)}
                  constraintsRef={containerRef}
                />
              </div>
            );
          })}
        </>
      )}

      <QuoteDetailModal
        quote={selectedQuote}
        onClose={() => setSelectedQuote(null)}
        onSelectQuote={(q) => setSelectedQuote(q)}
      />
    </div>
  );
}
