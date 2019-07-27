import React from "react";
import "../App.css";
import styled from "styled-components";
// import Work_entry from "./Work_entry";
// import entry from "./Entries"; // this is an array with all work entries
import { Box, Flex, Image } from "rebass";
import Entry from "./Entry";

const Wrapper = styled.div`
  padding: 1em;
  background: snow;
  border-radius: 25px;
  :hover {
    background: Seashell;
  }
`;

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
`;

const instroStyle = {
  marginTop: "5%",
  padding: "5%",
  height: "100%"
};

const IntroBox = styled.div`
  justify-content: center;
  alignitems: "center";
  background: white;
  /* border: 1px outset grey; */
`;

// const FixBox = Box.extend`
// height: 100vh
// `

const Options = () => (
  <IntroBox id="introbox" style={instroStyle} class="introBox">
    <Flex id="demo" flexWrap="wrap" width="100%" style={{ marginBottom: 50 }}>
      <Box p={2} width={1} align="center">
        <Text>Select Restaurant</Text>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 5]}>
        <Wrapper>
          <Image
            height={"100px"}
            borderRadius={8}
            src={require("../images/restaurants/sea.jpeg")}
            alt="logo"
          />
          <Entry title="Taste Of The Sea" body="Scottish" price="$80-90 p.p" />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 5]}>
        <Wrapper>
          <Image
            height={"100px"}
            borderRadius={8}
            src={require("../images/restaurants/mexican.jpeg")}
            alt="logo"
          />

          <Entry title="La Futura Pasada" body="Mexican" price="$20-50 p.p" />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 5]}>
        <Wrapper>
          <Image
            height={"100px"}
            borderRadius={8}
            src={require("../images/restaurants/pizza.jpeg")}
            alt="logo"
          />
          <Entry title="Pizza Di Papedie" body="Pizzeria" price="$10-40 p.p" />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 5]}>
        <Wrapper>
          <Image
            height={"100px"}
            borderRadius={8}
            src={require("../images/restaurants/japanese.jpeg")}
            alt="logo"
          />
          <Entry title="Kaba Bashi Gohan" body="Japanese" price="$40-65 p.p" />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 5]}>
        <Wrapper>
          <Image
            height={"100px"}
            borderRadius={8}
            src={require("../images/restaurants/korean.jpeg")}
            alt="logo"
          />
          <Entry title="Yum-Yum-Yum BBQ" body="Korean BBQ" price="$20-55 p.p" />
        </Wrapper>
      </Box>
    </Flex>
  </IntroBox>
);

export default Options;
