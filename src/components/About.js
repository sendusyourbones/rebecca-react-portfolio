import React from 'react';
import {
    Typography,
} from '@material-ui/core';
import Avatar from '../assets/images/avatar.png';

export const About = () => {
    return (
        <section>
            <Typography variant="h1">
                About Me
            </Typography>

            <img 
                src={Avatar} 
                alt="Female avatar with medium-length hair, light skin, and brown eyes" 
            />
            
            <p>I grew up in San Diego, California and moved to Berkeley, California in 2007 to complete my undergraduate studies at UC Berkeley. I have worked as a Program Coordinator and a Business Systems Analyst for UC Berkeley Extension. I was lucky enough to be moved into a Web Developer role there before obtaining any formal education and have been learning a lot on the job; I am now attending the Berkeley Coding Boot Camp to learn even more, and I am already putting my learnings to use at work!</p>
            <p>I love all things puzzles&mdash;jigsaw puzzles, crosswords, and Wordle, to name a few. I enjoy rock climbing, which is a puzzle with your body. I love coding because it's like a puzzle too!</p>
        </section>
    );
};

export default About;