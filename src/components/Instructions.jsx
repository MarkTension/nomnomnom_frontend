import React from "react";
import "../App.css";
import styled from "styled-components";
import { Box, Flex, Image } from "rebass";

const Text = styled.h5`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
`;

const IntroBox = styled.div`
  justify-content: left;
  background: white;
  width: 80%;
`;

const instroStyle = {
  marginTop: "5%",
  padding: "5%",
  height: "100%"
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
  font-size: 1em;
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

class Instructions extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {}

  render() {
    return (
      <IntroBox id="introbox" style={instroStyle} className="introBox">
        <Title>How does it work?</Title>
        <Text>
          You'll see a number of restaurants/café's appear on screen.
          <br />
          <br />
          Click on the 🙁😍 emoji's to set your preference.
        </Text>
        <div style={{ display: "block" }}>
          <span style={wordStyle}>When done, press </span>

          <Button2>👉 Next restaurants 👈</Button2>
        </div>

        <Text>
          This makes the next round's options a little closer to your liking ❤️
          <br />
          <br />
        </Text>
        <div style={{ display: "block" }}>
          <span style={wordStyle}>
            Repeat until you've found <i>the one</i>, and press
          </span>

          <Button2>Make Reservation</Button2>
        </div>

        <Button
          style={{ background: "white" }}
          onClick={() => this.props.instructionsDone()}
        >
          Start!
        </Button>
      </IntroBox>
    );
  }
}

export default Instructions;
