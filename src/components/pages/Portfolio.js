import React from 'react';

import Project from '../Project';
import SneezeTheDay from '../../assets/images/sneeze-the-day-square.jpg';
import KitchenAlchemy from '../../assets/images/kitchen-alchemy.jpg';
import TextEditor from '../../assets/images/text-editor.jpg';
import Scheduler from '../../assets/images/scheduler.jpg';
import CodingQuiz from '../../assets/images/coding-quiz.jpg';
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg';
import '../../assets/styles/Portfolio.css';

export const Portfolio = () => {
    return (
        <section>
            <h1>Portfolio</h1>
            <div className="d-flex projects-row">
                <Project
                    title="Sneeze The Day"
                    thumbnail={SneezeTheDay}
                    imgAlt="Screenshot of the Sneeze the Day app"
                    appUrl="https://zed-csp.github.io/dangerForce-Proj-1/"
                    gitHubUrl="https://github.com/Zed-CSP/dangerForce-Proj-1"
                />
                <Project
                    title="Kitchen Alchemy"
                    thumbnail={KitchenAlchemy}
                    imgAlt="Screenshot of the Kitchen Alchemy app"
                    appUrl="https://kitchen-alchemy.herokuapp.com/"
                    gitHubUrl="https://github.com/Zed-CSP/codeConnoisseurs"
                />
                <Project
                    title="Just Another Text Editor"
                    thumbnail={TextEditor}
                    imgAlt="Screenshot of the Just Another Text Editor app"
                    appUrl="https://enigmatic-escarpment-54354-5069d77b2bb8.herokuapp.com/"
                    gitHubUrl="https://github.com/sendusyourbones/text-editor"
                />
                <Project
                    title="Work Day Scheduler"
                    thumbnail={Scheduler}
                    imgAlt="Screenshot of the Work Day Scheduler app"
                    appUrl="https://sendusyourbones.github.io/daily-planner/"
                    gitHubUrl="https://github.com/sendusyourbones/daily-planner"
                />
                <Project
                    title="Timed Coding Quiz"
                    thumbnail={CodingQuiz}
                    imgAlt="Screenshot of the Timed Coding Quiz app"
                    appUrl="https://sendusyourbones.github.io/coding-quiz/"
                    gitHubUrl="https://github.com/sendusyourbones/coding-quiz"
                />
                <Project
                    title="5-Day Weather Dashboard"
                    thumbnail={WeatherDashboard}
                    imgAlt="Screenshot of the 5-Day Weather Dashboard app"
                    appUrl="https://sendusyourbones.github.io/weather-dashboard/"
                    gitHubUrl="https://github.com/sendusyourbones/weather-dashboard"
                />
            </div>
        </section>
    );
};

export default Portfolio;
