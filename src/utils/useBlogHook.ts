import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppDispatch } from "../store/hooks";
import {
  fetchArticles,
  onAuthorFilter,
  onSourceFilter,
  setSorting,
} from "../store/articlesSlice";

export const useBlogHook = () => {
  const dispatch = useAppDispatch();
  const articlesStatus = useSelector(
    (state: RootState) => state.articles.status
  );
  const { articles, filteredArticles, status, error } = useSelector(
    (state: RootState) => state.articles
  );

  const [categories, setCategories] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [currentArticles, setCurrentArticles] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const articlesPerPage = 5;
  const maxPage = Math.ceil(filteredArticles.length / articlesPerPage);

  useEffect(() => {
    setCurrentArticles(filteredArticles);
    setCurrentPage(1);
  }, [filteredArticles]);

  useEffect(() => {
    const currentItems = filteredArticles.slice(
      (currentPage - 1) * articlesPerPage,
      currentPage * articlesPerPage
    );
    setCurrentArticles(currentItems);
    // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [filteredArticles, currentPage]);

  useEffect(() => {
    if (articlesStatus === "idle") {
      dispatch(fetchArticles());
    }
  }, [articlesStatus, dispatch]);

  useEffect(() => {
    // Extract authors and categories from API response
    const uniqueAuthors = [
      ...new Set(articles.map((article) => article.author)),
    ];
    setAuthors(uniqueAuthors);

    const uniqueCategories = [
      ...new Set(articles.map((article) => article.source)),
    ];
    setCategories(uniqueCategories);
  }, [articles]);

  const handleCategoryChange = (source: string) => {
    dispatch(onSourceFilter(source));
  };

  const handleAuthorChange = (author: string) => {
    dispatch(onAuthorFilter(author));
  };

  const handleSortChange = (field: string, order: string) => {
    dispatch(setSorting({ field: field, order: order }));
  };
  return {
    articles: currentArticles,
    status,
    error,
    authors,
    categories,
    handleCategoryChange,
    handleAuthorChange,
    handleSortChange,
    setCurrentPage,
    currentPage,
    maxPage,
  };
};
