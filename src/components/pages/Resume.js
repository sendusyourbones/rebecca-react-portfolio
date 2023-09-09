import React from 'react';

import ResumePDF from '../../assets/files/Rebecca-Roos-resume.pdf';
import '../../assets/styles/Resume.css';

export const Resume = () => {
  return (
    <section id='resume'>
      <h1>My Resume</h1>

      <a
        href={ResumePDF}
        download='Rebecca-Roos-resume.pdf'
        className='btn btn-lg btn-resume'
      >
        Download my resume
      </a>
    </section>
  );
};

export default Resume;
