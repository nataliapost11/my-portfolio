import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Navigation from "./Navigation";
import '../styles/Header.css';

function Header() {  
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    document.title = `${currentPage} Selected`;
  });

  return (
    <>
      <header className="header">
        <div className="header-text">Natalia Post</div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      </header>    
      <Navigation  currentPage={currentPage} />
    </>
  );
}

export default Header;
