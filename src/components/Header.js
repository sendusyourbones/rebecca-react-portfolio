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
    <div>
        <header>
          <nav class="navbar navbar-expand-md bg-body-tertiary">
          <p class="fs-1 navbar-brand my-name">Rebecca Roos</p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#portfolioNav" aria-controls="portfolioNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          </nav>
        </header>
        {renderPage()}
    </div>
  );
}

export default Header;
