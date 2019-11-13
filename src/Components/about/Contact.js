import React from 'react';
import styled from 'styled-components';
import me from '../../images/patrick.png'


const Contact = () =>{

const ReachOut = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    `

const ContactInfo = styled.div`
width: 60%;
text-align: center;
margin: 20px auto;
font-family: 'Poppins', sans-serif;
`;

const MailToLink = styled.a`
text-decoration: none;
color: black;
&:visited { text-decoration: none; color:#feda6a; }
&:hover { text-decoration: none; color:#feda6a; }
&:focus { text-decoration: none; color:#feda6a; }
&:hover, &:active { text-decoration: none; color:#feda6a }
`;



    return (
        <div>
            <ReachOut>Reach Out</ReachOut>
            <ContactInfo>
            <MailToLink href="mailto:patrickj188Dev@gmail.com">Send mail</MailToLink>
            </ContactInfo>

        </div>
    )
}

export default Contact;