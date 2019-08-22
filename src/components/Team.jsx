import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { Box, Flex, Image } from "rebass";
import hugo from "../images/team_hugo.png";
import mark from "../images/team_mark.png";
import daniel from "../images/team_daniel.png";
import lucas from "../images/team_lucas.png";

const Text = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
`;

const Text_sub = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1em;
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
  width: 80%;
`;

const Image_container = styled.div`
  justify-content: center;
  alignitems: "center";
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: rotate(20deg);
  }
`;

const Wrapper = styled.section`
  background: snow;

  border-radius: 20px;
  :hover {
    background: Seashell;
  }
`;

const imageStyle = {
  marginBottom: "0%",
  borderRadius: "10px",
  height: "200px"
};

class Team extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IntroBox id="introbox" style={instroStyle} className="introBox">
        <Flex
          id="demo"
          flexWrap="wrap"
          width="100%"
          style={{ marginBottom: "0px" }}
        >
          <Box p={2} width={1} align="center" ref="umountable">
            <Text>Team</Text>
          </Box>
          <Box p={[1]} width={[1, 1 / 2]}>
            <Image src={hugo} style={imageStyle} />

            <Text_sub>
              Hugo Evers, <em>The Visionary</em>
            </Text_sub>
          </Box>
          <Box p={[1]} width={[1, 1 / 2]}>
            <Image src={lucas} style={imageStyle} />
            <Text_sub>
              Lucas Berndsen, <em>The Scientist</em>
            </Text_sub>
          </Box>
          <Box p={[1]} width={[1, 1 / 2]}>
            <Image src={mark} style={imageStyle} />
            <Text_sub>
              Mark Tensen, <em>The Macgyver</em>
            </Text_sub>
          </Box>
          <Box p={[1]} width={[1, 1 / 2]}>
            <Image src={daniel} style={imageStyle} />
            <Text_sub>
              Daniël Koudijs, <em>The Operator</em>
            </Text_sub>
          </Box>
        </Flex>
      </IntroBox>
    );
  }
}

export default Team;
