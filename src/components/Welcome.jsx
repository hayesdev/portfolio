import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import {FaAngleDown} from 'react-icons/fa'
import image from "../assets/port-touched-up.jpg";
import mobileImage from "../assets/port-touched-up-mobile.png";
import {titles}  from './data'


function Welcome() {    
    const [index, setIndex] = useState(0);
    const names = titles;

      useEffect(() => {
        const lastIndex = names.length - 1;
            if (index < 0) {
                setIndex(lastIndex);
            }
            if (index > lastIndex) {
                setIndex(0);
            }

        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 2800);
        return () => clearInterval(slider);
      }, [index, names.length]);

    return (
        <WelcomeWrapper id='welcome'>
            <TitleWrapper>
                <Title>
                    <h1>Gregory Hayes</h1>
                    <div className="section-center">
                        {names.map((name, titleIndex) => {
                            const { title} = name;
                            let position = "nextSlide";
                            if (titleIndex === index) {
                                position = "activeSlide";
                            }
                            if (titleIndex === index - 1 ||
                                (index === 0 && titleIndex === names.length - 1)) 
                            {
                                position = "lastSlide";
                            }
                            return (
                                <article key={titleIndex} className={position}>
                                    <h1 style={{color: '#e2e606'}}>{title}</h1>
                                </article>
                                );
                            })}
                    </div>                           
                </Title> 
                <DownArrowWrapper>
                    <div>
                        <Scroll to='about' smooth={true} isDynamic={true} duration={1000} offset={-30}><FaAngleDown/></Scroll>
                    </div>
                </DownArrowWrapper>
            </TitleWrapper>   
        </WelcomeWrapper>
    )
}

export default Welcome

const WelcomeWrapper = styled.div`
  display: flex;
  background: url(${image});
  background-size: cover;
  width: 100vw;
  min-height: 55em;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  top: 0; 
    left: 0;
    bottom: 0; 
    right: 0;
  z-index:2;

  /* @media (max-width: 480px) {
    background: url(${mobileImage});
  } */
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    width: 100%;
    min-height: 24em;
    color: white; 
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-family: 'Chivo', sans-serif;
    font-weight: 900;
    text-transform: none;
    width: 66.6%;
    height: 65%;

    > h1 {
        margin: 0;
    }

    > div > article > h1 {
        font-size: 1.8em;
        margin:0 ;

        @media (max-width: 767px) {
            font-size: 1.5em;
        }

        @media (max-width: 374px) {
            font-size: 1em;
        }
    }

    @media (max-width: 767px) {
        font-size: 1.75em;
    }

    @media (max-width: 615px) {
        font-size: 1.5em;
    }

    @media (max-width: 530px) {
        font-size: 1em;
    }

    @media (max-width: 416px) {
        font-size: .75em;
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

    @media (max-width: 500px) {
        font-size: 3em;
        margin-top: 4em;
    }
    /* border: 1px solid red; */
`;
