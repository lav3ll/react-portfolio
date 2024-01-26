import React from "react";
import React, { useState } from "react";
import NavTabs from "./NavTabs";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default PortfolioContainer;
