import React from 'react';

import '../assets/styles/Project.css';

export const Project = (props) => {
    return (
        <div className="container-fluid project-container">
            <h2>{props.title}</h2>
            <div className="row">
                <img 
                    src={props.thumbnail} 
                    alt={props.imgAlt}
                />
                <a 
                    href={props.appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                >
                    View Application
                </a>
                <a 
                    href={props.gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                >
                    View GitHub Repository
                </a>
            </div>
        </div>
    );
};

export default Project;
