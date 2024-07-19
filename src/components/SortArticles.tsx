import { useSelector } from "react-redux";
import { RootState } from "../store";
import { DownArrow } from "./Icon";

interface SortArticlesProps{
    handleSortChange: (field: string, order: string) => void;
}

export const SortArticles:React.FC<SortArticlesProps>=({handleSortChange})=>{
    const { sortOrder, sortField, } = useSelector(
        (state: RootState) => state.articles
      );
    return(
        <>
         <div className="header">
          <span>Sort By</span>
        </div>
        <div className="content">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="date"
              onChange={() => handleSortChange("date", sortOrder)}
              checked={sortField === "date"}
            />
            <label className="form-check-label" htmlFor="date">
              Date
              {sortField === "date" ? (
                <span
                  className={`sortIcon ${sortOrder === "desc" ? "rotate" : ""}`}
                  onClick={() => {
                    handleSortChange(
                      "date",
                      sortOrder === "asc" ? "desc" : "asc"
                    );
                  }}
                >
                  <DownArrow />
                </span>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="title"
              onChange={() => handleSortChange("title", sortOrder)}
              checked={sortField === "title"}
            />
            <label className="form-check-label" htmlFor="title">
              Title
              {sortField === "title" ? (
                <span
                  className={`sortIcon ${sortOrder === "desc" ? "rotate" : ""}`}
                  onClick={() => {
                    handleSortChange(
                      "title",
                      sortOrder === "asc" ? "desc" : "asc"
                    );
                  }}
                >
                  <DownArrow />
                </span>
              ) : (
                ""
              )}
            </label>
          </div>
        </div>
        </>
    )
}