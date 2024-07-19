import React from "react";
import { ArticlesList } from "./components/ArticlesList";
import { Filters } from "./components/Filters";
import { useBlogHook } from "./utils/useBlogHook";
import { Loader } from "./components/Loader";
import { StatusType } from "./types/article";
import { Pagination } from "./components/Pagination";
import { FilterNav } from "./components/Icon";
import { ModelPopup } from "./components/ModelPopup";
import "./App.scss";

const App: React.FC = () => {
  const {
    articles,
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
  } = useBlogHook();

  if (status === StatusType.failed) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="page-wrapper">
      <div className="container">
        <span className="heading">US Stocks Articles</span>
        <div className="row">
          <div className="col-md-4 col-lg-3 web_filter">
            <Filters
              {...{
                authors,
                categories,
                handleCategoryChange,
                handleAuthorChange,
                handleSortChange,
                status
              }}
            />
          </div>
          <div className="col-md-8 col-lg-9">
            {status === StatusType.loading ? (
              <Loader />
            ) : (
              <>
                <div className="mobile_filter">Filter <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#filterModal"
                  className="btn"
                >
                  <FilterNav />
                </button></div>
                
                <ArticlesList {...{ articles }} />
               {articles.length?  <Pagination {...{ maxPage, currentPage, setCurrentPage }} />:''}
              </>
            )}
          </div>
        </div>
      </div>

      <ModelPopup
        children={
          <Filters
            {...{
              authors,
              categories,
              handleCategoryChange,
              handleAuthorChange,
              handleSortChange,
            }}
          />
        }
      />
    </div>
  );
};

export default App;
