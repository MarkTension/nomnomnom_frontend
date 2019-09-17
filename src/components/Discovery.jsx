import React from "react";
import ReactDOM from "react-dom";
import "../App.css";
import styled, { keyframes } from "styled-components";
import { Box, Flex } from "rebass";
import Entry from "./Entry"; // this is the card for each restaurant
import Reservation from "./Reservation"; // this is the card for each restaurant
import entries from "./Entries"; // this is an initial test array with all restuarants
import logo from "../images/logo_sq.png";
import animateScrollTo from "animated-scroll-to";

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

const Text_sub2 = styled.h2`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 0.5em;
  text-align: center;
  color: black;
`;

const instroStyle = {
  padding: "5%",
  height: "100%",
  marginLeft: "5%",
  marginright: "5%"
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
const Button2 = styled.button`
  /* outline: none; */
  border: none;
  background: snow;
  color: "palevioletred";
  font-size: 1em;
  font-weight: 300;
  color: DarkSlateGrey
  margin: 0.1em;
  width: 100%;
  padding: 0.25em 1em;
  border-radius: 10px;
  :hover {
    background: Seashell;
  }
`;

const imageStyle = {
  marginBottom: "10%",
  height: "300px",
  opacity: "0.1"
};

const logoStyle = {
  marginBottom: "0%",
  height: "150px"
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
          state.list[i].alcohol,
          state.list[i].outside
        ]}
        type={[
          state.list[i].Type_Ontbijt,
          state.list[i].Type_Brunch,
          state.list[i].Type_Lunch,
          state.list[i].Type_Diner
        ]}
        reservation={reserve => this.setState({ reservation: i, show: false })}
      />
    );
  }
  return components;
}

class Discovery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: entries,
      show: false,
      show_load: true,
      reservation: false // reservation pressed?
    };
    this.cycle = 0; // tracking round number
    this.reservoir = {}; // storing each restaurant state

    makeComponents = makeComponents.bind(this);

    // make initial list of components
    this.components = makeComponents(this.state);

    // handle click
    this.handleClick = this.handleClick.bind(this);

    this.handleClick();
  }

  handleClick() {
    animateScrollTo(document.querySelector("#cards_view"));
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
      this.reservoir[this.cycle] = this.state.list;
      this.cycle += 1;

      return newstate;
    };

    // put json into new state
    this.update_state = function(newstate) {
      this.setState({ list: newstate });
      // finally make components
      this.components = makeComponents(this.state);

      this.setState({ show_load: false });
      this.setState({ show: true });
      animateScrollTo(document.querySelector("#cards_view"));
    };

    fetch(
      "http://nomnomv2.4jf3fe3e3p.eu-west-2.elasticbeanstalk.com/restaurant",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...this.props.filters, ...this.reservoir })
      }
    ) //this.state.filters
      .then(response => this.get_response(response)) // verify response success
      .then(response => this.unpack_response(response)) // unpack the dictionary
      .then(response => this.update_state(response)); // update the state;
  }

  reactThis(event) {
    this.props.setFilters(false);

    event.preventDefault();
  }

  render() {
    // show filters
    let filter = this.props.filters;
    const range = this.props.filters.range;

    delete filter["show"];
    // delete filter["range"];

    for (let key in filter) {
      if (filter[key] == 1 && key != "range") {
        var filter_choice = key;
      }
    }

    return (
      <IntroBox id="introbox" style={instroStyle} className="introBox">
        <Flex
          id="demo"
          flexWrap="wrap"
          width="100%"
          style={{ marginBottom: 50 }}
        >
          <Box p={[1]} align="center" width={[1 / 3]}>
            <img src={logo} className="fadein" alt="logo" style={logoStyle} />
          </Box>
          <Box p={[1]} width={[1 / 3]}>
            <Text_sub>
              Discovering <b>{filter_choice}</b> within <b>{range} km</b>
            </Text_sub>
            <Button onClick={this.reactThis.bind(this)}> Go Back </Button>
          </Box>

          <Box id="cards_view" p={2} width={1} align="center" ref="umountable">
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

          {this.state.reservation != false && (
            <Reservation restaurant={this.state.list[this.state.reservation]} />
          )}

          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[0]}
            </Box>
          )}

          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[1]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[2]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[3]}
            </Box>
          )}
          {this.state.show && (
            <Box className="basket" p={[1]} width={[1, 1 / 2, 1 / 5]}>
              {this.components[4]}
            </Box>
          )}
          <Button2 onClick={this.handleClick}>👉 Next restaurants 👈</Button2>

          <Box p={2} width={1} align="center">
            <Text_sub>Specify preference with emoji's*</Text_sub>
            <Text_sub2>
              <i>
                *This trains our algorithms to come up with better matching
                discoveries in the next round
              </i>
            </Text_sub2>
          </Box>
        </Flex>
      </IntroBox>
    );
  }
}

export default Discovery;
