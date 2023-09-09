import React from 'react';

// Material-UI imports
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Asset imports
import Avatar from '../../assets/images/avatar.png';
import '../../assets/styles/About.css';

const useStyles = makeStyles({
  list: {
    border: '3px solid #94a9ed',
  },
  divider: {
    margin: '3% 0',
    backgroundColor: 'black',
  },
});

export const About = () => {
  const classes = useStyles();

  return (
    <section id='about-me'>
      <Typography variant='h1'>About Me</Typography>

      <img
        src={Avatar}
        alt='Female avatar with medium-length hair, light skin, and brown eyes'
      />

      <Typography paragraph>
        I grew up in San Diego, California and moved to Berkeley, California in
        2007 to complete my undergraduate studies at UC Berkeley. I have worked
        as a Program Coordinator and a Business Systems Analyst for UC Berkeley
        Extension. I was lucky enough to be moved into a Web Developer role
        there before obtaining any formal education and have been learning a lot
        on the job; I am now attending the Berkeley Coding Boot Camp to learn
        even more, and I am already putting my learnings to use at work!
      </Typography>
      <Typography paragraph>
        I love all things puzzles&mdash;jigsaw puzzles, crosswords, and Wordle,
        to name a few. I enjoy rock climbing, which is a puzzle with your body.
        I love coding because it's like a puzzle too!
      </Typography>

      <Divider variant='middle' className={classes.divider} />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <Typography variant='h2'>Front-End Proficiencies</Typography>
            <List className={classes.list}>
              <ListItem divider>
                <ListItemText align='center'>HTML</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>
                  CSS (media queries, Grid, Flexbox, Bootstrap)
                </ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>JavaScript</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>jQuery</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText align='center'>React</ListItemText>
              </ListItem>
            </List>
          </div>

          <div className='col-md-6'>
            <Typography variant='h2'>Back-End Proficiencies</Typography>
            <List className={classes.list}>
              <ListItem divider>
                <ListItemText align='center'>Express</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>Node</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>MySQL & Sequelize</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListItemText align='center'>MongoDB & Mongoose</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText align='center'>REST APIs</ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
