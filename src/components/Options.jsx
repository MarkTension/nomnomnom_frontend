import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { Box, Flex } from "rebass";
import Entry from "./Entry"; // this is the card for each restaurant
import entries from "./Entries"; // this is an initial test array with all restuarants
import logo from "../images/logo_sq.png";

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

const imageStyle = {
  marginBottom: "10%",
  height: "300px",
  opacity: "0.1"
};

function makeComponents(state) {
  let components = [];

  for (let i = 0; i < 5; i++) {
    components.push(
      <Entry
        title={state.list[i].title}
        body={state.list[i].body}
        price={state.list[i].price}
        image={state.list[i].image}
        new={true}
      />
    );
  }
  return components;
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.poo = 0;
    this.state = {
      list: entries,
      show: false,
      show_load: true
    };

    // make initial list of components
    this.components = makeComponents(this.state);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // copy old state
    let prevState = this.state;
    // change copy
    prevState.list.sort(function() {
      return 0.5 - Math.random();
    });
    // apply to new state
    this.setState({ state: prevState });

    // TODO: change timeout for API request
    let reloadComponents = new Promise((resolve, reject) => {
      this.setState({ show_load: true });
      setTimeout(function() {
        resolve("Success!");
      }, 800);
    });

    this.setState({ show: false });
    reloadComponents.then(successMessage => {
      console.log("Yay! " + successMessage);
      this.setState({ show: true });
      this.setState({ show_load: false });
    });

    this.components = makeComponents(this.state);
  }

  render() {
    return (
      <IntroBox id="introbox" style={instroStyle} className="introBox">
        <Flex
          id="demo"
          flexWrap="wrap"
          width="100%"
          style={{ marginBottom: 50 }}
        >
          <Box p={2} width={1} align="center" ref="umountable">
            <Text>Discovery Demo</Text>
            <Text_sub>
              Specify preference with emojis <br /> Hit{" "}
              <em>Generate Restaurants</em> to discover further
            </Text_sub>
            <Button onClick={this.handleClick}> Generate restaurants </Button>
            <Box p={[1]} width={[1]}>
              {this.state.show_load && (
                <img
                  src={logo}
                  className="fadein"
                  alt="logo"
                  style={imageStyle}
                />
              )}
            </Box>
          </Box>
          <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
            {this.state.show && this.components[0]}
          </Box>
          <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
            {this.state.show && this.components[1]}
          </Box>
          <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
            {this.state.show && this.components[2]}
          </Box>
          <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
            {this.state.show && this.components[3]}
          </Box>
          <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
            {this.state.show && this.components[4]}
          </Box>
        </Flex>
      </IntroBox>
    );
  }
}

export default Options;
