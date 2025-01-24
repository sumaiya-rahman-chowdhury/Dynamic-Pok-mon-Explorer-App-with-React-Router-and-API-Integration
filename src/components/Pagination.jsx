import React from "react";

function Pagination({ postPerPage, postLength, handlePagination,currentPage }) {
  console.log(postPerPage,postLength,currentPage);
  const paginationNumber = [];
  for (let i = 1; i <= Math.ceil(postLength / postPerPage); i++) {
    paginationNumber.push(i);
  }
//   console.log(paginationNumber);
//   console.log("page is rendering");
  return (
    <div>
      {paginationNumber.map((pageNumber) => (
        <button key={pageNumber} className="bg-black"
        onClick={()=>handlePagination(pageNumber)}
        style={{
            backgroundColor: currentPage === pageNumber ? "#d3d3d3" : "#ffffff", 
            color: "black",
            padding: "10px 20px",
            margin: "5px",
            // border: "1px solid black",
            boxShadow:
            currentPage === pageNumber
              ? "0px 4px 6px rgba(0, 0, 0, 0.2)" 
              : "0px 2px 4px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
