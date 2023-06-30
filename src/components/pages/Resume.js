import React from 'react';

import ResumePDF from '../../assets/files/Rebecca-Roos-resume.pdf';
import '../../assets/styles/Resume.css';

export const Resume = () => {
    return (
        <section id="resume">
            <h1>My Resume</h1>

            <a 
                href={ResumePDF} 
                download="Rebecca-Roos-resume.pdf"
                className="btn btn-lg btn-resume"
            >
                Download my resume
            </a>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Front-End Proficiencies</h2>
                        <ul className="fs-4 font-monospace">
                            <li>HTML</li>
                            <li>CSS (media queries, Grid, Flexbox, Bootstrap)</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <h2>Back-End Proficiencies</h2>
                        <ul className="fs-4 font-monospace">
                            <li>Express</li>
                            <li>Node</li>
                            <li>MySQL & Sequelize</li>
                            <li>MongoDB & Mongoose</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Resume;
