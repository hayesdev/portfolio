import React from 'react'
import styled from 'styled-components'

function Footer() {
    return <FooterContainer >
        <SocialContainer>
            <Social>
    <h1><a href="http://www.facebook.com" target='_blank' rel="noreferrer noopener">FACEBOOK</a></h1>
   <h1><a href="http://www.twitter.com" target='_blank' rel="noreferrer noopener">TWITTER</a></h1> 
<h1><a href="http://www.instagram.com" target='_blank' rel="noreferrer noopener">INSTAGRAM</a></h1>
{/* Github and LinkedIn */}
</Social>
<Copyright>© 2021 HayesDev</Copyright>
        </SocialContainer>


<FinePrint>
    <p><a href="#">Newsletter</a></p>
    <p><a href="#">Imprint</a></p>
    <p><a href="#">Data Protection</a></p>
</FinePrint>
    </FooterContainer>
}

export default Footer

const FooterContainer = styled.div`
display: flex;
width: 100vw;
height: 15em;
background: #e2e606;
color:#372441;
`;
const SocialContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 100%;
`;

const Social = styled.div`
    display: flex;
    width: 50%;
    height: 75%;
    font-size: 1em;
    font-weight: 200;
    margin-top: 1em;
    margin-left: 2em;
    > h1 {
        margin-right: 1.5rem;
    }
    > h1 > a {
        color: #372441;
        text-decoration: none;
   
}
    a:visited {
        color: #372441;
    }
    a:hover {
  color: #46467b;
}
`;

const Copyright = styled.div`
align-items: flex-end;
margin-left: 1.75em;
margin-top: 1em;
width: 50%;
height: 25%;
`;

const FinePrint = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
    height: 100%;
    font-size:1rem;
    font-weight: 100;
    > p {
        margin-right: 2rem;
    }
    > p > a {
        text-decoration: none;
    }

`;