import { useState } from "react";
import { addQuote } from "@/lib/storage";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AddQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdded: () => void;
}

export default function AddQuoteModal({ isOpen, onClose, onAdded }: AddQuoteModalProps) {
  const [content, setContent] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookLink, setBookLink] = useState("");
  const [pageLocation, setPageLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !bookTitle.trim()) return;

    addQuote({
      content: content.trim(),
      bookTitle: bookTitle.trim(),
      bookAuthor: bookAuthor.trim() || "작자 미상",
      bookLink: bookLink.trim() || undefined,
      pageLocation: pageLocation.trim() || undefined,
    });

    setContent("");
    setBookTitle("");
    setBookAuthor("");
    setBookLink("");
    setPageLocation("");
    onAdded();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative w-full max-w-lg bg-[#faf9f6] rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/5">
              <h2 className="text-lg font-medium text-gray-900">문장 공유하기</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">좋았던 문장</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="책에서 발견한 보석 같은 문장을 적어주세요."
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 resize-none transition-all font-serif"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">책 제목</label>
                  <input
                    type="text"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    placeholder="예: 디자인의 온도"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">저자</label>
                  <input
                    type="text"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    placeholder="예: 김편집자"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">문장 위치 (선택)</label>
                  <input
                    type="text"
                    value={pageLocation}
                    onChange={(e) => setPageLocation(e.target.value)}
                    placeholder="예: 42페이지 3째줄"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">구매 링크 (선택)</label>
                  <input
                    type="url"
                    value={bookLink}
                    onChange={(e) => setBookLink(e.target.value)}
                    placeholder="예: https://store.com/book/123"
                    className="w-full px-4 py-3 bg-white border border-black/10 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!content.trim() || !bookTitle.trim()}
                  className="w-full py-4 bg-[#2D4A22] text-white rounded-xl font-medium hover:bg-[#1A2F13] disabled:opacity-50 disabled:hover:bg-[#2D4A22] transition-colors shadow-md"
                >
                  조각 남기기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
