import React from 'react';
import styled from 'styled-components';
import me from '../../images/patrick.png'


const AboutMe = () =>{

// const AboutTitle = styled.h1`
//     font-family: 'Poppins', sans-serif;
//     font-size: 40px;
//     `

// const DescriptionAboutMe = styled.div`
// width: 60%;
// font-family: 'Poppins', sans-serif;
// float: right;
// `;

const PatrickPic = styled.img`
width: 280px;
height: 280px;
border-radius: 180px;
`;


const AboutContainer = styled.div`
width: 100%;
height: 50vh;
border: 1px solid grey;
display: flex;
  flex-direction: row;
`;

const PatrickPicContainer = styled.div`
width: 40vw;
height: 40vh;
border: 1px solid black; 
position: relative;
top: 5vh;
margin: 0 2%; 
`;

const DescriptionContainer = styled.div`
width: 80vw;
height: 40vh;
border: 1px solid black; 
position: relative;
top: 5vh;
margin: 0 2%;
&:p {
    padding: 50px 0;
}

`;

    return (
        <div>

        <AboutContainer>
            <PatrickPicContainer>
                <PatrickPic src={me} />
            </PatrickPicContainer>
            <DescriptionContainer>
                <p>My name is Patrick; I am a full-stack web developer. 
Are you looking for an innovative, self-starter, and creative team member? Give me a shout and let's talk!</p>

            </DescriptionContainer>

        </AboutContainer>









            {/* <AboutTitle>About Me</AboutTitle>
            <PatrickPic src={me} />
            <DescriptionAboutMe>
            I am a full stack developer from Dallas, TX. My adventure in coding began last year and I've been having fun ever since. 
            Are you looking for an innovative, self-starter, and creative team member? Give me a shout and let's talk!
            </DescriptionAboutMe> */}

        </div>
    )
}

export default AboutMe;