import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from "react-scroll";
import image from '../assets/working_together-2.jpg'
import "../App.css";

function About() {
    return <AboutContainer id='about'>
                <AboutSection>
                    <VideoContainer>
                        <img src={image} alt=''/>
                    </VideoContainer>
                    <Title>About</Title>
                    <h1>ready to rock?</h1>
                    <p>Hello there! My name is Gregory Hayes and I'm a Web Developer based out of Orlando, FL. I've been a developer for 3 years, and I enjoy creating front-ends with HTML, CSS, Javascript, and React. I currently freelance, lending my talent for building user-friendly, eye-catching UIs to my clients to enhance their current websites or create new ones from scratch.
                    </p>
                    <p>  If you have something you'd like to collaborate on, please 
                        <a><Scroll to='contact' 
                        smooth={true} 
                        isDynamic={true} 
                        duration={1000} 
                        offset={-30}
                        > click here</Scroll></a> to reach out so we can ROCK your next project!</p>
                </AboutSection>
                <Sidebar>
                    <div>Visually stunning</div> 
                    <div>content built</div>
                    <div>with:</div>
                <Skills>
                    <p>html css less javascript</p>
                    <p>react react-router redux</p>
                    <p>next. js tailwind.css less</p>
                    <p>styled-components flexbox</p>
                </Skills>
                </Sidebar>    
            </AboutContainer>
}

export default About

const AboutContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 30em;
    background: #f1f1fa;
    
    @media (max-width: 885px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 45em;
    }   
`;

const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 66.66%;
    height: 100%;
    font-size: 1em;
    
    > h1, p {
        margin: .5rem .75rem;
    }

    > p {
        font-family: 'Chivo', sans-serif;
        font-weight: 200;
        font-size: 1.15em;
        text-transform: none;

        a {
            cursor: pointer;
            color: #53195f;
            text-decoration: underline;

            &:hover {
                color: #46467b;
            }
        }
    }

    @media (max-width: 885px) {
        width: 98%;
        height: 50%;
    }

    @media (max-width: 376px) {
        > h1 {
        font-size: 1em;
    }
}
`;

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    height: 50%;
    overflow: hidden;

    > img {
        width: 95%;
        height: auto;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2rem;
    margin: 1em 0 1em 1em;
    font-weight: 600;
    color: white;
    background: #46467b;
    border-radius: 10px;
`;

const Sidebar = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    height: 100%;
    background: #53195f;
    color: white;
    font-size: 2.5em;
    font-weight: 800;
    line-height: 1em;

    @media (max-width: 885px) {
        width: 100%;
        height: 50%;
    }   
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 200;
    font-family: 'PT Sans', sans-serif;
    margin-top: 1.5em;
    width: 100%;
    height: 30%;

    > p {
        line-height: 2em;
    }
    
    @media (max-width: 885px) {
        height: 40%;
    }

`;