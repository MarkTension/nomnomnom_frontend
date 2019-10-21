import React from "react";
import "../App.css";
import styled from "styled-components";
import { Box, Flex, Image } from "rebass";
import { isMobile } from "react-device-detect";

import papedie from "../images/papedie.png";
import poepedie from "../images/poepedie.png";

const Text = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1em;
  text-align: center;
  color: black;
`;

const IntroBox = styled.div`
  justify-content: center;
  background: white;
  width: 100%;
  marginleft: 5%;
`;

const instroStyle = {
  marginTop: "5%",
  marginLeft: "10%",
  padding: "5%",
  width: "70%",
  justifySelf: "center",
  justifyContent: "center"
};
const wordStyle = {
  fontSize: "0.8em",
  fontWeight: 300,
  color: "black"
};

const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-style: slim;
  font-weight: 300;
  text-align: center;
  color: black;
`;

const Button = styled.button`
  outline: none;
  background: snow;
  color: "palevioletred";
  font-size: 1.5em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 20px;
  :hover {
    background: Seashell;
  }
`;

const Button2 = styled.button`
  /* outline: none; */
  border: none;
  background: snow;
  color: "palevioletred";
  font-size: 0.5em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 0.1em;
  width: 20%;
  padding: 0.25em 1em;
  border-radius: 10px;
  border: 2px solid Seashell;
  :hover {
    background: Seashell;
  }
`;

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: "white",
      height: 0.5
    }}
  />
);

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {}

  render() {
    return (
      <IntroBox style={instroStyle}>
        <Title>How to play the NOMNOM restaurant discovery game?</Title>
        <Flex width="100%" flexWrap="wrap" style={{ justifyContent: "center" }}>
          <Box p={[1]} width={[1]}>
            <center>
              <Button
                style={{ background: "white" }}
                onClick={() => this.props.instructionsDone()}
              >
                Start!
              </Button>
            </center>
          </Box>
          <Box p={[1]} width={[1 / 2]}>
            <Box p={[1]} width={[1]}>
              <Image
                height={"100%"}
                width={"100px"}
                borderRadius={10}
                margin={0}
                src={papedie}
                alt="instruction1"
              />
            </Box>
            <span> 😒</span>
            <span style={{ fontSize: "2em" }}> 😍</span>
          </Box>
          <Box p={[1]} width={[1 / 2]}>
            <Text>
              {" "}
              {isMobile ? "swipe left to 😍" : "Click the 😍"} if this
              restaurant is what you'd be into
            </Text>
          </Box>
          <Box p={[1]} width={[3 / 4]}>
            <ColoredLine color="black" />
          </Box>
          <Box p={[1]} width={[1 / 2]}>
            <Text>
              {isMobile ? "Swipe right to 😒" : "Click the 😒"} if this
              restaurant is not what you're looking for
            </Text>
          </Box>
          <Box p={[1]} width={[1 / 2]}>
            <Box p={[1]} width={[1]}>
              <Image
                height={"100px"}
                width={"100px"}
                borderRadius={10}
                margin={0}
                src={poepedie}
                alt="instruction1"
              />
            </Box>
            <span style={{ fontSize: "2em" }}> 😒</span>
            <span> 😍</span>
          </Box>
          <Box p={[1]} width={[3 / 4]}>
            <ColoredLine color="black" />
          </Box>
          <Text style={{ textAlign: "center" }}>
            Our machine learning magic will help you navigate to your perfect
            match
          </Text>

          <Box p={[1]} width={[1]}>
            <center>
              <Button
                style={{ background: "white" }}
                onClick={() => this.props.instructionsDone()}
              >
                Start!
              </Button>
            </center>
          </Box>
        </Flex>
      </IntroBox>
    );
  }
}

export default Instructions;
