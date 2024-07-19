import React from "react";
import { FilterItem } from "./FilterItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { SortArticles } from "./SortArticles";
import { StatusType } from "../types/article";
import "./Filters.scss";

interface FiltersProps {
  authors: Array<string>;
  categories: Array<string>;
  handleCategoryChange: (value: string) => void;
  handleAuthorChange: (value: string) => void;
  handleSortChange: (field: string, order: string) => void;
  status?: StatusType;
}

export const Filters: React.FC<FiltersProps> = ({
  authors,
  categories,
  handleCategoryChange,
  handleAuthorChange,
  handleSortChange,
  status,
}) => {
  const { authorFilters, sourceFilters } = useSelector(
    (state: RootState) => state.articles
  );

  return (
    <div className="filter-wrapper">
      {status === StatusType.loading ? (
        <div className="loading_text">Loading....</div>
      ) : (
        <>
          <div className="filter-box">
            <div className="header">
              <span>Category</span>
            </div>
            <div className="content">
              <FilterItem
                filterData={categories}
                onFilterChage={handleCategoryChange}
                selectedItems={sourceFilters}
              />
            </div>
          </div>

          <div className="filter-box">
            <div className="header">
              <span>Author</span>
            </div>
            <div className="content">
              <FilterItem
                filterData={authors}
                onFilterChage={handleAuthorChange}
                selectedItems={authorFilters}
              />
            </div>
          </div>

          <div className="filter-box">
            <SortArticles {...{ handleSortChange }} />
          </div>
        </>
      )}
    </div>
  );
};
