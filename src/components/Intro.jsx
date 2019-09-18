import React from "react";
import logo from "../images/logo_sq.png";
import "../App.css";
import styled from "styled-components";
import Menu from "./Menu";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: justify;
  color: black;
  padding: 1em;
  font-size: 1.5rem;
`;

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  width: 60%;
`;

const ImageContainer = styled.div`
  justify-content: center;
  alignitems: "center";
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(20deg);
  }
`;

const instroStyle = {
  marginTop: "5%",
  padding: "5%",
  height: "100%"
};

const Card = () => (
  <IntroBox style={instroStyle} className="introBox">
    <center>
      <ImageContainer>
        <img src={logo} className="App-logo" alt="logo" width="300px" />
      </ImageContainer>
    </center>
    <Text>
      <p>
        <em>NOMNOMNOM</em> is innovating the field of recommendations.
        <br />We're exploring Taste Profiles by applying cutting edge ML
        techniques.
        <br />
        <br />
        Preview the personalised Discovery engine below.
        <br />
        <br />
        Interested? <a href="mailto:info@nomnomnom.ai">Send us an email!</a>
      </p>
    </Text>
    <Menu />
  </IntroBox>
);

export default Card;
