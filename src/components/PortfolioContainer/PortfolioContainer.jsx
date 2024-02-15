import React from "react";
import React, { useState } from "react";
import Header from "../Header/Header";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default PortfolioContainer;
