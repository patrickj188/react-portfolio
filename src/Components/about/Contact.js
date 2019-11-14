import React from "react";
import styled from "styled-components";
import Email from "../../images/Email.png";
import GitHub from "../../images/GitHub.png";
import LinkedIn from "../../images/LinkedIn.png";

const Contact = () => {
  const ReachOut = styled.h1`
    font-size: 50px;
    font-family: "Economica", sans-serif;
    color: #1d1e22;
  `;

  const ContactInfo = styled.div`
    width: 60%;
    text-align: center;
    margin: 20px auto;
    font-family: "Poppins", sans-serif;
  `;

  const ContactLink = styled.a`
    text-decoration: none;
    color: black;
    margin: 0 20px;

    &:visited {
      text-decoration: none;
      color: #1d1e22;
    }
    &:hover {
      text-decoration: none;
      color: #1d1e22;
    }
    &:focus {
      text-decoration: none;
      color: #1d1e22;
    }
    &:hover,
    &:active {
      text-decoration: none;
      color: #1d1e22;
    }
  `;

  const Logo = styled.img``;

  return (
    <div>
      <ReachOut>Reach Out</ReachOut>
      <ContactInfo>
        <ContactLink href="https://www.linkedin.com/in/patrickdeanjohnson/">
          LinkedIn Logo
        </ContactLink>
        <ContactLink href="https://github.com/patrickj188">
          GitHub Logo
        </ContactLink>
        <ContactLink href="mailto:patrickj188Dev@gmail.com">
          Mail Logo
        </ContactLink>
      </ContactInfo>
    </div>
  );
};

export default Contact;
