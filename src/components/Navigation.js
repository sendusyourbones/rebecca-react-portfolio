import React from 'react';
import '../assets/styles/Header.css';

export const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <div class="collapse navbar-collapse" id="portfolioNav">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About Me')}
                        className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;