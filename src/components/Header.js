import React, { useState } from 'react';
import {
  Navigation,
  About,
  Contact,
  Portfolio,
  Resume,
} from '../components';
import '../assets/styles/Header.css';

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
    <div className="content-wrapper">
        <header>
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <p className="fs-1 navbar-brand my-name">Rebecca Roos</p>
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
          </nav>
        </header>
        {renderPage()}
    </div>
  );
}

export default Header;
