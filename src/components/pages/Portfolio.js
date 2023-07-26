import React from 'react';

// Import components
import Project from '../Project';

// Import images
import CodingQuiz from '../../assets/images/coding-quiz.jpg';
import Learnify from '../../assets/images/learnify.jpg';
import KitchenAlchemy from '../../assets/images/kitchen-alchemy.jpg';
import Scheduler from '../../assets/images/scheduler.jpg';
import SneezeTheDay from '../../assets/images/sneeze-the-day-square.jpg';
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg';

// Import CSS
import '../../assets/styles/Portfolio.css';

export const Portfolio = () => {
  const projects = [
    {
      title: 'Learnify',
      thumbnail: Learnify,
      imgAlt: 'Screenshot of the Learnify app',
      appUrl: 'https://learnify-7e031704dc94.herokuapp.com/',
      gitHubUrl: 'https://github.com/UserOlena/Learnify',
    },
    {
      title: 'Sneeze The Day',
      thumbnail: SneezeTheDay,
      imgAlt: 'Screenshot of the Sneeze the Day app',
      appUrl: 'https://zed-csp.github.io/dangerForce-Proj-1/',
      gitHubUrl: 'https://github.com/Zed-CSP/dangerForce-Proj-1',
    },
    {
      title: 'Kitchen Alchemy',
      thumbnail: KitchenAlchemy,
      imgAlt: 'Screenshot of the Kitchen Alchemy app',
      appUrl: 'https://kitchen-alchemy.herokuapp.com/',
      gitHubUrl: 'https://github.com/Zed-CSP/codeConnoisseurs',
    },
    {
      title: 'Work Day Scheduler',
      thumbnail: Scheduler,
      imgAlt: 'Screenshot of the Work Day Scheduler app',
      appUrl: 'https://sendusyourbones.github.io/daily-planner/',
      gitHubUrl: 'https://github.com/sendusyourbones/daily-planner',
    },
    {
      title: 'Timed Coding Quiz',
      thumbnail: CodingQuiz,
      imgAlt: 'Screenshot of the Timed Coding Quiz app',
      appUrl: 'https://sendusyourbones.github.io/coding-quiz/',
      gitHubUrl: 'https://github.com/sendusyourbones/coding-quiz',
    },
    {
      title: '5-Day Weather Dashboard',
      thumbnail: WeatherDashboard,
      imgAlt: 'Screenshot of the 5-Day Weather Dashboard app',
      appUrl: 'https://sendusyourbones.github.io/weather-dashboard/',
      gitHubUrl: 'https://github.com/sendusyourbones/weather-dashboard',
    },
  ];

  function projectList(projects) {
    return (
      <div className='d-flex projects-row'>
        {projects.map((project) => {
          const { title, thumbnail, imgAlt, appUrl, gitHubUrl } = project;
          return (
            <Project
              title={title}
              thumbnail={thumbnail}
              imgAlt={imgAlt}
              appUrl={appUrl}
              gitHubUrl={gitHubUrl}
            />
          );
        })}
      </div>
    );
  }

  return (
    <section>
      <h1>Portfolio</h1>
      {projectList(projects)}
    </section>
  );
};

export default Portfolio;
