import React from 'react';
import GitHubLogo from '../assets/images/github-logo.png';
import LinkedInLogo from '../assets/images/linkedin-logo.png';
import StackLogo from '../assets/images/stackoverflow-logo.png';
import '../assets/styles/Footer.css';

export const Footer = () => {
    return (
        <footer>
            <a 
                href="https://github.com/sendusyourbones" 
                target="_blank" 
                rel="noreferrer"
            >
                <img
                    src={GitHubLogo}
                    alt="GitHub invertocat logo"
                />
            </a>
            <a 
                href="https://www.linkedin.com/in/rebecca-roos-1a96a645/" 
                target="_blank" 
                rel="noreferrer"
            >
                <img
                    src={LinkedInLogo}
                    alt="LinkedIn logo"
                />
            </a>
            <a 
                href="https://stackoverflow.com/users/22147664/beckee-roos" 
                target="_blank" 
                rel="noreferrer"
            >
                <img
                    src={StackLogo}
                    alt="Stack Overflow logo"
                />
            </a>
        </footer>
    );
};

export default Footer;
