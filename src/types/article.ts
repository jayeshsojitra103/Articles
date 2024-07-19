export interface Article {
  title: string;
  url: string;
  image: string;
  date: string;
  body: string;
  source: string;
  author: string;
}

export enum StatusType {
  idle = "idle",
  loading = "loading",
  succeeded = "succeeded",
  failed = "failed",
}

export interface ArticlesState {
  articles: Article[];
  filteredArticles: Article[];
  status: StatusType;
  error: string | undefined;
  authorFilters: string[];
  sourceFilters: string[];
  sortField: string;
  sortOrder: string;
}
