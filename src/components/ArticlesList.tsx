import React from "react";
import {ArticleItem} from "./ArticleItem";
import { Article } from "../types/article";
import "./ArticlesList.scss";

interface ArticlesListProps {
  articles: Article[];
}

export const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  if (articles?.length === 0) {
    return <div className="no-result">No result found for Selection</div>;
  }
  return (
    <div className="articles-list">
      {articles?.map((article: Article) => (
        <ArticleItem key={article.title} article={article} />
      ))}
    </div>
  );
};


