import React, { useState } from 'react';
import {
  Navigation,
  About,
  Contact,
  Portfolio,
  Resume,
} from '../components';

export const Header = () => {

  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
        return <About/>;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio/>;
    }
    if (currentPage === 'Contact') {
        return <Contact/>;
    }
    if (currentPage === 'Resume') {
        return <Resume/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
}

export default Header;
