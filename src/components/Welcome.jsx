import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import image from "../assets/purple-mountain-1280.jpg";
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
  z-index:2;

`;

const TitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 24em;
    color: white;
    @media (max-width: 767px) {
    display: flex;
    justify-content: center;
}   
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
        font-size: 1.25em;
}
    @media (max-width: 374px) {
    font-size: 1em;
}

}
@media (max-width: 767px) {
        font-size: 1.75em;
}
@media (max-width: 595px) {
    font-size: 1.5em;
}
@media (max-width: 416px) {
    font-size: .75em;
}
`;


