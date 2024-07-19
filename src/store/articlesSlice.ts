import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticlesState, StatusType } from '../types/article';
import { API_URL } from '../utils/urls';


const initialState: ArticlesState = {
  articles: [],
  filteredArticles: [],
  status: StatusType.idle,
  error: undefined,
  authorFilters: [],
  sourceFilters: [],
  sortField: 'date',
  sortOrder: 'desc',
};

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    onAuthorFilter(state, action: PayloadAction<string>) {
      const author = action.payload;
      if (state.authorFilters.includes(author)) {
        state.authorFilters = state.authorFilters.filter(a => a !== author);
      } else {
        state.authorFilters.push(author);
      }
      applyFilters(state);
    },
    onSourceFilter(state, action: PayloadAction<string>) {
      const source = action.payload;
      if (state.sourceFilters.includes(source)) {
        state.sourceFilters = state.sourceFilters.filter(s => s !== source);
      } else {
        state.sourceFilters.push(source);
      }
      applyFilters(state);
    },
    setSorting(state, action: PayloadAction<{ field: string; order: string }>) {
      state.sortField = action.payload.field;
      state.sortOrder = action.payload.order;
      applyFilters(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = StatusType.loading;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = StatusType.succeeded;
        state.articles = action.payload;
        applyFilters(state);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = StatusType.failed;
        state.error = action.error.message;
      });
  },
});

function applyFilters(state: ArticlesState) {
  let filtered = state?.articles;
  if (state.authorFilters.length > 0) {
    filtered = filtered?.filter(article => state.authorFilters.includes(article.author));
  }
  if (state.sourceFilters.length > 0) {
    filtered = filtered?.filter(article => state.sourceFilters.includes(article.source));
  }

  const { sortField, sortOrder } = state;
  filtered = filtered?.sort((a, b) => {
    if (sortField === 'date') {
      return sortOrder === 'asc'
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortField === 'title') {
      return sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    }
    return 0;
  });

  state.filteredArticles = filtered;
}

export const { onAuthorFilter, onSourceFilter, setSorting } = articlesSlice.actions;

export default articlesSlice.reducer;
