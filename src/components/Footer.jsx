import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
    <FooterContainer >
        <SocialContainer>
            <Social>
                <h1><a href="http://www.facebook.com" target='_blank' rel="noreferrer noopener">FACEBOOK</a></h1>
                <h1><a href="https://github.com/hayesdev" target='_blank' rel="noreferrer noopener">GITHUB</a></h1> 
                <h1><a href="https://www.linkedin.com/in/gregory-hayes-12258492/" target='_blank' rel="noreferrer noopener">LINKEDIN</a></h1>
                {/* Github and LinkedIn */}
            </Social>
            <Copyright>© 2021 HayesDev</Copyright>
        </SocialContainer>
        <FinePrint>
                    <p><a href="http://www.facebook.com" target='_blank' rel="noreferrer noopener">Newsletter</a></p>
                    <p><a href="http://www.facebook.com" target='_blank' rel="noreferrer noopener">Imprint</a></p>
                    <p><a href="http://www.facebook.com" target='_blank' rel="noreferrer noopener">Data Protection</a></p>
        </FinePrint>
    </FooterContainer>
    );
}

export default Footer

const FooterContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 12em;
    background: #e2e606;
    color:#372441;

    @media (max-width: 767px) {
        height: 7em;
    }
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

    @media (max-width: 767px) {
        font-size: .5em;
    }
`;

const Copyright = styled.div`
    display: flex;
    align-items: flex-end;
    margin-left: 2em;
    width: 50%;
    height: 25%;

    @media (max-width: 767px) {
        font-size: .75em;
        padding-left: 0;
    }
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

    @media (max-width: 767px) {
    font-size: .75em;
    }
`;