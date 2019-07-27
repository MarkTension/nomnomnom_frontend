import React from "react";
import logo from "../images/nomnom_logo.png";
import "../App.css";
import styled from "styled-components";
import { Box, Flex, Image } from "rebass";
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
  /* border: 1px outset grey; */
`;

const Image_container = styled.div`
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
  <IntroBox style={instroStyle} class="introBox">
    <center>
      <Image_container>
        <img src={logo} className="App-logo" alt="logo" width="200px" />
      </Image_container>
    </center>
    <Text>
      <p>
        <em>Nom nom</em> is cooking up beautifully tasty restaurant
        recommendations.
        <br />
        <br />Work in progress by Amsterdam's greatest minds. <br />
        <br />
        Scroll down to try some of that schweet oily recommendation-engine
        saucey soup.
      </p>
    </Text>
    <Menu />
  </IntroBox>
);

export default Card;
