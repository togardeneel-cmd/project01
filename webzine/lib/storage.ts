export interface Comment {
  id: string;
  quoteId: string;
  author: string;
  content: string;
  createdAt: number;
}

export interface Quote {
  id: string;
  bookTitle: string;
  bookAuthor: string;
  content: string;
  createdAt: number;
  bookLink?: string;
  pageLocation?: string;
}

const QUOTES_KEY = "webzine_quotes_v2";
const COMMENTS_KEY = "webzine_comments_v2";

const generateId = () => Math.random().toString(36).substr(2, 9);

export const getQuotes = (): Quote[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(QUOTES_KEY);
  if (!data) {
    // Initial dummy data
    const initialQuotes: Quote[] = [
      {
        id: "q1",
        bookTitle: "아주 먼 산책",
        bookAuthor: "최수향",
        content: "한 사람의 사랑이 먼저 땅에 묻히고, 그 사랑이 자라나 석달 전 고양이를 묻은 나의 마음을 다독인다. 저마다의 지구를 가득 채우는 것은 다름 아닌 한 존재를 향한 사랑이다.",
        pageLocation: "7페이지 마지막 문장",
        createdAt: Date.now() - 100000,
      }
    ];
    localStorage.setItem(QUOTES_KEY, JSON.stringify(initialQuotes));
    return initialQuotes;
  }
  
  const parsedQuotes: Quote[] = JSON.parse(data);
  const filteredQuotes = parsedQuotes.filter(q => !q.content.includes("해봐야겠다"));
  
  if (parsedQuotes.length !== filteredQuotes.length) {
    localStorage.setItem(QUOTES_KEY, JSON.stringify(filteredQuotes));
  }
  
  return filteredQuotes;
};

export const addQuote = (quote: Omit<Quote, "id" | "createdAt">): Quote => {
  const quotes = getQuotes();
  const newQuote: Quote = {
    ...quote,
    id: generateId(),
    createdAt: Date.now(),
  };
  localStorage.setItem(QUOTES_KEY, JSON.stringify([newQuote, ...quotes]));
  return newQuote;
};

export const getComments = (quoteId: string): Comment[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(COMMENTS_KEY);
  if (!data) return [];
  
  const allComments: Comment[] = JSON.parse(data);
  return allComments.filter(c => c.quoteId === quoteId).sort((a, b) => a.createdAt - b.createdAt);
};

export const addComment = (comment: Omit<Comment, "id" | "createdAt">): Comment => {
  let allComments: Comment[] = [];
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(COMMENTS_KEY);
    if (data) allComments = JSON.parse(data);
  }

  const newComment: Comment = {
    ...comment,
    id: generateId(),
    createdAt: Date.now(),
  };
  
  localStorage.setItem(COMMENTS_KEY, JSON.stringify([...allComments, newComment]));
  return newComment;
};

export const getCommentCount = (quoteId: string): number => {
  return getComments(quoteId).length;
};
