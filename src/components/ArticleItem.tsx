import React from "react";
import { Article } from "../types/article";
import { IMG_URL, PLACEHOLDER_IMG_URL } from "../utils/urls";
import "./ArticleItem.scss";

interface ArticleItemProps {
  article: Article;
}

export const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  const imageUrl = article.image ? `${IMG_URL}/${article.image}` : PLACEHOLDER_IMG_URL;
  return (
    <div className="article-item">
      <div className="article-header">
        <div className="article-image">
          <img
            className="img-fluid"
            src={imageUrl}
            alt={article.title}
          />
        </div>
        <div className="article-details">
          <div className="article-sub-heading">
          <p>{article.date}</p>
          <p>{article.source}</p>
          </div>
          <div className="article-title" dangerouslySetInnerHTML={{ __html: article.title }}>
          </div>
        </div>
      </div>
      <div className="article-body">
        <p dangerouslySetInnerHTML={{ __html: article.body }}></p>
      </div>
      <div className="article-author">{article.author}</div>
    </div>
  );
};

