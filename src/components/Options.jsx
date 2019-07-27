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

const Options = () => (
  <IntroBox style={instroStyle} class="introBox">
    <Flex id="demo" flexWrap="wrap" width="80%" style={{ marginBottom: 500 }}>
      <Box p={2} width={1} align="center">
        <Text>Select Restaurant</Text>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 4]}>
        <Wrapper>
          <Entry title="restaurant" body="description" />

          <Image
            width={[1]}
            borderRadius={8}
            src={require("../images/logo.jpeg")}
            alt="logo"
          />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 4]}>
        <Wrapper>
          <Entry title="restaurant" body="description" />

          <Image
            width={[1]}
            borderRadius={8}
            src={require("../images/logo.jpeg")}
            alt="logo"
          />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 4]}>
        <Wrapper>
          <Entry title="restaurant" body="description" />

          <Image
            width={[1]}
            borderRadius={8}
            src={require("../images/logo.jpeg")}
            alt="logo"
          />
        </Wrapper>
      </Box>
      <Box p={[1]} width={[1, 1 / 2, 1 / 4]}>
        <Wrapper>
          <Entry title="restaurant" body="description" />

          <Image
            width={[1]}
            borderRadius={8}
            src={require("../images/logo.jpeg")}
            alt="logo"
          />
        </Wrapper>
      </Box>
    </Flex>
  </IntroBox>
);

export default Options;
