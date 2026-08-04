"use client";

import { useState } from "react";
import BookComponent from "./Book";
import { BOOKS, TocItem } from "@/lib/mock-data";
import { LayoutGroup } from "framer-motion";

export default function Bookshelf({ onSelectContent }: { onSelectContent?: (item: TocItem) => void }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  return (
    <div className="w-full max-w-5xl mx-auto py-16 px-4 md:px-8 flex flex-col min-h-screen justify-center">
      <div className="flex flex-col mb-12 text-center md:text-left">
        <h1 className="font-script text-5xl md:text-6xl tracking-tight mb-4 text-ivory drop-shadow-md">
          To be continued
        </h1>

      </div>

      <LayoutGroup>
        <div className="flex flex-col md:flex-row h-[550px] md:h-[600px] gap-3 md:gap-4 items-stretch relative">
          {BOOKS.map((book) => (
            <BookComponent
              key={book.id}
              book={book}
              isExpanded={expandedId === book.id}
              onToggle={() => setExpandedId(expandedId === book.id ? null : book.id)}
              onSelectContent={onSelectContent}
            />
          ))}
        </div>
      </LayoutGroup>
    </div>
  );
}
