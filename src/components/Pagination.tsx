type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="join">
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {" "}
        «{" "}
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button className="join-item btn" disabled>
        /
      </button>
      <button className="join-item btn">{totalPages}</button>
      <button
        className="join-item btn"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {" "}
        »{" "}
      </button>
    </div>
  );
}

export default Pagination;
