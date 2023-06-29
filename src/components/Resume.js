import React from 'react';
import ResumePDF from '../assets/files/Rebecca-Roos-resume.pdf';

import { Typography } from '@material-ui/core';

export const Resume = () => {
    return (
        <section>
            <Typography variant="h1">My Resume</Typography>

            <a href={ResumePDF} download="Rebecca-Roos-resume.pdf">Download my resume</a>

            <Typography variant="h2">Front-End Proficiencies</Typography>
            <ul>
                <li>HTML</li>
                <li>CSS (media queries, Grid, Flexbox, Bootstrap)</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
            </ul>

            <Typography variant="h2">Back-End Proficiencies</Typography>
            <ul>
                <li>Express</li>
                <li>Node</li>
                <li>MySQL & Sequelize</li>
                <li>MongoDB & Mongoose</li>
                <li>REST APIs</li>
            </ul>

        </section>
    );
};

export default Resume;
