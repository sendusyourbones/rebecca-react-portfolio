import React, { useState, useEffect } from 'react';

// React Router imports
import { Link } from 'react-router-dom';

// Material-UI imports
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Component and style imports
import PortfolioImage from './PortfolioImage';
import '../assets/styles/Project.css';

// Button styles
const AppButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    backgroundColor: '#F78484',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#8a2222',
    },
    border: '2px solid #000000',
  },
}))(Button);

const GithubButton = withStyles((theme) => ({
  root: {
    color: '#000000',
    backgroundColor: '#9ddafa',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#276b8f',
    },
    border: '2px solid #000000',
  },
}))(Button);

// Other component styles
const useStyles = makeStyles((theme) => ({
  projectWrapper: {
    border: '2px solid black',
    borderRadius: '30px',
    backgroundColor: '#fceab8',
    padding: '1rem',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  description: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
    },
  },
}));

export const Project = (props) => {
  const classes = useStyles();

  const [rowView, setRowView] = useState(window.innerWidth > 959);
  const [columnView, setColumnView] = useState(window.innerWidth <= 959);

  const updateView = () => {
    setRowView(window.innerWidth > 959);
    setColumnView(window.innerWidth <= 959);
  };

  useEffect(() => {
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  });

  return (
    <Grid className={classes.projectWrapper}>
      <Typography variant='h2' className={classes.title}>{props.title}</Typography>
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        {props.index % 2 === 0 || columnView ? (
          <PortfolioImage
            thumbnail={props.thumbnail}
            imgAlt={props.imgAlt}
          ></PortfolioImage>
        ) : null}
        <Grid item md={6}>
          <Typography paragraph className={classes.description}>
            {props.description}
          </Typography>
          <Typography paragraph>
            <strong>Technologies used:</strong> {props.technologies}
          </Typography>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item>
              <AppButton
                component={Link}
                to={props.appUrl}
                color='primary'
                target='_blank'
                rel='noreferrer noopener'
                aria-label={`View the ${props.title} application`}
              >
                View Application
              </AppButton>
            </Grid>
            {props.gitHubUrl ? (
              <Grid item>
                <GithubButton
                  component={Link}
                  to={props.gitHubUrl}
                  color='secondary'
                  target='_blank'
                  rel='noreferrer noopener'
                  aria-label={`View the ${props.title} GitHub repository`}
                >
                  View GitHub Repository
                </GithubButton>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
        {props.index % 2 === 1 && rowView ? (
          <PortfolioImage
            thumbnail={props.thumbnail}
            imgAlt={props.imgAlt}
          ></PortfolioImage>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Project;
