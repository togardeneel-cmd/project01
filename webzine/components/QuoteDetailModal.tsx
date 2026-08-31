import { Quote, Comment, getComments, addComment, getQuotes } from "@/lib/storage";
import { X, Send, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteDetailModalProps {
  quote: Quote | null;
  onClose: () => void;
  onSelectQuote?: (quote: Quote) => void;
}

export default function QuoteDetailModal({ quote, onClose, onSelectQuote }: QuoteDetailModalProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [relatedQuotes, setRelatedQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    if (quote) {
      setComments(getComments(quote.id));
      
      const all = getQuotes();
      const related = all.filter(q => q.bookTitle === quote.bookTitle && q.id !== quote.id);
      setRelatedQuotes(related);
    }
  }, [quote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quote || !newComment.trim()) return;

    const comment = addComment({
      quoteId: quote.id,
      author: authorName.trim() || "익명",
      content: newComment.trim(),
    });

    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleShare = async () => {
    if (!quote) return;
    
    const shareText = `"${quote.content}"\n- ${quote.bookTitle} (${quote.bookAuthor})`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: quote.bookTitle,
          text: shareText,
        });
      } catch (err) {
        console.log("공유가 취소되었거나 실패했습니다.", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("문장이 클립보드에 복사되었습니다!");
      } catch (err) {
        alert("복사 기능이 지원되지 않는 브라우저입니다.");
      }
    }
  };

  const formatDate = (ts: number) => {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(ts));
  };

  const dateObj = quote ? new Date(quote.createdAt) : new Date();
  const monthStr = dateObj.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const dayStr = dateObj.toLocaleDateString("en-US", { day: "2-digit" });

  return (
    <AnimatePresence>
      {quote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh] rounded-xl overflow-hidden"
            style={{
              backgroundColor: "#dcf0e2",
              backgroundImage: `
                linear-gradient(90deg, transparent 76px, #e08e8e 76px, #e08e8e 77px, transparent 77px, transparent 81px, #e08e8e 81px, #e08e8e 82px, transparent 82px),
                repeating-linear-gradient(transparent, transparent 46px, #96abc2 46px, #96abc2 47px),
                radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)
              `,
              backgroundSize: "100% 100%, 100% 47px, 100% 100%",
              backgroundPosition: "0 0, 0 10px, 0 0"
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-2">
              <div className="flex items-center space-x-2 pt-2">
                <button onClick={handleShare} className="p-2 hover:bg-black/5 rounded-full" title="공유하기">
                  <Share2 size={20} className="text-gray-600" />
                </button>
                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full" title="닫기">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>
              
              <div className="flex items-center text-gray-500 pt-3">
                <span className="font-serif text-sm">{dateObj.toLocaleDateString("ko-KR")}</span>
              </div>
            </div>

            {/* Lined Content Area */}
            <div className="overflow-y-auto custom-scrollbar flex-1 relative z-10">
              <div className="w-full pl-[100px] pr-8 py-8 min-h-[300px]">
                <p className="font-serif text-[#2c3e50] text-[20px] md:text-[22px] leading-[47px] break-keep" style={{ paddingTop: '5px' }}>
                  "{quote.content}"
                </p>
                
                <p className="font-serif text-[#2c3e50]/70 text-[18px] leading-[47px] mt-[47px]">
                  - {quote.bookTitle} {quote.bookAuthor ? `(${quote.bookAuthor})` : ''} {quote.pageLocation ? `<${quote.pageLocation}>` : ''}
                </p>
                
                {quote.bookLink && (
                  <div className="mt-4">
                    <a 
                      href={quote.bookLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-[#2c3e50] text-white text-xs font-medium rounded-md hover:bg-black transition-colors"
                    >
                      책 구매하러 가기
                    </a>
                  </div>
                )}
              </div>

              {/* Related Quotes */}
              {relatedQuotes.length > 0 && (
                <div className="px-6 py-8 border-t-2 border-[#111920] bg-white/20">
                  <h4 className="text-sm font-bold text-[#111920]/60 mb-4 uppercase tracking-wider">
                    이 책의 다른 조각들
                  </h4>
                  <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    {relatedQuotes.map((rq) => (
                      <button
                        key={rq.id}
                        onClick={() => onSelectQuote?.(rq)}
                        className="flex-shrink-0 w-[240px] text-left p-4 bg-white/50 border border-black/10 rounded-lg hover:bg-white/80 hover:shadow-md hover:-translate-y-0.5 transition-all"
                      >
                        <p className="font-serif text-[#2c3e50] text-sm leading-relaxed line-clamp-3">
                          "{rq.content}"
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Comments Section */}
              <div className="pl-[100px] pr-8 py-8 border-t-2 border-[#111920]">
                <h4 className="text-sm font-bold text-gray-500 mb-6">
                  COMMENTS
                </h4>
                
                <div className="space-y-4">
                  {comments.length === 0 ? (
                    <p className="text-gray-400 py-4 font-serif text-sm">첫 번째 코멘트를 남겨보세요.</p>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="group pb-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-[#2c3e50] text-sm">{comment.author}</span>
                          <span className="text-xs text-gray-400">{formatDate(comment.createdAt)}</span>
                        </div>
                        <p className="text-[#2c3e50]/90 text-sm font-serif leading-relaxed">{comment.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Comment Input */}
            <div className="p-4 bg-white/40 backdrop-blur-sm border-t border-black/5">
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-xl mx-auto">
                <input
                  type="text"
                  placeholder="이름"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-20 px-3 py-2 bg-white/60 border border-black/10 rounded-md text-[#2c3e50] font-serif placeholder:text-gray-400 text-sm outline-none transition-all focus:bg-white"
                />
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="감상을 남겨주세요..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 bg-white/60 border border-black/10 rounded-md text-[#2c3e50] font-serif placeholder:text-gray-400 text-sm outline-none transition-all focus:bg-white"
                  />
                  <button
                    type="submit"
                    disabled={!newComment.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-black disabled:opacity-50 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
