import React from 'react'
import styled from 'styled-components'
import image from "../working_together.jpg";


const ParallaxTwo = () => {
    return (
             <ParallaxContainer>
                <SlideTitle>
                    <p>let's do 
                        <br/>
                        <div>this sh*t.</div>
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
                    <h2>407 427 6847</h2>
                    <h2>gthelight@gmail.com</h2>
                    </ContactInfo>
                </ContactContainer>
        </ParallaxContainer>
    )
}

export default ParallaxTwo;

const ParallaxContainer = styled.div`
display: flex;
width: 100vw;
align-items: flex-start;
background-image: url(${image});
min-height: 575px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
color: white;
`;

const SlideTitle = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 4rem;
font-size: 4rem;
font-family: 'PT Sans', sans-serif;
font-weight: 800;
line-height: 1em;
width: 66%;
height: 20rem;
> p > div {
    color: #e2e606;
}
`;

const ContactContainer = styled.div`
display: flex;
margin-top: 2rem;
margin-right: 2rem;
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