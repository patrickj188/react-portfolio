import React from 'react';
import styled from 'styled-components';
import AboutMe from './aboutMe';
import Contact from './Contact'


const AboutContainer = () => {

    const AboutDiv = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    -webkit-animation: fadein 2s; 
    -moz-animation: fadein 2s; 
    -ms-animation: fadein 2s; 
    -o-animation: fadein 2s; 
    animation: fadein 2s;
    `;


    return (
        <div className="fadein">
            <AboutDiv>

                <AboutMe />
            
            </AboutDiv>
        </div>
    )
};

export default AboutContainer;