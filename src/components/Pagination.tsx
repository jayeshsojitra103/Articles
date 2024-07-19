import "./Pagination.scss";

interface PaginationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  maxPage,
  currentPage,
  setCurrentPage,
}) => {
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= maxPage; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <span className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </span>
        </li>
      );
    }
    return pages;
  };
  return (
    <ul className="custom-pagination">
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => {
            setCurrentPage(currentPage !== 1 ? currentPage - 1 : currentPage);
          }}
        >
          {'<'}
        </span>
      </li>
      {renderPagination()}
      <li className="page-item">
        <span
          className="page-link"
          onClick={() => {
            setCurrentPage(
              currentPage !== maxPage ? currentPage + 1 : currentPage
            );
          }}
        >
          {'>'}
        </span>
      </li>
    </ul>
  );
};
