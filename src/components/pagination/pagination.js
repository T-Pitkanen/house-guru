const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            style={currentPage === i + 1 ? { backgroundColor: 'gray' } : null}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;