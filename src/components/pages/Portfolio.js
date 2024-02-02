// Image imports
import Learnify from '../../assets/images/learnify.jpg';
import KitchenAlchemy from '../../assets/images/kitchen-alchemy.jpg';
import Scheduler from '../../assets/images/scheduler.jpg';
import SneezeTheDay from '../../assets/images/sneeze-the-day-square.jpg';
import StudyAbroadWeek from '../../assets/images/saw.jpg';
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg';

// Component and style imports
import Project from '../Project';
import '../../assets/styles/Portfolio.css';

export const Portfolio = () => {
  const projects = [
    {
      title: 'Study Abroad Week Landing Page',
      thumbnail: StudyAbroadWeek,
      imgAlt: 'Screenshot of the Study Abroad Week Landing Page',
      appUrl: 'https://studyabroadweek.berkeley.edu',
      description:
        'Webpage for users to view details of events making up the Berkeley Study Abroad Week event fair, with links to register for each event. Users can filter events by date, event type (ex. information session), and/or in-person/virtual. This project included setting up a template to allow non-technical staff to easily enter event details into the Drupal CMS to populate the page, requiring minimal ongoing development for this recurring annual event fair.',
      technologies: 'HTML, Twig, CSS, jQuery, Drupal, PHP',
    },
    {
      title: 'Learnify',
      thumbnail: Learnify,
      imgAlt: 'Screenshot of the Learnify app',
      appUrl: 'https://learnify-7e031704dc94.herokuapp.com/',
      gitHubUrl: 'https://github.com/UserOlena/Learnify',
      description:
        'Site for users to submit tutorials on topics of their choosing. Users can browse tutorials by category, save favorites to their account, and leave reviews.',
      technologies:
        'JavaScript, MERN stack, Apollo Server, GraphQL, Material UI, JWTs, Bcrypt',
    },
    {
      title: 'Sneeze The Day',
      thumbnail: SneezeTheDay,
      imgAlt: 'Screenshot of the Sneeze the Day app',
      appUrl: 'https://zed-csp.github.io/dangerForce-Proj-1/',
      gitHubUrl: 'https://github.com/Zed-CSP/dangerForce-Proj-1',
      description:
        'Uses an air quality API to provide users with air quality information for any city of their choosing. Saves past searches so users can easily repeat their favorite searches.',
      technologies:
        'HTML, CSS (Tailwind), JavaScript, local storage, third-party APIs, GitHub Pages, Trello',
    },
    {
      title: 'Kitchen Alchemy',
      thumbnail: KitchenAlchemy,
      imgAlt: 'Screenshot of the Kitchen Alchemy app',
      appUrl: 'https://kitchen-alchemy.herokuapp.com/',
      gitHubUrl: 'https://github.com/Zed-CSP/codeConnoisseurs',
      description:
        'Allows users to create an account to browse and submit recipes. Includes filtering recipes by ingredient and viewing recipes grouped by the user who submitted them.',
      technologies:
        'Handlebars, CSS (Bootstrap), JavaScript, Node.js, Express, MySQL, Sequelize, Nodemailer, Bcrypt',
    },
    {
      title: 'Work Day Scheduler',
      thumbnail: Scheduler,
      imgAlt: 'Screenshot of the Work Day Scheduler app',
      appUrl: 'https://sendusyourbones.github.io/daily-planner/',
      gitHubUrl: 'https://github.com/sendusyourbones/daily-planner',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      technologies: 'HTML, CSS, JavaScript',
    },
    {
      title: '5-Day Weather Dashboard',
      thumbnail: WeatherDashboard,
      imgAlt: 'Screenshot of the 5-Day Weather Dashboard app',
      appUrl: 'https://sendusyourbones.github.io/weather-dashboard/',
      gitHubUrl: 'https://github.com/sendusyourbones/weather-dashboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      technologies: 'HTML, CSS, JavaScript',
    },
  ];

  function projectList(projects) {
    return (
      <div className='d-flex projects-row'>
        {projects.map((project, index) => {
          const {
            title,
            thumbnail,
            imgAlt,
            appUrl,
            gitHubUrl,
            description,
            technologies,
          } = project;
          return (
            <Project
              title={title}
              thumbnail={thumbnail}
              imgAlt={imgAlt}
              appUrl={appUrl}
              gitHubUrl={gitHubUrl}
              description={description}
              technologies={technologies}
              index={index}
              key={index}
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
