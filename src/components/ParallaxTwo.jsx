import React from 'react'
import styled from 'styled-components'
import image from "../assets/working_together.jpg";
import { Link as Scroll } from "react-scroll";
import {FaAngleUp} from 'react-icons/fa'


const ParallaxTwo = () => {
    return (
             <ParallaxContainer id='contact'>
                <RowWrapper>
                    <SlideTitle>
                        <p>Let's do 
                            <br/>
                            <span>this Sh*t.</span>
                    </p>
                    </SlideTitle>
                    <ContactContainer>
                    <ContactInfo>
                        <h1>how to reach out</h1>
                    <p>Gregory Hayes</p>
                    <p>Fredericksburg, VA</p>
                    <br/>
                    <p>m - f: 09:00 - 18:00 est</p>
                    <p>sat + sun: by appointment only</p>
                    <h2>+1 407 427 6847</h2>
                    <h2>gthelight@gmail.com</h2>
                    </ContactInfo>
                </ContactContainer>  
                </RowWrapper>
                <UpArrowWrapper>
                <Scroll to='welcome' smooth={true} isDynamic={true} duration={1000}><FaAngleUp/></Scroll>
                </UpArrowWrapper>
        </ParallaxContainer>
    )
}

export default ParallaxTwo;

const ParallaxContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
justify-content: space-between;
align-items: flex-start;
background-image: url(${image});
min-height: 50em;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const RowWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const SlideTitle = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 4rem;
font-size: 4rem;
font-family: 'Chivo', sans-serif;
text-transform: none;
font-weight: 800;
line-height: 1em;
width: 66%;
height: 20rem;
> p > span {
    color: #e2e606;
}
`;

const ContactContainer = styled.div`
display: flex;
margin-top: 5em;
margin-right: 5em;
width: 30%;
height: 28rem;
background:#53195f;
`;

const ContactInfo = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
margin-top: 2em;
> p {
    margin: .5em;
}
> h2 {
    margin: .5em;
}
`;

const UpArrowWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:flex-end;
align-items: center;
width: 100%;
height: 2em;
font-size: 4em;
color: white;
> p {
    font-size: 1.5rem;
}
:hover {
    cursor: pointer;
    color: #e2e606
}
;
/* border: 1px solid red; */
`;