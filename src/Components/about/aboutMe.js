import React from "react";
import styled from "styled-components";
import me from "../../images/patrick.png";

const AboutMe = () => {
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
    @media (max-width: 700px) {
      width: 180px;
      height: 180px;
    }
    @media (max-width: 400px) {
      width: 120px;
      height: 120px;
    }
  `;

  const AboutContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    height: 50vh;
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
      width: 100%;
    }
  `;

  const PatrickPicContainer = styled.div`
    width: 40vw;
    height: 40vh;
    position: relative;
    top: 5vh;
    margin: 0 2%;
  `;

  const DescriptionContainer = styled.div`
    width: 80vw;
    height: 40vh;
    position: relative;
    top: 5vh;
    margin: 0 1%;
  `;

  const AboutText = styled.p`
    padding-top: 10%;
    color: #393f4d;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    @media (max-width: 700px) {
      padding-top: 1%;
    }
  `;

  return (
    <div>
      <AboutContainer>
        <PatrickPicContainer>
          <PatrickPic src={me} />
        </PatrickPicContainer>
        <DescriptionContainer>
          <AboutText>
            Hello, my name is Patrick! I am an innovative, self-starter, and
            creative full stack developer from Dallas, TX. Welcome to my
            portfolio! Take a look around, and if you like what you see, give me
            a shout and let's talk!
          </AboutText>
        </DescriptionContainer>
      </AboutContainer>

      {/* <AboutTitle>About Me</AboutTitle>
            <PatrickPic src={me} />
            <DescriptionAboutMe>
            I am a full stack developer from Dallas, TX. My adventure in coding began last year and I've been having fun ever since. 
            Are you looking for an innovative, self-starter, and creative team member? Give me a shout and let's talk!
            </DescriptionAboutMe> */}
    </div>
  );
};

export default AboutMe;
