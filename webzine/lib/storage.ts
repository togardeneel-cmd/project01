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

export const getQuotes = async (): Promise<Quote[]> => {
  // Fetch quotes from the server‑side KV store
  try {
    const res = await fetch('/api/quotes', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch quotes');
    const data: Quote[] = await res.json();
    // Filter out unwanted content ("해봐야겠다") client‑side as before
    return data.filter(q => !q.content.includes('해봐야겠다'));
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const addQuote = async (quote: Omit<Quote, "id" | "createdAt">): Promise<Quote> => {
  try {
    const res = await fetch('/api/quotes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quote),
    });
    if (!res.ok) throw new Error('Failed to add quote');
    const newQuote: Quote = await res.json();
    return newQuote;
  } catch (e) {
    console.error(e);
    // Fallback to localStorage if API fails
    const quotes = await getQuotes();
    const newQuote: Quote = { ...quote, id: Math.random().toString(36).substr(2, 9), createdAt: Date.now() };
    localStorage.setItem('webzine_quotes_v2', JSON.stringify([newQuote, ...quotes]));
    return newQuote;
  }
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
