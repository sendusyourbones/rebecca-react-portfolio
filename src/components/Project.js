import React from 'react';
import {
    Typography,
} from '@material-ui/core';

export const Project = (props) => {
    return (
        <div>
            <Typography variant="h2">
                {props.title}
            </Typography>
            <img 
                src={props.thumbnail} 
                alt={props.imgAlt}
            />
            <a 
                href={props.appUrl}
                target="_blank"
                rel="noreferrer"
            >
                View Application
            </a>
            <a 
                href={props.gitHubUrl}
                target="_blank"
                rel="noreferrer"
            >
                View GitHub Repository
            </a>
        </div>
    );
};

export default Project;
