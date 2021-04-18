import React from 'react'
import styled from 'styled-components'

function Footer() {
    return <FooterContainer>
<Social>
    <h1><a href="#">FACEBOOK</a></h1>
   <h1><a href="#">TWITTER</a></h1> 
<h1><a href="#">INSTAGRAM</a></h1>
</Social>
<FinePrint></FinePrint>
    </FooterContainer>
}

export default Footer

const FooterContainer = styled.div`
display: flex;
width: 100vw;
height: 10em;
background: #e2e606;
color: #46467b;
`;

const Social = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    font-size: .75em;
    font-weight: 200;
    > h1 {
        margin-right: 1.5rem;
    }
    > h1 > a {
        text-decoration: none;
    }
    
`;

const FinePrint = styled.div`
    display: flex;
    width: 50%;
    height: 100%;

`;