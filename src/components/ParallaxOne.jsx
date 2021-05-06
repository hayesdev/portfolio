import React from 'react'
import styled from 'styled-components'
import { Link as Scroll } from "react-scroll";
import {FaAngleDown} from 'react-icons/fa'
import image from "../assets/port-touched-up.jpg";



function ParallaxOne() {
    return (
        <ParallaxContainer className='parallax'> 
          <SlideTitle>
            <p> Photos courtesy of <a href="http://www.unsplash.com" target="_blank" rel="noreferrer noopener"> Unsplash</a></p>
          </SlideTitle>
          <DownArrowWrapper>
            <div>
              <Scroll to='projects' smooth={true} isDynamic={true} duration={1000} offset={-30}><FaAngleDown/></Scroll>
            </div>
                </DownArrowWrapper>
        </ParallaxContainer>
    )
}

export default ParallaxOne;

const ParallaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: flex-end;
  background-image: url(${image});
  min-height: 50em;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  @media (max-width: 500px) {
    justify-content: space-around;
  }
`;

const SlideTitle = styled.div`
  display: flex;
  font-size: 2.75em;
  font-family: 'Chivo', sans-serif;
  text-transform: none;
  font-weight: 700;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1em;
  width: 100%;
  height: 10rem;

  > p > a {
    color: #e2e606;
    text-decoration: none;
  }

  a:hover {
    color: #53195f;
  }

  @media (max-width: 500px) {
    font-size: 1.5em;
  }
/* border: 1px solid red; */
`;

const DownArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  margin-top: 3.5em;
  width: 100%;
  height: 1em;
  font-size: 4.25em;
  color: white;

  > p {
    font-size: 1rem;
  }

  > div {
    width: 1em;
    animation: bounce 2.5s;
    animation-iteration-count: infinite;
  }

@keyframes bounce {
    0% {
       transform: translateY(10%);
    }
    50% {
        transform: translateY(-3%);
    }
    100% {
        transform: translateY(10%);
    }
}

div:hover {
    cursor: pointer;
    color: #e2e606
}

@media (max-width: 768px) {
    font-size: 3em;
    }
    /* border: 1px solid red; */
`;