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
        title={state.list[i].name}
        cuisine={state.list[i].cuisine}
        price={state.list[i].price_min}
        image={state.list[i].z_image}
        specific={[
          state.list[i].vegan,
          state.list[i].vegetarisch,
          state.list[i].alcohol
        ]}
        type={[
          state.list[i].Type_Ontbijt,
          state.list[i].Type_Brunch,
          state.list[i].Type_Lunch,
          state.list[i].Type_Diner
        ]}
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
    // handle click
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // copy old state
    var prevState = this.state;
    // change copy
    prevState.list.sort(function() {
      return 0.5 - Math.random();
    });

    // jsonify the response
    this.get_response = function(response) {
      if (response.ok) {
        this.setState({ show_load: true });
        return response.json();
      }
      // return response.json();
      console.log("Network response was not ok.");
    };
    // put json into new state
    this.unpack_response = function(restaurants) {
      var newstate = [];
      // update state
      for (var i in restaurants) {
        if (restaurants.hasOwnProperty(i)) {
          newstate.push(restaurants[i]);
        }
      }
      return newstate;
    };
    // put json into new state
    this.update_state = function(newstate) {
      this.setState({ list: newstate });
      // finally make components
      this.components = makeComponents(this.state);

      this.setState({ show_load: false });
      this.setState({ show: true });
    };

    // fetch new state from API
    // GET request
    fetch("http://localhost:5000/restaurant")
      .then(response => this.get_response(response)) // verify response success
      .then(response => this.unpack_response(response)) // unpack the dictionary
      .then(response => this.update_state(response)); // update the state

    // apply to new state
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
