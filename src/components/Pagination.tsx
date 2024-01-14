type Props = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="join">
      <button
        className="join-item btn btn-ghost disabled:bg-transparent"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        «
      </button>
      <button className="join-item btn btn-ghost">{currentPage}</button>
      <button className="join-item btn btn-ghost">/</button>
      <button className="join-item btn btn-ghost">
        {totalPages === 0 ? 1 : totalPages}
      </button>
      <button
        className="join-item btn btn-ghost disabled:bg-transparent"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </div>
  );
}

export default Pagination;
