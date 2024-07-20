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
  authors:Array<string>;
  sources:Array<string>;
  filteredArticles: Article[];
  status: StatusType;
  error: string | undefined;
  authorFilters: Array<string>;
  sourceFilters: Array<string>;
  sortField: string;
  sortOrder: string;
}
