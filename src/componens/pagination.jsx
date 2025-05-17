import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
      >
     prev
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 border rounded ${
            currentPage === number
              ? 'bg-blue-600 text-white'
              : 'bg-white hover:bg-gray-100'
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white border rounded hover:bg-gray-100 disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
