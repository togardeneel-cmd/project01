import { Quote, getCommentCount } from "@/lib/storage";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface QuoteCardProps {
  quote: Quote;
  onClick: () => void;
  index: number;
  initialRotate?: number;
  initialScale?: number;
  constraintsRef?: React.RefObject<HTMLDivElement | null>;
  isHighlighted?: boolean;
  isDimmed?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function QuoteCard({ 
  quote, 
  onClick, 
  index, 
  initialRotate = 0, 
  initialScale = 1, 
  constraintsRef,
  isHighlighted = false,
  isDimmed = false,
  onHoverStart,
  onHoverEnd
}: QuoteCardProps) {
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    setCommentCount(getCommentCount(quote.id));
  }, [quote.id]);

  // Organic leaf/clover-petal border radius variants for a natural scattered look
  const radiusVariants = [
    "40% 60% 60% 40% / 40% 40% 60% 60%",
    "50% 50% 60% 40% / 60% 40% 60% 40%",
    "60% 40% 50% 50% / 40% 60% 40% 60%",
    "40% 60% 50% 50% / 50% 50% 50% 50%"
  ];
  const leafRadius = radiusVariants[index % radiusVariants.length];

  // Natural color themes for Quote Cards (Green, Yellow, White)
  const themes = [
    { bg: "bg-gradient-to-br from-[#e6f4ea]/75 to-[#ceead6]/75 backdrop-blur-md", text: "text-green-950/80", title: "text-green-900", icon: "text-green-700" },
    { bg: "bg-gradient-to-br from-[#fff8e1]/75 to-[#ffecb3]/75 backdrop-blur-md", text: "text-amber-950/80", title: "text-amber-900", icon: "text-amber-700" },
    { bg: "bg-gradient-to-br from-[#ffffff]/80 to-[#f5f5f5]/80 backdrop-blur-md", text: "text-slate-800/90", title: "text-slate-900", icon: "text-slate-600" }
  ];
  const theme = themes[index % themes.length];

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      whileDrag={{ scale: initialScale * 1.05, cursor: "grabbing", zIndex: 100 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isDimmed ? 0.2 : 1, 
        scale: isHighlighted ? initialScale * 1.15 : initialScale, 
        rotate: initialRotate,
        filter: isHighlighted ? "drop-shadow(0px 0px 12px rgba(255,255,255,0.9)) brightness(1.1)" : "drop-shadow(0px 0px 0px rgba(0,0,0,0)) brightness(1)"
      }}
      transition={{ 
        opacity: { duration: 0.3 },
        scale: { type: "spring", stiffness: 300, damping: 20 },
        default: { duration: 0.3 }
      }}
      onClick={onClick}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ borderRadius: leafRadius, zIndex: isHighlighted ? 50 : undefined }}
      className={`cursor-grab flex flex-col justify-center items-center p-4 md:p-6 shadow-sm hover:shadow-xl border border-white/50 w-[120px] h-[120px] md:w-[150px] md:h-[150px] ${theme.bg}`}
    >
      <div className="flex-1 flex items-center justify-center pointer-events-none w-full px-1">
        <p 
          className={`text-[7px] md:text-[9px] leading-relaxed text-center break-keep tracking-wide font-serif line-clamp-4 overflow-hidden ${theme.text}`}
        >
          {quote.content}
        </p>
      </div>
      
      <div className={`flex flex-col items-center justify-end mt-2 text-center pointer-events-none opacity-80 ${theme.title}`}>
        <h3 className="font-medium text-[6px] md:text-[8px] line-clamp-1">
          {quote.bookTitle}
        </h3>
        
        <div className={`flex items-center space-x-1 mt-1 ${theme.icon}`}>
          <MessageCircle size={8} />
          <span className="text-[6px] font-medium">{commentCount}</span>
        </div>
      </div>
    </motion.div>
  );
}
